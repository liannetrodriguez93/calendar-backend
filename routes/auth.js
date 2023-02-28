/*
  User Route /Auth
  host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { createUser, login, refreshToken } = require("../controllers/auth");

//Auth rute
router.post(
  "/new",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password is required and should have min 6 character"
    ).isLength({ min: 6 }),
  ],
  createUser
);

router.post(
  "/",
  [ 
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password is required and should have min 6 character"
    ).isLength({ min: 6 }),
  ],
  login
);

router.get("/refresh", refreshToken);

module.exports = router;
