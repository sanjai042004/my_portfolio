const Contact = require("../modals/contactModal");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await Contact.create({ name, email, message });

    const htmlContent = `
      <div style="padding: 20px; font-family: Arial; background: #f7f7f7;">
        <h2 style="color: #333;">📩 New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
        <p style="margin-top:20px; font-size:12px; color:#888;">
          Sent automatically from your portfolio contact form.
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "Portfolio Contact <portfolio@resend.dev>",
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New Message From ${name}`,
      html: htmlContent,
    });

    res.json({ success: true, msg: "Message saved & email sent!" });

  } catch (error) {
    console.log("Email Error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = { sendMessage };
