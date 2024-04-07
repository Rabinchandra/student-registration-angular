import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../../../Student';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  currentStudent: Student | null = null;

  firstName: string | undefined = '';
  lastName: string | undefined = '';
  gender: string | undefined = '';
  dob: string | undefined = '';
  phoneNumber: string | undefined = '';
  grade: number | undefined = 0;
  enrolledCourse: string | undefined = ' ';

  constructor(private studentService: StudentService) {
    this.currentStudent = this.studentService.currentStudent;

    this.firstName = this.currentStudent?.firstName;
    this.lastName = this.currentStudent?.lastName;
    this.gender = this.currentStudent?.gender;
    this.dob = this.currentStudent?.dateOfBirth;
    this.phoneNumber = this.currentStudent?.phoneNumber;
    this.grade = this.currentStudent?.grade;
    this.enrolledCourse = this.currentStudent?.enrolledCourse;
  }

  handleSubmit() {
    const updated: Student = {
      ...this.currentStudent,
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      dateOfBirth: this.dob,
      phoneNumber: this.phoneNumber,
      grade: this.grade,
      enrolledCourse: this.enrolledCourse,
    };

    this.studentService.updateStudent(updated).subscribe({
      next: () => {
        alert('Profile Updated sucessfully');
      },
      error: () => {
        alert('Something went wrong!!');
      },
    });
  }
}
