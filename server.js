import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "./src/swagger.js";
import heroRoutes from "./src/routes/heroRoutes.js";

const port = 3000;
const server = express(); // Initialize express app

// Middleware to handle JSON data
server.use(express.json());

// Serve Swagger documentation
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use the heroRoutes for handling hero-related requests
server.use('/heroes', heroRoutes);

// Error handling middleware
server.use((err, req, res) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({ message: 'Something broke!' }); // Send error response
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
