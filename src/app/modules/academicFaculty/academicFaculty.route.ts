import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
const router = express.Router();

router.post('/create-faculty', AcademicFacultyController.createAcademicFaculty);

router.get('/', AcademicFacultyController.getAllFaculties);

export const AcademicFacultyRoutes = router;
