const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/questions", (req, res) => {
  const filePath = path.join(__dirname, "questions.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to load quiz questions" });

    const allQuestions = JSON.parse(data);
    const num = parseInt(req.query.num) || 10;

    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, num);

    res.json(selected);
  });
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
