const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());

const KLING_ACCESS_KEY = process.env.KLING_ACCESS_KEY;
const KLING_SECRET_KEY = process.env.KLING_SECRET_KEY;

app.get('/jwt', (req, res) => {
  if (!KLING_ACCESS_KEY || !KLING_SECRET_KEY) {
    return res.status(500).json({ error: 'Missing keys' });
  }
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: KLING_ACCESS_KEY,
    iat: now,
    exp: now + 60 * 10 // 10 min
  };
  const token = jwt.sign(payload, KLING_SECRET_KEY, { algorithm: 'HS256' });
  res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`JWT server running on port ${PORT}`);
});
