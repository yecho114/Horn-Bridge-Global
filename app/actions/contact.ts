"use server";

import nodemailer from "nodemailer";

export type ContactResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactEmail(formData: FormData): Promise<ContactResult> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "website", 200)) return { ok: true };

  const name = field(formData, "name", 120);
  const email = field(formData, "email", 200);
  const phone = field(formData, "phone", 40);
  const company = field(formData, "company", 120);
  const message = field(formData, "message", 5000);

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email and message." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const { ZOHO_SMTP_HOST, ZOHO_SMTP_USER, ZOHO_SMTP_PASS, CONTACT_TO } = process.env;
  if (!ZOHO_SMTP_HOST || !ZOHO_SMTP_USER || !ZOHO_SMTP_PASS) {
    console.error("Contact form: Zoho SMTP environment variables are missing.");
    return { ok: false, error: "Email is not configured yet. Please contact us directly." };
  }

  const transporter = nodemailer.createTransport({
    host: ZOHO_SMTP_HOST,
    port: 465,
    secure: true,
    auth: { user: ZOHO_SMTP_USER, pass: ZOHO_SMTP_PASS },
  });

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Company", company || "—"],
  ];

  try {
    await transporter.sendMail({
      from: `"Horn Bridge Website" <${ZOHO_SMTP_USER}>`,
      to: CONTACT_TO || ZOHO_SMTP_USER,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New inquiry — ${company || "Website"} — ${name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${message}`,
      html: `
        <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="color:#666"><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`,
            )
            .join("")}
        </table>
        <p style="font-family:Arial,sans-serif;font-size:14px"><b>Message:</b></p>
        <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });
    return { ok: true };
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return { ok: false, error: "Something went wrong sending your message. Please try again." };
  }
}
