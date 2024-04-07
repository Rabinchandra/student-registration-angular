import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { Student } from '../../../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  currentStudent: Student | null = null;
  activeLink = '';

  constructor(private studentService: StudentService, private router: Router) {
    this.currentStudent = studentService.currentStudent;
    console.log(this.currentStudent);
  }
  // Note: constructor always calls first before any lifecycle hooks
  ngOnInit() {
    if (!this.currentStudent) {
      this.router.navigate(['/login']);
    }
  }
}
