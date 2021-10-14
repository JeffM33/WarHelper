const { Schema, model } = require('mongoose');

const warSchema = new Schema({
  city: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true,
    trim: true
  },
  time: {
    type: String,
    required: true,
    trim: true
  },
  warAuthor: {
    type: String,
    required: true,
    trim: true
  },
  dps: {
    type: Array
  },
  mDps: {
    type: Array
  },
  physDps: {
    type: Array
  },
  eleDps: {
    type: Array
  },
  healer: {
    type: Array
  },
  artillery: {
    type: Array
  }
});

const War = model('War', warSchema);

module.exports = War;