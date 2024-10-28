// Middleware function for logging the methods
module.exports = (req, res, next) => {
    // Get current timestamp
    const currentTime = new Date().toISOString();

    // Log the request method, URL, and body (if applicable)
    console.log(`[${currentTime}] ${req.method} request for '${req.url}'`);

    // Log request body for POST/PUT requests (if necessary)
    if (req.method === 'POST' || req.method === 'PUT') {
        console.log('Request Body:', req.body);
    }

    // Move on to the next middleware or route
    next();
};
