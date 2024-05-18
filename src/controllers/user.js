import { ISErrorRes } from '../common-helper/commonHelper.js';
import { sendJsonResponse } from '../request-response-helper/requestResponseHelper.js';
import { User } from '../database/models/models.js';

const strCurrFileUrl = import.meta.url

// Method to find user by email
const findUserByEmail = async (email) => {
    try {
        let objRes = ISErrorRes;

        // Find user by email
        const objUser = await User.findOne({
            where: {
                email
            }
        });

        if (objUser) {
            // Successful response
            objRes = {
                statusCode: 200,
                message: 'User found successfully!',
                data: objUser
            };
        } else {
            // Failure response
            objRes = {
                statusCode: 404,
                message: 'User not found!',
                data: {},
                errors: []
            };
        }
        
        return objRes;
    } catch (error) {
        console.error('Exception occured in "findUserByEmail"!', 'File: ', strCurrFileUrl, 'Error: ', error);
    }
};

// Method to find user by id
const findUserById = async (id) => {
    try {
        let objRes = ISErrorRes;
        
        // Find user by id
        const objUser = await User.findOne({
            where: {
                id
            }
        });

        if (objUser) {
            // Successful response
            objRes = {
                statusCode: 200,
                message: 'User found successfully!',
                data: objUser
            };
        } else {
            // Failure response
            objRes = {
                statusCode: 404,
                message: 'User not found!',
                data: {},
                errors: []
            };
        }
        
        return objRes;
    } catch (error) {
        console.error('Exception occured in "findUserById"!', 'File: ', strCurrFileUrl, 'Error: ', error);
    }
};

// Controller to historical data
export const createUser = async (req, res) => {
    try {
        let objRes = ISErrorRes;
        const { name, email, password, dob } = req.body;

        const findUserRes = await findUserByEmail(email);
        if (findUserRes?.statusCode === 200) {
            // Failure response
            objRes = {
                statusCode: 409,
                message: 'User already exists!',
                data: {},
                errors: []
            };
        } else {
            // Create user
            const objUser = await User.create({
                name,
                email: email,
                password,
                dob
            });

            // Successful response
            objRes = {
                statusCode: 200,
                message: 'User created successfully!',
                data: objUser
            };
        }
        
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

// Controller to update user
export const updateUser = async (req, res) => {
    try {
        let objRes = ISErrorRes;
        const { id } = req.params;
        const { name, email, password, dob } = req.body;

        let updatedUser = null;
        const findUserRes = await findUserById(id);
        if (findUserRes?.statusCode === 200) {
            // Update user
            const isUpdated = await User.update({
                name,
                email: email,
                password,
                dob
            }, {
                where: {
                    email
                }
            });
            
            if (isUpdated) {
                const findUserRes2 = await findUserById(id);
                if (findUserRes2?.statusCode === 200) {
                    updatedUser = findUserRes2?.data; 
                }
            }

            if (updatedUser) {
                // Successful response
                objRes = {
                    statusCode: 200,
                    message: 'User updated successfully!',
                    data: updatedUser
                };
            } else {
                // Failure response
                objRes = {
                    statusCode: 404,
                    message: 'Failed to update user!',
                    data: {},
                    errors: []
                };
            }
        } else {
            // Failure response
            objRes = {
                statusCode: 404,
                message: 'User not found!',
                data: {},
                errors: []
            };
        }
        
        // Send json response
        await sendJsonResponse(res, objRes);
    } catch (error) {
        console.error('Exception occured in "update"!', 'File: ', strCurrFileUrl, 'Error: ', error);
        return sendJsonResponse(res, {...ISErrorRes, errors: [error.message]});
    }
};

// Controller to delete user
export const deleteUser = async (req, res) => {
    try {
        let objRes = ISErrorRes;
        const { id } = req.params;
        
        const findUserRes = await findUserById(id);
        if (findUserRes?.statusCode === 200) {
            // Delete user
            const isDeleted = await User.destroy({
                where: {
                    id: id
                }
            });
            
            if (isDeleted) {
                // Successful response
                objRes = {
                    statusCode: 200,
                    message: 'User deleted successfully!',
                    data: {}
                };
            } else {
                // Failure response
                objRes = {
                    statusCode: 404,
                    message: 'Failed to delete user!',
                    data: {},
                    errors: []
                };
            }
        } else {
            // Failure response
            objRes = {
                statusCode: 404,
                message: 'User not found!',
                data: {},
                errors: []
            };
        }

        // Send json response
        await sendJsonResponse(res, objRes);
    } catch (error) {
        console.error('Exception occured in "delete"!', 'File: ', strCurrFileUrl, 'Error: ', error);
        return sendJsonResponse(res, {...ISErrorRes, errors: [error.message]});
    }
};
