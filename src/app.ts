import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
import { UserRoutes } from './app/modules/user/user.route';

app.use('/api/v1/users/', UserRoutes);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//  throw new Error("Testing error")
// })

//global error handler
app.use(globalErrorHandler);

export default app;
