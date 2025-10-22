const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  about: {
    type: String,
    required: true
  },
  skills: [{
    type: String,
    trim: true
  }],
  university: {
    type: String,
    required: true,
    trim: true
  },
  project: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Portfolio', portfolioSchema);