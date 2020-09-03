import express from 'express';
import dotenv from 'dotenv';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/user.routes';
import errorHandler from './utils/error';

dotenv.config();

const app = express();

const {
  bodyParserHandler,
  globalErrorHandler,
  fourOhFourHandler,
  fourOhFiveHandler,
} = errorHandler;

app.use(compress());
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParserHandler);

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to User Restful API' });
});
app.get('*', fourOhFourHandler); // catch-all for 404 "Not Found" errors
app.all('*', fourOhFiveHandler); // catch-all for 405 "Method Not Allowed" errors
app.use(globalErrorHandler);
export default app;
