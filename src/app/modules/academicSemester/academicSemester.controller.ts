import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';
import IPaginationOptions from '../../../interfaces/pagination';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { filterableFields } from './academicSemester.constant';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicSemesterData } = req.body;

    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    );
    sendResponse<IAcademicSemester>(res, {
      success: true,
      message: 'Academic Semester is created successfully',
      data: result,
      statusCode: httpStatus.OK,
    });
  }
);

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, filterableFields);
  const paginationOptions: IPaginationOptions = pick(
    req.query,
    paginationFields
  );

  const result = await AcademicSemesterService.getAllSemesters(
    filters,
    paginationOptions
  );

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All semesters are fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicSemesterService.getSingleSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single semester is fetched successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllSemesters,
  getSingleSemester,
};
