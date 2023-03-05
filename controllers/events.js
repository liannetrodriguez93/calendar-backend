const { response } = require("express");
const EventModel = require("../models/EventModel");

const getEvents = async (req, res = response) => {
  const events = await EventModel.find().populate("user", "name");

  res.json({
    ok: true,
    msg: {
      events: events,
    },
  });
};

const createEvent = async (req, res = response) => {
  const event = new EventModel(req.body);

  try {
    event.user = req.uid;
    const savedEvent = await event.save();
    res.json({
      ok: true,
      msg: {
        event: savedEvent,
      },
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
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await EventModel.findById(eventId);

    if (!event) {
      res.status(404).json({
        ok: false,
        msg: "An event with that id doesn't exist",
      });
    }

    if (event.user.toString() !== uid) {
      res.status(401).json({
        ok: false,
        msg: "You cannot update this event",
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };

    const updatedEvent = await EventModel.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    res.json({
      ok: true,
      msg: {
        events: updatedEvent,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      of: false,
      msg: "Something happend",
    });
  }
};

const deleteEvent = async (req, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await EventModel.findById(eventId);

    if (!event) {
      res.status(404).json({
        ok: false,
        msg: "An event with that id doesn't exist",
      });
    }

    if (event.user.toString() !== uid) {
      res.status(401).json({
        ok: false,
        msg: "You cannot delete this event",
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };

    await EventModel.findByIdAndRemove(eventId);

    res.json({
      ok: true,
      msg: {
        event: event,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      of: false,
      msg: "Something happend",
    });
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
