
import { Router } from 'express';
import { registerUser,login,getUser } from '../controller/userController.js';
import { validateToken } from '../middleware/validateToken Handler.js';

const userRoutes = Router();

userRoutes.post('/register',registerUser);

userRoutes.post('/login',login)

userRoutes.get('/currentUser',validateToken,getUser)

export default userRoutes;