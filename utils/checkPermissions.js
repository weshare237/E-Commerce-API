const { UnauthorizedError } = require('../errors')

const checkPermissions = (requestUser, ressourceUserId) => {
  if (requestUser.role === 'admin') return

  if (requestUser.userId === ressourceUserId.toString()) return

  throw new UnauthorizedError('Not authorized to access this route')
}

module.exports = checkPermissions
