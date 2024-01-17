const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { NotFoundError } = require('../errors')

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
  res.send('show current user')
}

const updateUser = async (req, res) => {
  res.send('update user')
}

const updateUserPassword = async (req, res) => {
  res.send('update user password')
}

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
}
