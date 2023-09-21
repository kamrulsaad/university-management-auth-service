import { NextFunction, Request, Response } from 'express';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';
import { JwtHelper } from '../../helpers/jwtHelper';
import config from '../../config';
import { Secret } from 'jsonwebtoken';

const auth =
  (...requireRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new ApiError('You are not authorized', httpStatus.UNAUTHORIZED);
      }

      const verifiedUser = JwtHelper.verifyToken(
        token,
        config.jwt.secret as Secret
      );

      req.user = verifiedUser;

      if (requireRoles.length && !requireRoles.includes(verifiedUser.role)) {
        throw new ApiError('You are not authorized', httpStatus.FORBIDDEN);
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
