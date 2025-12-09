const Contact = require("../modals/contactModal");
const nodemailer = require("nodemailer");

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await Contact.create({ name, email, message });

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      replyTo: email,
      to: process.env.EMAIL,
      subject: `New Portfolio Message From ${name}`,
      text: message,
    });

    res.json({ success: true, msg: "Message saved & email sent!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = { sendMessage };
