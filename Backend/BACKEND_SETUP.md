# Backend Setup Instructions

## Environment Variables
The `.env` file contains:
```
MONGO_URI=mongodb://localhost:27017/?directConnection=true
PORT=5000
NODE_ENV=development
```

## Running the Backend Server

### Prerequisites
- Node.js installed
- MongoDB running locally on port 27017

### Steps
1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running:
```bash
mongod
```

3. Run the backend server:
```bash
npm run server
```

The server will start on `http://localhost:5000`

### API Endpoints

#### Test Endpoint
- **GET** `/api/test`
- Returns: `{ message: "Backend is running!" }`

#### Contact Form
- **POST** `/api/contact`
- Body:
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message"
}
```
