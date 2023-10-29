
import { Router } from 'express';
import { registerUser,login,getUser } from '../controller/userController.js';

const userRoutes = Router();

userRoutes.post('/register',registerUser);

userRoutes.post('/login',login)

userRoutes.get('/currentUser',getUser)

export default userRoutes;