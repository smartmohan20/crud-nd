import { ISErrorRes } from '../common-helper/commonHelper.js';
import { sendJsonResponse } from '../request-response-helper/requestResponseHelper.js';
import { User } from '../database/models/models.js';

const strCurrFileUrl = import.meta.url

// Controller to historical data
export const createUser = async (req, res) => {
    try {
        let objRes = ISErrorRes;
        const { name, email, password, dob } = req.body;

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
        
        // Send json response
        await sendJsonResponse(res, objRes);
    } catch (error) {
        console.error('Exception occured in "create"!', 'File: ', strCurrFileUrl, 'Error: ', error);
        return sendJsonResponse(res, {...ISErrorRes, errors: [error.message]});
    }
};

// Controller to get all users
export const getAllUser = async (req, res) => {
    try {
        let objRes = ISErrorRes;

        // Get all users
        const arrUsers = await User.findAll();

        // Send response with status code
        objRes = {
            statusCode: 200,
            message: 'Users fetched successfully!',
            data: arrUsers
        };
        
        // Send json response
        await sendJsonResponse(res, objRes);
    } catch (error) {
        console.error('Exception occured in "getAll"!', 'File: ', strCurrFileUrl, 'Error: ', error);
        return sendJsonResponse(res, {...ISErrorRes, errors: [error.message]});
    }
};
