const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const contactRoute = require("./src/routes/ContactRoute");

const Port = 5000;

dotenv.config();
const app = express();

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173", "https://sanjai4-portfolio.vercel.app"],
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    const mongoUri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.nbzvjxw.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(mongoUri, {
      maxPoolSize: 20,
    });

    
    console.log("✅ Connected to MongoDB with pooling");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// Routes
app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Portfolio backend is running 🟢");
});


// Start Server
connectDB().then(() => {
  app.listen(Port, () => {
    console.log(`🚀 Server running on http://localhost:${Port}`);
  });
});
