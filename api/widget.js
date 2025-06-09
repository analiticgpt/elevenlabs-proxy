export default async function handler(req, res) {
  try {
    const response = await fetch('https://widget.elevenlabs.io', {
      method: 'GET',
      headers: {
        'User-Agent': req.headers['user-agent'] || '',
        'Accept': req.headers['accept'] || '*/*',
        'Accept-Encoding': req.headers['accept-encoding'] || '',
        'Connection': req.headers['connection'] || 'keep-alive',
        'Host': 'widget.elevenlabs.io',
      },
    });

    const data = await response.text();

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(data);
  } catch (error) {
    console.error('❌ Ошибка прокси:', error);
    res.status(500).send('Proxy Error');
  }
}
