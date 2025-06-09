const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Прокси для ElevenLabs
app.get('/widget', async (req, res) => {
  res.send('🎯 Прокси работает! Можешь вставлять эту ссылку в <script src="...">');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
