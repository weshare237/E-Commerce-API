const { UnauthenticatedError } = require('../errors')
const { isTokenValid } = require('../utils')

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token

  if (!token) {
    throw new UnauthenticatedError('Authentication Invalid')
  }

  try {
    const { userId, name, role } = isTokenValid({ token })
    req.user = { userId, name, role }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication Invalid')
  }
}

module.exports = { authenticateUser }
