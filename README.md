# GoOhNo - AI-POWERED PERSONAL TRAVEL PLANNER WEB APP – GRADUATION THESIS PROJECT

A platform for exploring travel reviews and generating customized itineraries with the assistance of AI.

## Features

### User Features

- **Authentication & Authorization**
  - Register and login with email/password
  - JWT-based authentication
  - Role-based access control (Admin/User)

- **Destination Discovery**
  - Explore places by type (cultural, nature, food, etc.)
  - Filter and search destinations
  - View detailed destination info
  - Like and save destinations
  - Read and write user reviews
  - View trending and highly-rated places

- **AI Trip Planning**
  - Input travel preferences and duration
  - Get smart itinerary suggestions
  - Edit and save trip plans
  - Re-generate plan based on changes

- **User Profile**
  - View and update personal info
  - Manage saved destinations and trips
  - View personal reviews and activity history

### Admin Features

- **User Management**
  - View all users
  - Delete users
  - Grant admin roles

- **Content Management**
  - Add/edit/remove destination categories
  - Moderate reviews and destinations
  - Manage AI trip logic settings

- **Dashboard**
  - View system statistics
  - Monitor user engagement
  - Analyze travel trends

## Tech Stack

### Frontend

- **Framework**: React.js
- **UI Library**: Ant Design
- **State Management**: React Context
- **Routing**: React Router
- **HTTP Client**: Axios
- **Styling**: SCSS Modules + utility-first CSS

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT
- **AI Integration**: OpenAI API 
- **File Handling**: Multer (for destination images)
- **Password Hashing**: bcrypt

## Project Structure
```bash
├── Frontend/
│ ├── public/
│ └── src/
│ ├── components/        # Reusable components
│ ├── pages/             # Page-level components
│ ├── features/          # Feature modules (e.g., trip planner)
│ ├── api/               # API interaction layer
│ ├── contexts/          # Context providers
│ └── styles/            # SCSS Modules
├── Backend/
│ ├── middleware/        # Auth, file upload, error handling
│ └── src/
│ ├── config/            # DB and environment config
│ ├── controllers/       # Request logic
│ ├── models/            # Mongoose schemas
│ ├── routes/            # API routes
│ ├── services/          # AI planner, user services
│ └── utils/             # Helper functions
```

## Setup & Installation

### Prerequisites

- Node.js (>=14.x)
- MongoDB
- npm or yarn
- OpenAI API Key (for AI planning)

### Backend Setup

1. Install dependencies:
```bash
cd Backend
npm install
```

2. Create a `.env` file:
```bash
PORT=8080
MONGO_DB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=1d
OPENAI_API_KEY=your_openai_key
```

3. Start the server:
```bash
npm run dev  
```

### Frontend Setup

1. Install dependencies:
```bash
cd Frontend
npm install
```

2. Create `.env`:
```bash
REACT_APP_API_URL=http://localhost:8080/v1/api
```

3. Run the dev server:
```bash
npm start
```

## API Overview

The API documentation and AI integration details will be updated soon.

