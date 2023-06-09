import { Schema, model } from 'mongoose';
import { IAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const AcademicFaculty = model<IAcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema
);

export default AcademicFaculty;
