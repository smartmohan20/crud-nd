import { body, validationResult } from 'express-validator';
import { sendJsonResponse } from '../../request-response-helper/requestResponseHelper.js';

const strCurrFileUrl = import.meta.url

const validationRules = [
    // Validate existence, non-emptiness, and string type for symbolId field
    body('name')
        .exists()
        .notEmpty()
        .isString(),
    body('email')
        .exists()
        .notEmpty()
        .isString()
        .isEmail(),
    body('password')
        .exists()
        .notEmpty()
        .isString(),
    body('dob')
        .exists()
        .notEmpty()
        .isInt()
];

// Middleware to validate request
export const validate = async (req, res, next) => {
    try {
        await Promise?.all(validationRules?.map((rule) => rule?.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const objRes = {
                statusCode: 400,
                message: 'Validation failed!',
                errors: errors.array()
            };

            // Send json response
            return await sendJsonResponse(res, objRes);
        }
        
        next();
    } catch (error) {
        console.error('Exception occured in "validate"!', 'File: ', strCurrFileUrl, 'Error: ', error);
    }
};
