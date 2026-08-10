import nodemailer from "nodemailer";
import { ContactFormData } from "../types/contact.js";

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipient = process.env.RECIPIENT_EMAIL || "info@mcservizi.it";

  // If SMTP is not configured, log message for local development & return mock success
  if (!user || !pass) {
    console.log("--------------------------------------------------");
    console.log("[SMTP NOT CONFIGURED] Contact Form Submission Received:");
    console.log(`Nome: ${data.name}`);
    console.log(`Telefono: ${data.phone}`);
    console.log(`Servizio: ${data.service}`);
    console.log(`Messaggio: ${data.message}`);
    console.log("--------------------------------------------------");
    return true;
  }

  const transporter = nodemailer.createTransport({
    host: host || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user, pass },
  });

  const mailOptions = {
    from: `"MC Servizi Web" <${user}>`,
    to: recipient,
    subject: `[Nuova Richiesta] ${data.service} - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #141414; color: #F5F5F5; padding: 20px; border-radius: 8px;">
        <h2 style="color: #A31D1D; border-bottom: 2px solid #8B0000; padding-bottom: 10px;">Nuova Richiesta di Contatto dal Sito Web</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 120px; color: #9CA3AF;">Nome:</td>
            <td style="padding: 8px; color: #F5F5F5;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #9CA3AF;">Telefono:</td>
            <td style="padding: 8px; color: #F5F5F5;"><a href="tel:${data.phone}" style="color: #A31D1D;">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #9CA3AF;">Servizio:</td>
            <td style="padding: 8px; color: #F5F5F5;">${data.service}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #9CA3AF; vertical-align: top;">Messaggio:</td>
            <td style="padding: 8px; color: #F5F5F5; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>
        <hr style="border: 0; border-top: 1px solid #2A2A2A; margin: 20px 0;" />
        <p style="font-size: 12px; color: #6B7280;">Email automatica dal modulo di contatto di MC Servizi.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  return true;
}
