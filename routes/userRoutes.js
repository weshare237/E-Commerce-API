const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../middleware/authentication')

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController')

router.get('/', authenticateUser, getAllUsers)
router.get('/showMe', showCurrentUser)
router.patch('/updateUser', updateUser)
router.patch('/updateUserPassword', updateUserPassword)
router.get('/:id', authenticateUser, getSingleUser)

module.exports = router
