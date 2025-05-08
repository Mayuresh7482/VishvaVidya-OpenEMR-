const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const CalendarEvent = require('../models/calendar-model');

// Create event
router.post('/', [
  body('title').isString().trim().isLength({ min: 2, max: 100 }),
  body('category').isIn(['In Office', 'Telehealth', 'Follow-up', 'No Show', 'Other']),
  body('provider').isString().trim().isLength({ min: 2, max: 100 }),
  body('patient').isString().trim().isLength({ min: 2, max: 100 }),
  body('date').isISO8601(),
  body('time').matches(/^\d{2}:\d{2}$/),
  body('duration').optional().isInt({ min: 5, max: 240 }),
  body('comments').optional().isString().isLength({ max: 500 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Validation failed', details: errors.array() });
  }
  try {
    const sanitized = {
      ...req.body,
      title: String(req.body.title).trim(),
      category: String(req.body.category).trim(),
      provider: String(req.body.provider).trim(),
      patient: String(req.body.patient).trim(),
      date: new Date(req.body.date),
      time: String(req.body.time).trim(),
    };
    // Check for duplicate appointment (match provider, time, and same day)
    const startOfDay = new Date(sanitized.date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(sanitized.date);
    endOfDay.setHours(23, 59, 59, 999);
    const existing = await CalendarEvent.findOne({
      provider: sanitized.provider,
      time: sanitized.time,
      date: { $gte: startOfDay, $lte: endOfDay },
    });
    if (existing) {
      return res.status(409).json({ error: 'Appointment already exists for this provider, date, and time.' });
    }
    const event = new CalendarEvent(sanitized);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create event.' });
  }
});

// Get events (with optional filtering)
router.get('/', async (req, res) => {
  try {
    const { provider, date } = req.query;
    const filter = {};
    if (provider) filter.provider = String(provider).trim();
    if (date) {
      // Find events for the specific day (ignoring time)
      const start = new Date(date);
      start.setHours(0, 0, 0, 0);
      const end = new Date(date);
      end.setHours(23, 59, 59, 999);
      filter.date = { $gte: start, $lte: end };
    }
    const events = await CalendarEvent.find(filter);
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events.' });
  }
});

// Get single event
router.get('/:id', async (req, res) => {
  try {
    const event = await CalendarEvent.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch event.' });
  }
});

// Update event
router.put('/:id', [
  body('title').optional().isString().trim().isLength({ min: 2, max: 100 }),
  body('category').optional().isIn(['In Office', 'Telehealth', 'Follow-up', 'No Show', 'Other']),
  body('provider').optional().isString().trim().isLength({ min: 2, max: 100 }),
  body('patient').optional().isString().trim().isLength({ min: 2, max: 100 }),
  body('date').optional().isISO8601(),
  body('time').optional().matches(/^\d{2}:\d{2}$/),
  body('duration').optional().isInt({ min: 5, max: 240 }),
  body('comments').optional().isString().isLength({ max: 500 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Validation failed', details: errors.array() });
  }
  try {
    const event = await CalendarEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update event.' });
  }
});

// Delete event
router.delete('/:id', async (req, res) => {
  try {
    const event = await CalendarEvent.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete event.' });
  }
});

module.exports = router;
