import { Model } from 'mongoose';

export type AcademicFacultyModel = Model<
  IAcademicFaculty,
  Record<string, unknown>
>;

export type IAcademicFaculty = {
  title: string;
};
