import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(404).json({ message: "please fill all required" });
    }
    const alreadyRegistered = await User.findOne({ email: email });
    if (alreadyRegistered) {
      res.status(400).json({ message: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    if (user) {
      res.status(200).json({ message: "User created successfully" });
    }
    res.status(404).json({ message: "request failed" });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (req, res) => {
  res.status(200).json({ message: "successfully logged in" });
};

export const getUser = async (req, res) => {
  res.status(200).json({ message: "current user" });
};
