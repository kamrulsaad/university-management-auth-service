import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ILoginUserResponse, IRefreshTokenResponse } from './auth.interface';
import config from '../../../config';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;

  const result = await AuthService.loginUser(loginData);
  const { refreshToken, ...others } = result;

  const cookieOptions = {
    httpOnly: true,
    secure: config.env === 'production',
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  // delete result.refreshToken;
  // if('refreshToken' in result) delete result.refreshToken;

  sendResponse<ILoginUserResponse>(res, {
    statusCode: httpStatus.OK,
    message: 'User logged in successfully',
    data: others,
    success: true,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await AuthService.refreshToken(refreshToken);

  const cookieOptions = {
    httpOnly: true,
    secure: config.env === 'production',
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: httpStatus.OK,
    message: 'User logged in successfully',
    data: result,
    success: true,
  });
});

export const AuthController = {
  loginUser,
  refreshToken,
};
