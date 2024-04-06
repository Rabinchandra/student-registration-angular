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

  firstName: string | undefined;
  lastName: string | undefined;
  gender: string | undefined;
  dob: string | undefined;
  phoneNumber: string | undefined;
  grade: string | undefined;
  enrolledCourse: string | undefined;

  constructor(private studentService: StudentService) {
    this.currentStudent = this.studentService.currentStudent;

    this.firstName = this.currentStudent?.firstName;
    this.lastName = this.currentStudent?.lastName;
  }

  handleSubmit() {
    console.log('submitted...');
  }
}
