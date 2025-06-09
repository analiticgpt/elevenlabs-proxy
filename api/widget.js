export default async function handler(req, res) {
  const response = await fetch('https://widget.elevenlabs.io', {
    headers: {
      'User-Agent': req.headers['user-agent'] || '',
      'Accept': req.headers['accept'] || '*/*',
    },
  });

  const data = await response.text();

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send(data);
}
