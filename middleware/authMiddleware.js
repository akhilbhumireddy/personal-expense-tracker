const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key"; // Use environment variables in production

// Middleware to protect routes
const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).send("Access Denied");
  }

  try {
    const verified = jwt.verify(token.split(" ")[1], secretKey);
    req.user = verified;
    next();
  } catch (err) {
    res.status(403).send("Invalid Token");
  }
};

module.exports = { authenticateJWT };
