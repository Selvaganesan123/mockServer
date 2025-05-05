import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/mock-data', (req, res) => {
  res.json({ message: 'Hello from deployed mock server!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
