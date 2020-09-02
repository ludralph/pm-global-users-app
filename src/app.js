import express from 'express';
import dotenv from 'dotenv';
import config from '../config/config';

dotenv.config();

const app = express();
const port = config.PORT;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => console.log(`app started`));
export default app;
