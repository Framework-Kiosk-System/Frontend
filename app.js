import express from 'express';

const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is a sample API endpoint.' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
