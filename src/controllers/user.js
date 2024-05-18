import { ISErrorRes } from '../common-helper/commonHelper.js';
import { sendJsonResponse } from '../request-response-helper/requestResponseHelper.js';
import { User } from '../database/models/models.js';

const strCurrFileUrl = import.meta.url

// Controller to historical data
export const create = async (req, res) => {
    try {
        let objRes = ISErrorRes;
        const { name, email, password, dob } = req.body;

        try {
            // Create user
            const objUser = await User.create({
                name,
                email: email,
                password,
                dob
            });

            // Send response with status code
            objRes = {
                statusCode: 200,
                message: 'User created successfully!',
                data: objUser
            };
        } catch (error) {
            objRes = {
                statusCode: 400,
                message: 'Failed to create user!',
                data: {},
                errors: [error.message]
            };
        }
        
        // Send json response
        await sendJsonResponse(res, objRes);
    } catch (error) {
        console.error('Exception occured in "create"!', 'File: ', strCurrFileUrl, 'Error: ', error);
        return sendJsonResponse(res, {...ISErrorRes, errors: [error.message]});
    }
};
