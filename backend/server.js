const express = require("express");
const cors = require("cors");

const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
