const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const authenticate = async(req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader) {
            return res.status(401).json({message: 'Authorization header is missing'})
        };
        const[bearer, token] = authHeader.split(' ');
        if(bearer !== 'Bearer' || !token) {
            return res.status(401).json({message: 'Invalid authorization format. Use: Bearer <token>'})
        };
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch(err) {
            if(err.name === 'TokenExpiredError') {
                return res.status(401).json({message: 'Token has expired'});
            }
            return res.status(401).json({message: 'Invalid token'});
        }
        const user = await User.findById(decoded.userId)
        if(!user) {
            return res.status(401).json({message: 'User not found'})
        }
        req.user = user;
        next();
    } catch(error){
        console.error('Auth middleware error:', error)
        res.status(500).json({message: 'Internal server error'})
    };
};

module.exports = authenticate;