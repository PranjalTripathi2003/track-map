# Real-time Location Tracker

This project is a real-time location tracking application, similar to those used by Zomato or Swiggy to track orders on a map. It uses **Express** for the backend, **Socket.IO** for real-time communication, and **Leaflet** for map rendering.

## Features

- **Real-time location tracking:** Tracks and displays the location of users in real-time on a map.
- **Socket.IO integration:** Sends and receives live location data between server and clients.
- **Leaflet maps:** Uses Leaflet to render interactive maps and display users' locations.
- **EJS templating engine:** Renders the frontend views using EJS.
- **Geolocation API:** Fetches the user's current location using the browser's Geolocation API.

## Tech Stack

- **Backend:** Node.js, Express, Socket.IO
- **Frontend:** HTML, CSS, JavaScript, Leaflet.js, EJS
- **View Engine:** EJS
- **Real-time Communication:** Socket.IO
- **Map Rendering:** Leaflet.js
- **Deployment:** Vercel

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/realtime-location-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd realtime-location-tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:5000` to view the application.

## Usage

- Once the server is running, users can access the app through the browser and share their location. 
- The app will track and display all connected users' locations on a map in real-time.
- When a user disconnects, their marker is removed from the map.

## Project Structure

```
├── public/                # Static files (JavaScript, CSS)
│   ├── script.js          # Client-side JavaScript for real-time tracking
│   └── style.css          # Styling for the app
├── views/
│   └── index.ejs          # Frontend template rendered by Express
├── app.js                 # Main server file
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## Dependencies

- **Express:** Web framework for Node.js.
- **Socket.IO:** Real-time bidirectional event-based communication.
- **Leaflet.js:** Open-source JavaScript library for mobile-friendly interactive maps.
- **EJS:** Simple templating engine for generating HTML.

## Deployment

The app can be easily deployed using services like **Vercel**. You can follow Vercel's documentation to deploy your Node.js app.

## License

This project is licensed under the MIT License.
```
https://github.com/PranjalTripathi2003/realtime-tracker.git
