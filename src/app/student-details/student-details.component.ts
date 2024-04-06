import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../../../Student';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent {
  currentStudent: Student | null = null;

  constructor(private studentService: StudentService) {
    this.currentStudent = this.studentService.currentStudent;
  }
}
