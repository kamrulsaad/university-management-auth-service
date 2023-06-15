import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IAcademicFaculty } from './academicFaculty.interface';
import AcademicFaculty from './academicFaculty.model';

const createAcademicFaculty = async (
  academicFaculty: IAcademicFaculty
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.create(academicFaculty);

  if (!result) {
    throw new ApiError(
      'Error creating academic faculty',
      httpStatus.INTERNAL_SERVER_ERROR
    );
  }

  return result;
};

export const AcademicFacultyService = {
  createAcademicFaculty,
};
