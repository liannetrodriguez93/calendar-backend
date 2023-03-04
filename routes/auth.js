/*
  User Route /Auth
  host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/field-validator");

const router = Router();

const { createUser, login, refreshToken } = require("../controllers/auth");
const { validateJWT } = require("../middlewares/validate-jwt");

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
    fieldValidator,
  ],
  createUser
);

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password is required and should have min 6 character"
    ).isLength({ min: 6 }),
    fieldValidator,
  ],
  login
);

router.get("/refresh", validateJWT, refreshToken);

module.exports = router;
