# Portfolio Simple - MERN Stack

A simple portfolio application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to create and display a single portfolio template.

## Features

- Simple form to input portfolio data (name, about, skills, university, project)
- Clean, responsive portfolio display
- MongoDB Atlas integration
- Real-time form submission and display
- Single static portfolio template

## Tech Stack

- **Frontend**: React (functional components + hooks)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas
- **HTTP Client**: Axios

## Project Structure

```
portfolio-simple/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── University.jsx
│   │   │   └── Project.jsx
│   │   ├── pages/
│   │   │   └── HomePage.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/
│   │   └── Portfolio.js
│   ├── routes/
│   │   └── portfolioRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### 1. Clone and Install Dependencies

```bash
# Install root dependencies
npm install

# Install server dependencies
npm run install-server

# Install client dependencies
npm run install-client
```

### 2. Database Setup

1. Create a MongoDB Atlas account at https://www.mongodb.com/atlas
2. Create a new cluster
3. Get your connection string
4. Update `server/.env` with your MongoDB URI:

```env
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/portfolio-simple?retryWrites=true&w=majority
PORT=5000
```

### 3. Run the Application

```bash
# Run both client and server concurrently
npm run dev

# Or run them separately:
# Terminal 1 - Server
npm run server

# Terminal 2 - Client
npm run client
```

### 4. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

- `POST /api/portfolio` - Save portfolio data
- `GET /api/portfolio` - Fetch portfolio data

## Database Schema

```javascript
{
  name: String (required),
  about: String (required),
  skills: [String],
  university: String (required),
  project: String (required),
  timestamps: true
}
```

## Usage

1. Fill out the portfolio form with your information
2. Click "Save Portfolio" to submit the data
3. Your portfolio will be displayed immediately below the form
4. The app stores only one portfolio at a time (overwrites previous data)

## Features Not Included

- Authentication/login system
- Multiple portfolio templates
- Image uploads
- External links (GitHub, LinkedIn)
- Resume upload functionality
- Deployment configuration

## Development

The application runs in development mode with:
- Hot reloading for React frontend
- Nodemon for backend auto-restart
- CORS enabled for cross-origin requests

## Contributing

This is a simple portfolio template. Feel free to fork and customize according to your needs.