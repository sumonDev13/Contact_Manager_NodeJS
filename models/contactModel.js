import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    user_id: { type:mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'user'
    },
    name: {
      type: "string",
      required: [true, "please provide a name"],
    },
    email: {
      type: "string",
      required: [true, "please provide a email address"], 
    },
    phone: {
      type: "string",
      required: [true, "please provide a phone number"],
    },
  },
  {
    timestamps: true,
  }
);
export const Contact = mongoose.model('Contact', contactSchema);
