// we have to create the router using express

import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const authRouter = Router();
// in this router we need to add our endpoint
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

export default authRouter;
// now we add this authRouter in our main file i.e, server.ts


