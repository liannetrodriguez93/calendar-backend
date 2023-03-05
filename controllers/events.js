const { response } = require("express");

const getEvents = async (req, res = response) => {
  
    
  
  res.json({
    ok: true,
    msg: "getEvents",
  });
};

const createEvent = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "createEvents",
  });
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
