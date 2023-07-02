import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/', routes);

//global error handler
app.use(globalErrorHandler);

// const testId = async () => {
//   const id = await generateFacultyId();
//   console.log(id);
// }

// testId();

// not found route handler
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route not found on the server',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Route not found on the server',
      },
    ],
  });
});

export default app;
