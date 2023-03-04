const { Router } = require("express");

const { validateJWT } = require("../middlewares/validate-jwt");
const {
  getEvents,
  createEvents,
  updateEvents,
  deleteEvents,
} = require("../controllers/events");

const router = Router();

router.get("/", validateJWT, getEvents);
router.post("/", validateJWT, createEvents);
router.put("/:id", validateJWT, updateEvents);
router.delete("/:id", validateJWT, deleteEvents);

module.exports = router;
