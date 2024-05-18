import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

const strCurrFileUrl = import.meta.url

// Test database connection and sync models
const testAndSyncDB = async () => {
   try {
      const sequelize = (await import('./database/database.js')).default;
      await import('./database/models/models.js');

      // Test database connection
      await sequelize.authenticate()
         .then(() => {
            console.log('Database connection established successfully.');
         })
         .catch((err) => {
            console.warn('Unable to connect to the database:', err);
         });

      // Sync Sequelize models with the database
      await sequelize.sync({ alter: true });
   } catch (error) {
      console.error('Exception occured in "testAndSyncDB"!', 'File: ', strCurrFileUrl, 'Error: ', error);
   }
};

// Load environment variables from .env file
dotenv.config();

// Test and sync database
await testAndSyncDB();

// Create the Express app
const app = express();

// Enable CORS
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// Import routes
const rootRoutes = (await import('./routes/rootRoutes.js')).default;

// Use the routes
app.use('/', rootRoutes);

export default app;
