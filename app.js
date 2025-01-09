import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Define dirname for ES modules
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();

// Set up view engine and static files
app.set('view engine', 'ejs');

app.set('views', './view');
app.set('view engine', 'ejs');

// Route to render the form
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));