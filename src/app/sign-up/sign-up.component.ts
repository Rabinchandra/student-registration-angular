import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private studentService: StudentService) {}

  handleSubmit() {
    if (
      this.firstName === '' ||
      this.lastName === '' ||
      this.email === '' ||
      this.password === ''
    ) {
      alert('Fill the forms');
      return;
    }

    // console.log(this.firstName, this.lastName, this.email, this.password);
    this.studentService.signup(
      this.firstName,
      this.lastName,
      this.email,
      this.password
    );
  }
}
