const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const register = async (req, res) => {
  const { email, name, password } = req.body

  const emailAlreadyTaken = await User.findOne({ email })

  if (emailAlreadyTaken) {
    throw new CustomError.BadRequestError('Email already taken')
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0

  const role = isFirstAccount ? 'admin' : 'user'

  const user = await User.create({ email, name, password, role })

  res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  res.send('user login')
}

const logout = async (req, res) => {
  res.send('user logout')
}

module.exports = {
  register,
  login,
  logout,
}
