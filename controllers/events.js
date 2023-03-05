const { response } = require("express");
const EventModel = require("../models/EventModel");

const getEvents = async (req, res = response) => {
  const events = await EventModel.find().populate("user", "name");

  res.json({
    ok: true,
    msg: events,
  });
};

const createEvent = async (req, res = response) => {
  const event = new EventModel(req.body);

  try {
    event.user = req.uid;
    const savedEvent = await event.save();
    res.json({
      ok: true,
      msg: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      of: false,
      msg: "Something happend",
    });
  }
};

const updateEvent = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "updateEvents",
  });
};

const deleteEvent = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "deleteEvents",
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
