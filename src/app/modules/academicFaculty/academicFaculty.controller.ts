import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicFaculty } = req.body;

    const result = await AcademicFacultyService.createAcademicFaculty(
      academicFaculty
    );

    sendResponse(res, {
      success: true,
      message: 'Academic faculty created successfully',
      data: result,
      statusCode: httpStatus.OK,
    });
  }
);

export const AcademicFacultyController = {
  createAcademicFaculty,
};
