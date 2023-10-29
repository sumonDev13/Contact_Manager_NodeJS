import { Router } from 'express';

import { getContacts,createContact,updateContact,deleteContact,getContact } from '../controller/contactController.js';

const contactRoutes = Router();

contactRoutes.get('/',getContacts)
contactRoutes.post('/',createContact)
contactRoutes.put('/:id',updateContact)
contactRoutes.get('/:id',getContact)
contactRoutes.delete('/:id',deleteContact)


export default contactRoutes; 