const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxLength: [32, 'Name cannot be more than 32 characters'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        maxLength: [64, 'Email cannot be more than 64 characters'],
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, 'Password should be at least 8 characters'],
        maxLength: [128, 'Password cannot be more than 128 characters']
    },
    babyGender: {
        type: String,
        enum: ['girl', 'boy', null],
        default: null
    },
    dueDate: {
        type: Date,
        default: null,
    },
    avatar: {
        type: String,
        default: null
    }
},{
    timestamps: true,
    versionKey: false
});

userSchema.pre('save', async function(){
    if(!this.isModified('password')) {
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;