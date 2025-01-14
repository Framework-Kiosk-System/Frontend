import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use('/css', express.static(path.join(__dirname, 'view/css')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));


app.get('/', (req, res) => {
  res.render('index'); 
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
