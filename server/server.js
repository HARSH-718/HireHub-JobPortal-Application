const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// 👇 Ye line add karni hai
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connect
connectDB();

// 👇 Ye line yahan add karni hai
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("HireHub Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});