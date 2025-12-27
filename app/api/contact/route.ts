import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const phone = String(body?.phone || "").trim();
    const email = String(body?.email || "").trim();
    const service = String(body?.service || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (email && !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpSecure = String(process.env.SMTP_SECURE || "false") === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.NEXT_PUBLIC_BUSINESS_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "no-reply@truecomforthvac.com";

    const subject = `Service Request: ${service} — ${name}`;
    const text = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "(none)"}`,
      `Service: ${service}`,
      "",
      message
    ].join("\n");

    // If SMTP isn't configured, don't fail the user; just log the request.
    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      console.log("[CONTACT] (SMTP not configured)\n" + text);
      return NextResponse.json({ ok: true, mode: "logged" });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass }
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email || undefined,
      subject,
      text
    });

    return NextResponse.json({ ok: true, mode: "email" });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
