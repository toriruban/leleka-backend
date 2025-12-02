const User = require('../models/User.js');
const { updateProfileSchema } = require('../validation/userValidation.js');

const getProfile = async(req,res) => {
    try {
        const { token, password, ...user } = req.user.toObject();
        res.status(200).json({
            message: 'Profile retrieved successfully',
            user: user
        });
    } catch(error) {
        console.error('Get profile error:', error)
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};

const updateProfile = async(req,res) => {
    const {error, value} = updateProfileSchema.validate(req.body);
    if(error) {
       return res.status(400).json({
              message: error.details[0].message
        })
    }
    if(value.email) {
        const existingUser = User.findOne({
            email: value.email,
            _id: {$ne: req.user._id}
        });
    if(existingUser) {
        return res.status(409).json({message: 'Email is already in use'});
    }
   }
    Object.keys(value).forEach(key => {
        req.user[key] = value[key]
    });  
    await req.user.save();

    try {
        const {token, password, ...user} = req.user.toObject();
        res.status(200).json({
            message: 'Profile successfully updated',
            user: user
        });
    } catch (error) {
        console.error('Get profile error:', error)
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};

const updateAvatar = async (req, res) => {
    try {
        if(!req.file) {
            return res.status(400).json({
                message: 'No file upload',
            })
        };
        const avatarUrl = `/uploads/${req.file.fileName}`;
        req.user.avatar = avatarUrl;
        await req.user.save();

        res.status(200).json({
            message: 'Avatar successfully uploaded',
            avatar: avatarUrl
        });
    } catch(error) {
        console.error('Update avatar error:', error)
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};

module.exports = { getProfile, updateProfile, updateAvatar };