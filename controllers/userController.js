const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const {
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
} = require('../errors')

const getAllUsers = async (req, res) => {
  const users = await User.find({ role: 'user' }).select('-password')

  res.status(StatusCodes.OK).json({ users })
}

const getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (!user) {
    throw new NotFoundError(`No user with id ${userID}`)
  }

  res.status(StatusCodes.OK).json({ user })
}

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user })
}

const updateUser = async (req, res) => {
  res.send('update user')
}

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body

  if (!oldPassword || !newPassword) {
    throw new BadRequestError('Please provide both old and new password')
  }

  const user = await User.findById(req.user.userId)

  const isOldPasswordCorrect = await user.comparePassword(oldPassword)

  if (!isOldPasswordCorrect) {
    throw new UnauthenticatedError('Invalid credentials')
  }

  user.password = newPassword

  await user.save()

  res.status(StatusCodes.OK).json({ msg: 'Success! Password Updated' })
}

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
}
