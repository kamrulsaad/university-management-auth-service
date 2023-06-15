import { z } from 'zod';
import { bloodGroup, gender } from '../student/student.constant';

const createUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: z.object({
        firstName: z.string().nonempty('First name is required'),
        middleName: z.string().optional(),
        lastName: z.string().nonempty('Last name is required'),
      }),
      gender: z.enum([...gender] as [string, ...string[]], {
        required_error: 'Gender is required',
      }),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .email('Invalid email address')
        .nonempty('Email is required'),
      contactNo: z.string().nonempty('Contact number is required'),
      emergencyContactNo: z
        .string()
        .nonempty('Emergency contact number is required'),
      bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
      presentAddress: z.string().nonempty('Present address is required'),
      permanentAddress: z.string().nonempty('Permanent address is required'),
      guardian: z.object({
        fatherName: z.string().nonempty("Father's name is required"),
        fatherOccupation: z
          .string()
          .nonempty("Father's occupation is required"),
        fatherContactNo: z
          .string()
          .nonempty("Father's contact number is required"),
        motherName: z.string().nonempty("Mother's name is required"),
        motherOccupation: z
          .string()
          .nonempty("Mother's occupation is required"),
        motherContactNo: z
          .string()
          .nonempty("Mother's contact number is required"),
        address: z.string().nonempty("Guardian's address is required"),
      }),
      localGuardian: z.object({
        name: z.string().nonempty("Local guardian's name is required"),
        occupation: z
          .string()
          .nonempty("Local guardian's occupation is required"),
        contactNo: z
          .string()
          .nonempty("Local guardian's contact number is required"),
        address: z.string().nonempty("Local guardian's address is required"),
      }),
      academicFaculty: z.string().nonempty('Academic faculty is required'),
      academicDepartment: z
        .string()
        .nonempty('Academic department is required'),
      academicSemester: z.string().nonempty('Academic semester is required'),
      profileImage: z.string().optional(),
    }),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
