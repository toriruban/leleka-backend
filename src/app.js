const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes); 
app.use('/api/users', userRoutes);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get('/', (req, res) => {
    res.json({message: 'Leleka app is running'});
});

app.use((req, res) => {
    res.status(404).json({message: 'Route not found'})
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        message: err.message || 'Internal server error',
    })
});

module.exports = app;