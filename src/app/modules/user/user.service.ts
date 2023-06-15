import config from '../../../config';
import AppError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateFacultyId, generateStudentId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id, default password

  const academicSemester = {
    year: '2025',
    code: '01',
  };

  const id = await generateFacultyId();
  user.id = id;

  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createUser) {
    throw new AppError('Error creating user', 400);
  }

  return createdUser;
};

export const UserService = {
  createUser,
};
