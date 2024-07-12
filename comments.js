// Create web server
// Launch server
// Create a route for comments
// Return comments data

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url === '/comments') {
    const comments = [
      { id: 1, body: 'Comment 1' },
      { id: 2, body: 'Comment 2' },
    ];
    res.end(JSON.stringify(comments));
  } else {
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
