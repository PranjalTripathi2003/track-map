const express = require("express");
const app = express();

const socketio = require("socket.io");
const http = require("http");
const path = require("path");
const server = http.createServer(app);

const io = socketio(server);
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("sendLocation", (data, callback) => {
    const { latitude, longitude } = data;
    console.log(`Received location: ${latitude}, ${longitude}`);

    // Broadcast the location to all connected clients
    io.emit("receive-location", {
      id: socket.id,
      latitude,
      longitude,
    });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Listen on port 5000
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});