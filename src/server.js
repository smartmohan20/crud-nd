import app from './app.js';

const PROTOCOL = process.env.SERVER_PROTOCOL;
const HOSTNAME = process.env.SERVER_HOSTNAME;
const PORT = process.env.SERVER_PORT;

// Start the server
export const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server =>`, `Server is running on port ${PORT}`);
            console.log(`Server =>`, `Server URL: ${PROTOCOL}://${HOSTNAME}:${PORT}`);
          });          
    } catch (error) {
        console.log(`Server =>`, 'Exception occured in "startServer"! Error: ', error);
    }
};
