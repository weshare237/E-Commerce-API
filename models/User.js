const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: [true, 'Email already taken'],
    required: [true, 'Please provide email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 8,
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} not supported',
    },
    default: 'user',
    required: true,
  },
})

module.exports = mongoose.model('User', UserSchema)
