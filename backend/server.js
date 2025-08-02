const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow frontend to access backend

const PORT = 5000;

// Dummy Intern Data
app.get('/api/intern', (req, res) => {
  res.json({
    name: "Suman Mapari",
    referral: "suman2025",
    donation: 125000
  });
});

// Dummy Leaderboard (Bonus)
app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Suman", donation: 125000 },
    { name: "Ayesha", donation: 98000 },
    { name: "Zoya", donation: 85000 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
