export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.status(200).send('🎯 Прокси работает! Можешь вставлять эту ссылку в <script src="...">');
}
