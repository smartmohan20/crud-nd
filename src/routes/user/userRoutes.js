import express from 'express';
import { validate as createVal } from '../../validators/user/create.js';
import { createUser as createCon, getAllUser as getAllCon, updateUser as updateCon } from '../../controllers/user.js';

const userRouter = express.Router();

// Create user route
userRouter.post('/', createVal, createCon);

// Get all users route
userRouter.get('/', getAllCon);

// Update user route
userRouter.put('/:id', updateCon);

export default userRouter;
