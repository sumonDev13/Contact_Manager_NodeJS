import express from 'express';
const router = express.Router();

import { getContacts,createContact,updateContact,deleteContact,getContact } from '../controller/contactController.js';

router.get('/',getContacts)
router.post('/',createContact)
router.put('/:id',updateContact)
router.get('/:id',getContact)
router.delete('/:id',deleteContact)


export default router;