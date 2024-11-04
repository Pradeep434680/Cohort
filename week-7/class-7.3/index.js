import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000; // Change port to 3000 or any other available port

// Enable CORS middleware
app.use(cors());

// Simulating dynamic data from backend
app.get('/data', (req, res) => {
    const dynamicData = {
        network: Math.floor(Math.random() * 10),
        jobs: Math.floor(Math.random() * 10),
        messaging: Math.floor(Math.random() * 10),
        notifications: Math.floor(Math.random() * 10),
    };

    res.json(dynamicData);
});

// Start server
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});
