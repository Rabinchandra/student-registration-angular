export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  gender?: string;
  dateOfBirth?: Date;
  phoneNumber?: string;
  grade?: number;
  enrolledCourse?: string;
}
