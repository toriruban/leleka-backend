const User = require('../models/User.js');
const formatUserResponse = require('../utils/formatUserResponse');
const generateToken = require('../utils/generateToken');
const ctrlWrapper = require('../utils/ctrlWrapper');

const register = ctrlWrapper(async (req, res) => {
  const { name, email, password, dueDate, babyGender } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email is already in use' });
  }

  const user = await User.create({ name, email, password, dueDate, babyGender });
  const token = generateToken(user._id);

  res.status(201).json({
    token,
    user: formatUserResponse(user)
  });
});

const login = ctrlWrapper(async (req, res) => { 
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
});

const logout = ctrlWrapper(async (req, res) => {
  res.json({ message: 'Logged out successfully' });
});

module.exports = {
  register,
  login,
  logout
};