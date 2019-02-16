import express from 'express';

const app = express();

const PORT = 8001;

app.get('/', (req, res) => res.send('The API is working, yeah'));

app.listen(PORT, () => {
  console.log('Server is running');
});
