import express from 'express';
import { validate as createVal } from '../../validators/user/create.js';
import { createUser as createCon, getAllUser as getAllCon } from '../../controllers/user.js';

const userRouter = express.Router();

// Create user route
userRouter.post('/', createVal, createCon);

// Get all users route
userRouter.get('/', getAllCon);

export default userRouter;
