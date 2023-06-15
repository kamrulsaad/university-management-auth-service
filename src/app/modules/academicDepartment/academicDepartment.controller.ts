import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentService } from './academicDepartment.service';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import IPaginationOptions from '../../../interfaces/pagination';
import { academicDepartmentFilterableFields } from './academicDepartment.constant';
import { paginationFields } from '../../../constants/pagination';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...departmentData } = req.body;

  const result = await AcademicDepartmentService.createDepartment(
    departmentData
  );

  sendResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department created successfully',
    data: result,
  });
});

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicDepartmentFilterableFields);
  const paginationOptions: IPaginationOptions = pick(
    req.query,
    paginationFields
  );

  const result = await AcademicDepartmentService.getAllDepartments(
    filters,
    paginationOptions
  );

  sendResponse<IAcademicDepartment[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All departments are fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartments,
};
