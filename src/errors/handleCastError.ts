import httpStatus from 'http-status';
import { CastError } from 'mongoose';
import { IGenericErrorMessage } from '../interfaces/error';

const handleCastError = (error: CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: `Invalid ${error.path}: ${error.value} provided`,
    },
  ];

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: error.message,
    errorMessages: errors,
  };
};

export default handleCastError;
