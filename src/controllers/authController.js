const User = require('../models/User.js');
const formatUserResponse = require('../utils/formatUserResponse');
const generateToken = require('../utils/generateToken');

const register = async (req, res) => {
  try {
    const { name, email, password, dueDate, babyGender } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' });
    }
    
    const user = await User.create({ 
      name, 
      email, 
      password, 
      dueDate, 
      babyGender 
    });
    
    const token = generateToken(user._id);
    
    res.status(201).json({
      token,
      user: formatUserResponse(user)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user._id);
    
    res.json({
      token,
      user: formatUserResponse(user)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  logout
};
