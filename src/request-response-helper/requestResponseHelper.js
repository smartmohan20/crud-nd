const strCurrFileUrl = import.meta.url

export const sendJsonResponse = async (res, objResponse) => {
    try {
        // Send response with status code
        res.status(objResponse?.statusCode).json(objResponse);
    } catch (error) {
        console.error('Exception occured in "sendJsonResponse"!', 'File: ', strCurrFileUrl, 'Error: ', error);
    }
};
