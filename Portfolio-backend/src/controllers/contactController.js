const Contact = require("../modals/contactModal");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await Contact.create({ name, email, message });

    await resend.emails.send({
      from: "portfolio@resend.dev",
      to: process.env.EMAIL,
      reply_to: email,
      subject: `New Portfolio Message From ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message: 
${message}
      `,
    });

    res.json({ success: true, msg: "Message saved & email sent!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = { sendMessage };
