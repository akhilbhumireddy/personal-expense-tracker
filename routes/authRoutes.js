const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const secretKey = "your-secret-key"; // Use environment variables in production

// Example users for demo purposes
const users = [
  { id: 1, username: "akhil", password: "akhil" },
  { id: 2, username: "user2", password: "password2" },
];

// Login route to generate JWT token
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(400).send("Username or password is incorrect");

  // Generate a token
  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
    expiresIn: "1h",
  });
  res.send({ token });
});

module.exports = router;
