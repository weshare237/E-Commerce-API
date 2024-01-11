const User = require('../models/User')

const register = async (req, res) => {
  res.send('user registration')
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
