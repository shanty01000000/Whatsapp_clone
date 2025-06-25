// Middleware to check if the sender is blocked by the recipient
function checkBlocked(req, res, next) {
    const { senderId, recipientId } = req.body; // Assuming you pass senderId and recipientId in the request body
    const isBlocked = checkIfBlocked(senderId, recipientId); // Function to check if sender is blocked by recipient
  
    if (isBlocked) {
      return res.status(403).json({ error: "You are blocked by the recipient." });
    }
  
    next();
  }
  
  // Example function to check if sender is blocked by recipient (you need to implement this logic)
  const checkIfBlocked = (senderId, recipientId) => {
    // Your logic to check if sender is blocked by recipient
    // You can query your database or use any other mechanism to determine if sender is blocked by recipient
    // For example, you might have a 'blockedUsers' table with senderId and recipientId columns
    // If there's a row in the table where senderId is the current user and recipientId is the recipient of the message, then the sender is blocked
    // Return true if sender is blocked, false otherwise
    // Replace this with your actual implementation
    return false; // Placeholder return value
  };
  
  // Route handler for sending messages
  app.post("/send-message", checkBlocked, (req, res) => {
    // If the sender is not blocked, proceed with sending the message
    // Your code to send the message
    res.status(200).json({ message: "Message sent successfully." });
  });
  