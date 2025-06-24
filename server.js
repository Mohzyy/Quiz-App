const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/questions', (req, res) => {
  fs.readFile(path.join(__dirname, 'questions.json'), 'utf8', (err, data) => {
    if (err) {
      console.error("Failed to read questions.json", err);
      return res.status(500).send("Failed to load questions");
    }
    const allQuestions = JSON.parse(data);
    const shuffled = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    res.json(shuffled);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
