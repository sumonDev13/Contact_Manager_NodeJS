import asyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";


export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id: req.user.id});
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
      user_id: req.user.id
    });
    res.status(201).json(contact);
  } catch (error) {
    console.log(error.message);
  }
});

export const getContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      res.status(200).json(contact);
    }
    res.status(404).json({ message: "no contact found" });
  } catch (error) {
    console.log(error.message);
  }
});

export const updateContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404).json({ message: "no contact found" });
    }
    if (contact.user_id.toString() !== req.user.id) {
      res.status(403).json({ message: "user have not permission to update " });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedContact);
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404).json({ message: "no contact found" });
    }
    if (contact.user_id.toString() !== req.user.id) {
      res.status(403).json({message:'user have not permission to delete'});
    }

    const deletedContact = await Contact.findByIdAndDelete(
        req.params.id
      );
        res.status(200).json({message:'deleted successfully'});
    } catch (error) {
        console.log(error.message);
    }
  
});
