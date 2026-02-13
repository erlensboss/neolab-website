import FormData from "form-data";
import Mailgun from "mailgun.js";

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "mg.neolab.lv";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@neolab.lv";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (!MAILGUN_API_KEY) {
    throw new Error("MAILGUN_API_KEY environment variable is not set");
  }

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: MAILGUN_API_KEY,
    url: "https://api.eu.mailgun.net",
  });

  const { name, email, company, message } = data;

  const emailBody = `
New consultation request from NEOLab website

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}
`.trim();

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #f97316, #ea580c); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: bold; color: #374151; }
    .value { margin-top: 4px; }
    .message-box { background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Consultation Request</h2>
      <p style="margin: 8px 0 0 0; opacity: 0.9;">NEOLab Website Contact Form</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
      </div>
      <div class="field">
        <div class="label">Company</div>
        <div class="value">${company ? escapeHtml(company) : "<em>Not provided</em>"}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${escapeHtml(message).replace(/\n/g, "<br>")}</div>
      </div>
    </div>
  </div>
</body>
</html>
`.trim();

  await mg.messages.create(MAILGUN_DOMAIN, {
    from: `NEOLab Website <noreply@${MAILGUN_DOMAIN}>`,
    to: [CONTACT_EMAIL],
    "h:Reply-To": email,
    subject: `Consultation Request from ${name}`,
    text: emailBody,
    html: htmlBody,
  });
}

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char]);
}
