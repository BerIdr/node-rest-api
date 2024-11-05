const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/data' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Luetaan tietoa palvelimelta', randomNumber: Math.floor(Math.random() * 100) }));
  } else if (req.url === '/data' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const receivedData = JSON.parse(body);
      const generatedNumber = Math.floor(Math.random() * 100);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        message: 'Lähetetään tietoa palvelimelle',
        receivedData: receivedData,
        generatedNumber: generatedNumber
      }));
    });
  } else if (req.url === '/data' && req.method === 'DELETE') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Poistetaan tietoa palvelimelta' }));
  } else if (req.url === '/data' && req.method === 'PUT') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const updatedData = JSON.parse(body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        message: 'Muokataan tietoa palvelimella',
        updatedData: updatedData
      }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Resurssia ei löydy' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Palvelin käynnistetty portissa ${PORT}`);
});
