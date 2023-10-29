import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";


// register users function
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: "all fields required" });
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400).json({ message: "User already" });
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400).json({ message: "User not found" });
  }
});

// login users

export const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "email and password required" });
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.SECRET,
        { expiresIn: "50m" }
      );
      res.status(200).json({ accessToken });
    }
    res
      .status(400)
      .json({ message: "provided email or password is not correct" });
  } catch (error) {}
});

export const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});
