import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;

    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    );

    next();

    sendResponse(res, {
      success: true,
      message: 'Academic Semester is created successfully',
      data: result,
      statusCode: httpStatus.OK,
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
};