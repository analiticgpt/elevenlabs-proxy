import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/widget', async (req, res) => {
  try {
    const url = 'https://api.us.elevenlabs.io/v1/convai/agents/agent_01jx78z9m8ea4tkmzw0z6q8r4f/widget';
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Proxy failed', details: e.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Proxy listening on port ${port}`));
