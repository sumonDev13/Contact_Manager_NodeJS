import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: "string",
      required: [true, "please enter a username"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
