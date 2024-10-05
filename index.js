const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

app.listen(PORT, () => {
  console.log(`server is running on port here 2 ${PORT}`);
});

module.exports = app;
