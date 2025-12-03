require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL;

const startServer = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('✅ Connect to MongoDB');

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on ${PORT}`)
        });
    } catch(error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

startServer();