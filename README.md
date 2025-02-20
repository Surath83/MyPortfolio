My Portfolio (MERN Stack)
This is a full-stack portfolio project built with the MERN stack: MongoDB, Express, React (Vite), and Node.js. It showcases my projects and allows users to get in touch or subscribe to my newsletter.

Project Structure
perl
Copy
Edit
my-portfolio/
│
├── client/                   # React Frontend
│   ├── public/                # Public assets (e.g., index.html, icons)
│   └── src/                   
│       ├── components/        # Reusable Components
│       ├── App.jsx            # Main App Component
│       └── main.jsx           # Vite Entry Point
│
├── server/                    # Node.js Backend
│   ├── models/                # Mongoose Schemas
│   ├── routes/                # API Routes
│   └── index.js               # Express App Entry Point
│
└── README.md                  # Project Documentation

Tech Stack
Frontend:
React (Vite): Fast and optimized development with React 16.
Axios: For making HTTP requests to the backend.
CSS Modules: Scoped and maintainable styling.
Backend:
Node.js: JavaScript runtime for server-side.
Express.js: Fast, unopinionated web framework.
Mongoose: ODM for MongoDB.
Database:
MongoDB Atlas: Cloud-hosted NoSQL database.
Features
Dynamic Portfolio Showcase: Display projects and experiences.
Contact Form: Users can get in touch.
Newsletter Subscription: Collects emails for updates.
Form Validation: Input validation with user-friendly messages.
Responsive Design: Works well on all devices.
Getting Started
Prerequisites
Node.js and npm installed
MongoDB Atlas account and cluster setup
Installation
Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
Install Dependencies
bash
Copy
Edit
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
Environment Variables
Create a .env file in the server directory with the following:

env
Copy
Edit
MONGO_URI=your_mongo_db_connection_string
PORT=5000
Replace your_mongo_db_connection_string with your MongoDB Atlas connection URI.

Running the App
Development Mode
bash
Copy
Edit
# Start the client
cd client
npm run dev

# Start the server
cd ../server
nodemon index.js
Production Mode
bash
Copy
Edit
# Build React app
cd client
npm run build

# Start server
cd ../server
node index.js
The frontend should be running on http://localhost:5173 and the backend on http://localhost:5000.

API Endpoints
Contact Form
POST /api/contact - Stores contact form submissions.
Newsletter Subscription
POST /api/newsletter - Stores newsletter subscriptions.
Folder Structure Explained
Client Side (React + Vite)
components/: Reusable React components.
App.jsx: Main component with routing and layout.
main.jsx: Vite entry point.
Server Side (Node.js + Express)
models/: MongoDB schemas using Mongoose.
routes/: API routes for handling form submissions.
index.js: Express app entry point.
Deployment
Frontend:

Host on Vercel or Netlify.
Backend:

Host on Render, Railway, or Vercel (Serverless Functions).
Database:

Use MongoDB Atlas for cloud-hosted NoSQL database.
Scripts
Client Scripts
json
Copy
Edit
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
Server Scripts
json
Copy
Edit
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
Contributing
Feel free to submit issues and pull requests for new features or fixes.

License
This project is licensed under the MIT License.

Contact
Name: Surath Chowdhury
Email: surath172003@gmail.com
LinkedIn: surath chowdhury
