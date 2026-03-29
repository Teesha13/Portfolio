const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Teesha Panchal");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});