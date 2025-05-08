// backend/models/calendar-model.js
const mongoose = require('mongoose');

const CalendarEventSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 2, maxlength: 100 },
  category: { type: String, required: true, enum: ['In Office', 'Telehealth', 'Follow-up', 'No Show', 'Other'] },
  facility: { type: String, maxlength: 100 },
  billingFacility: { type: String, maxlength: 100 },
  provider: { type: String, required: true, minlength: 2, maxlength: 100 },
  patient: { type: String, required: true, minlength: 2, maxlength: 100 },
  date: { type: Date, required: true },
  time: { type: String, required: true, match: /^\d{2}:\d{2}$/ },
  duration: { type: Number, min: 5, max: 240 },
  repeats: { type: Boolean, default: false },
  daysOfWeek: [{ type: String }],
  exclusiveCategory: { type: String },
  status: { type: String },
  roomNumber: { type: String },
  comments: { type: String, maxlength: 500 },
}, { timestamps: true });

CalendarEventSchema.index({ provider: 1, date: 1, time: 1 }, { unique: true });

module.exports = mongoose.model('CalendarEvent', CalendarEventSchema);