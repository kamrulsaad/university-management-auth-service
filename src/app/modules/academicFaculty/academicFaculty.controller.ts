import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { AcademicFacultyFilterableFields } from './academicFaculty.constant';
import IPaginationOptions from '../../../interfaces/pagination';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IAcademicFaculty } from './academicFaculty.interface';

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

const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, AcademicFacultyFilterableFields);
  const paginationOptions: IPaginationOptions = pick(
    req.query,
    paginationFields
  );

  const result = await AcademicFacultyService.getAllFaculties(
    filters,
    paginationOptions
  );

  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All faculties are fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllFaculties,
};
