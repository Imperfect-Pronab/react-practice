const db = require("../config/db");
exports.getHello = (req, res) => {
  res.json({
    message: "Hello from Controller",
  });
};

// Get user data
exports.getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.json(results);
  });
};
