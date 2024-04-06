import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // Credentials Variables
  emailId: string = '';
  password: string = '';

  constructor(private studentService: StudentService) {}

  handleLogin(): void {
    if (this.emailId === '' || this.password === '') {
      alert('Provide some value');
      return;
    }
    // Login
    this.studentService.login(this.emailId, this.password);
  }
}
