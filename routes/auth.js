/*
  User Route /Auth
  host + /api/auth
*/


const {Router} = require('express')
const router = Router();

//Rutas auth
router.post("/new", (req, res) => {
  res.json({
    ok: true,
  });
});

router.post("/", (req, res) => {
  res.json({
    ok: true,
    msg: 'login'
  });
});


router.get("/refresh", (req, res) => {
  res.json({
    ok: true,
    msg: 'refresh'
  });
});

module.exports = router;