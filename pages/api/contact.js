import { Resend } from "resend";

export default async function contact(req, res) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // get domain from req
    const domain = req.headers.host;

    const mailData = {
      from: process.env.CONTACT_EMAIL_FROM,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: req.body.email,
      subject: `Message From ${req.body.name} [${domain}]`,
      text: req.body.message + " | reply to: " + req.body.email,
      html: `<div>${req.body.message}</div><p>reply to:
      ${req.body.email}</p>`,
    };

    const response = await resend.emails.send({
      from: mailData.from,
      to: mailData.to,
      replyTo: req.body.email,
      subject: mailData.subject,
      text: mailData.text,
      html: mailData.html,
    });

    if (response.error !== null) {
      res.json(response.error);
      res.status(500).end();
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    res.end(JSON.stringify(response));
  } catch (error) {
    console.error("error", error);
    res.json(error);
    res.status(405).end();
  }
}
