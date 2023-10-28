import express from 'express';
const router = express.Router();

import { getContacts,createContact,updateContact,deleteContact } from '../controller/contactController.js';

router.get('/',getContacts)
router.post('/',createContact)
router.put('/:id',updateContact)
router.delete('/:id',deleteContact)


export default router;