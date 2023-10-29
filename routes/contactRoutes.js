import { Router } from 'express';

import { getContacts,createContact,updateContact,deleteContact,getContact } from '../controller/contactController.js';
import { validateToken } from '../middleware/validateToken Handler.js';

const contactRoutes = Router();

contactRoutes.use(validateToken);
contactRoutes.get('/',getContacts)
contactRoutes.post('/',createContact)
contactRoutes.put('/:id',updateContact)
contactRoutes.get('/:id',getContact)
contactRoutes.delete('/:id',deleteContact)


export default contactRoutes; 