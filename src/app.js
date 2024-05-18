import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// Load environment variables from .env file
dotenv.config();

// Create the Express app
const app = express();

// Enable CORS
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

export default app;
