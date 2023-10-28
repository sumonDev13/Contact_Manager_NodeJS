import asyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";

export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

export const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    if (!name || !email || !phone) {
      res.status(404).json({ message: "all fields required" });
    }
    const contact = await Contact.create({
      name: name,
      email: email,
      phone: phone,
    });
    res.status(201).json(contact);
  } catch (error) {}
});

export const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` });
});

export const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}` });
});
