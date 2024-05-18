import express from 'express';

const strCurrFileUrl = import.meta.url

const router = express.Router();

// Root controller
const rootController  = (req, res) => {
    try {
        // Send response with status code
        res.status(200).send('Success! Server is running...');
    } catch (error) {
        console.error('Exception occured in "rootController"!', 'File: ', strCurrFileUrl, 'Error: ', error);
    }
};

// Root route
router.get('/test', rootController);

export default router;
