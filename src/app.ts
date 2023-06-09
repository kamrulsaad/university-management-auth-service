import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/', routes);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//  throw new Error("Testing error")
// })

//global error handler
app.use(globalErrorHandler);

export default app;
