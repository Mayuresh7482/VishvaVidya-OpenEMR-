const CalendarEvent = require('../models/calendar-model');

exports.getAllEvents = async (req, res) => {
  const events = await CalendarEvent.find();
  res.json(events);
};

exports.addEvent = async (req, res) => {
  const newEvent = new CalendarEvent(req.body);
  await newEvent.save();
  res.json(newEvent);
};

exports.updateEvent = async (req, res) => {
  const updated = await CalendarEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEvent = async (req, res) => {
  await CalendarEvent.findByIdAndDelete(req.params.id);
  res.json({ message: 'Event deleted' });
};
