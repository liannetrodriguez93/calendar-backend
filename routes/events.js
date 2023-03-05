/*
  Events Routes
  host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");

const { fieldValidator } = require("../middlewares/field-validator");
const { validateJWT } = require("../middlewares/validate-jwt");
const { isDate } = require("../helpers/isDate");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

const router = Router();

//Validate Toke for all routes
router.use(validateJWT);

router.get("/", getEvents);
router.post(
  "/",
  [
    check("title", "Title is mandatory").not().isEmpty(),
    check("start", "Start date is mandatory").custom(isDate),
    check("end", "End date is mandatory").custom(isDate),
    fieldValidator,
  ],
  createEvent
);
router.put(
  "/:id",
  [
    check("title", "Title is mandatory").not().isEmpty(),
    check("start", "Start date is mandatory").custom(isDate),
    check("end", "End date is mandatory").custom(isDate),
    fieldValidator,
  ],
  updateEvent
);
router.delete("/:id", deleteEvent);

module.exports = router;
