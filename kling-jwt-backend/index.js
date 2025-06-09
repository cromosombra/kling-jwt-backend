app.get('/jwt', (req, res) => {
  if (!KLING_ACCESS_KEY || !KLING_SECRET_KEY) {
    return res.status(500).json({ error: 'Missing keys' });
  }
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: KLING_ACCESS_KEY,
    iat: now,
    exp: now + 60 * 10
  };
  const token = jwt.sign(payload, KLING_SECRET_KEY, { algorithm: 'HS256' });
  res.json({ token });
});
