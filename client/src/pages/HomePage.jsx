import React, { useState, useEffect } from 'react';
import axios from 'axios';
import About from '../components/About';
import Skills from '../components/Skills';
import University from '../components/University';
import Project from '../components/Project';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    skills: '',
    university: '',
    project: ''
  });
  
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch existing portfolio data on component mount
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/portfolio');
      setPortfolioData(response.data);
    } catch (error) {
      if (error.response?.status !== 404) {
        setError('Failed to fetch portfolio data');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/portfolio', formData);
      setPortfolioData(response.data);
      setSuccess('Portfolio saved successfully!');
      
      // Clear form
      setFormData({
        name: '',
        about: '',
        skills: '',
        university: '',
        project: ''
      });
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to save portfolio');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Form Section */}
      <div className="form-section">
        <h2>Create Your Portfolio</h2>
        
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="about">About Me</label>
            <textarea
              id="about"
              name="about"
              value={formData.about}
              onChange={handleInputChange}
              required
              placeholder="Tell us about yourself..."
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills (comma-separated)</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              required
              placeholder="JavaScript, React, Node.js, MongoDB"
            />
          </div>

          <div className="form-group">
            <label htmlFor="university">University</label>
            <input
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
              required
              placeholder="Your university name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="project">Featured Project</label>
            <textarea
              id="project"
              name="project"
              value={formData.project}
              onChange={handleInputChange}
              required
              placeholder="Describe your featured project..."
              rows="3"
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Portfolio'}
          </button>
        </form>
      </div>

      {/* Portfolio Display Section */}
      {loading && !portfolioData && (
        <div className="loading">Loading portfolio...</div>
      )}

      {portfolioData && (
        <div className="portfolio-display">
          <div className="portfolio-header">
            <h1>{portfolioData.name}</h1>
          </div>

          <About about={portfolioData.about} />
          <Skills skills={portfolioData.skills} />
          <University university={portfolioData.university} />
          <Project project={portfolioData.project} />
        </div>
      )}
    </div>
  );
};

export default HomePage;