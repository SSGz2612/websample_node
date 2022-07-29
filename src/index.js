import express from 'express';
import { dirname, join} from 'path';
import { fileURLToPath } from 'url';
import indexRoute from './routes/index.js';

const app = express();
const dir = dirname(fileURLToPath(import.meta.url));

app.set('views', join(dir, 'views'));
app.set('view engine', 'ejs');
app.use(indexRoute);

app.use(express.static(join(dir, 'public')));

app.listen(process.env.PORT || 3000);