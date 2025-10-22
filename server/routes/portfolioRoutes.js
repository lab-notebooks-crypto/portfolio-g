const express = require('express');
const Portfolio = require('../models/Portfolio');
const router = express.Router();

// POST /api/portfolio - Save portfolio data
router.post('/', async (req, res) => {
  try {
    const { name, about, skills, university, project } = req.body;
    
    // Delete existing portfolio (since we only want one)
    await Portfolio.deleteMany({});
    
    // Create new portfolio
    const portfolio = new Portfolio({
      name,
      about,
      skills: Array.isArray(skills) ? skills : skills.split(',').map(s => s.trim()),
      university,
      project
    });

    const savedPortfolio = await portfolio.save();
    res.status(201).json(savedPortfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/portfolio - Fetch portfolio data
router.get('/', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne().sort({ createdAt: -1 });
    if (!portfolio) {
      return res.status(404).json({ message: 'No portfolio found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;