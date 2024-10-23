const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const transactionRoutes = require("./routes/transactionRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use("/api", transactionRoutes);
app.use("/api", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
