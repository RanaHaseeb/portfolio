import { NextResponse } from "next/server";

/**
 * Forwards the contact form to whatever form service is configured.
 *
 * Set CONTACT_ENDPOINT to a Formspree / Getform / Basin URL that accepts a
 * JSON POST (e.g. https://formspree.io/f/xxxxxxxx) and the form submits for
 * real. With nothing configured this returns `configured: false` and the
 * client falls back to opening the visitor's mail app — so the form always
 * does something useful.
 */

const MAX = { name: 100, email: 200, message: 4000 };

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? "").trim();

  // Bots fill every field, including the one hidden from humans
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in every field." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address doesn't look right." },
      { status: 400 }
    );
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    message.length > MAX.message
  ) {
    return NextResponse.json(
      { ok: false, error: "That message is a little too long." },
      { status: 400 }
    );
  }

  const endpoint = process.env.CONTACT_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json({ ok: false, configured: false }, { status: 501 });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio enquiry from ${name}`,
      }),
    });

    if (!res.ok) throw new Error(`Form service responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Couldn't send that just now — please email me directly." },
      { status: 502 }
    );
  }
}
