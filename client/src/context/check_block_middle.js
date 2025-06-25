// server.js or any server file

const express = require('express');
const bodyParser = require('body-parser');
const { checkIfBlocked } = require('./controller/block_check_middle');

const app = express();

app.use(bodyParser.json());

app.post("/send-message", checkBlocked, (req, res) => {
  // If the sender is not blocked, proceed with sending the message
  // Your code to send the message goes here
  res.status(200).json({ message: "Message sent successfully." });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
