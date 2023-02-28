/*
  User Route /Auth
  host + /api/auth
*/


const {Router} = require('express')
const router = Router();

const {createUser, login, refreshToken} = require('../controllers/auth')

//Auth rute
router.post("/new", createUser);

router.post("/", login);

router.get("/refresh", refreshToken);

module.exports = router;