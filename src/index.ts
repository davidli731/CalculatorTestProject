import express from "express";
import { PORT, HOST, PROTOCOL } from "./config/constants.js";

// Application Logic
import
{
    additionRoute,
    subtractionRoute,
    multiplicationRoute,
    divisionRoute
} from "./routes/index.js";

async function startServer() {
    const app = express();

    // Use JSON Parsing Middleware
    app.use(express.json());

    // Define a route handler for the default home page
    app.get('/api', (req, res) => {
        return res.send("API is working!")
    });

    // Routes
    app.use('/api/addition', additionRoute);
    app.use('/api/subtraction', subtractionRoute);
    app.use('/api/multiplication', multiplicationRoute);
    app.use('/api/division', divisionRoute);

    await new Promise((resolve: any) => app.listen(PORT, resolve));
    console.log(`Server has started successfully: ${PROTOCOL}://${HOST}:${PORT}`)

    return { app };
}

startServer()
    .then(({ app: Express }) => {
        // Server Started Sucessfully
    })
    .catch(err => {
        console.error(err);
    })