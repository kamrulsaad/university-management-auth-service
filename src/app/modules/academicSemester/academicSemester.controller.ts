import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;

    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    );

    res.status(200).json({
      success: true,
      message: 'Academic Semester is created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createAcademicSemester,
};
