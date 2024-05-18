import express from 'express';
import { validate as createVal } from '../../validators/user/create.js';
import { create as createCon } from '../../controllers/user.js';

const userRouter = express.Router();

// Create user route
userRouter.post('/', createVal, createCon);

export default userRouter;
