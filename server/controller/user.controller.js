const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
require("dotenv").config();

// Test Route
module.exports.test = (req, res) => {
  res.send("User route is working");
};

// Register Controller
module.exports.register = async (req, res) => {
  console.log("Request Body:", req.body); // log input

  if (!req.body) {
    console.log("No request body");
    return res.status(400).json({ message: "Request body is required" });
  }

  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    console.log("Missing fields");
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const isExistUser = await userModel.findOne({ email });
    console.log("User exists:", isExistUser);

    if (isExistUser) {
      return res.status(409).json({ message: "User already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 5);
    console.log("Hashed Password:", hashPassword);

    const newUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    console.log("User Created:", newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


// Signin Controller
module.exports.login= async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const isExistUser = await userModel.findOne({ email });

    if (!isExistUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const isPasswordMatch = await bcrypt.compare(password, isExistUser.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const { password: _, ...userWithoutPassword } = isExistUser._doc;

    const token = jwt.sign(userWithoutPassword, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // optional
        sameSite: "strict",
      })
      .status(200)
      .json({
        message: "User signed in successfully",
        user: userWithoutPassword,
        token,
      });
  } catch (err) {
    console.error("Error during signin:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
