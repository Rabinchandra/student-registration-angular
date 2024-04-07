import { Injectable } from '@angular/core';
import { Student } from '../../Student';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  currentStudent: Student | null = null;
  private apiUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient, private router: Router) {}

  private getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  private createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(
      this.apiUrl,
      JSON.stringify(student),
      httpOptions
    );
  }

  login(emailId: string, password: string) {
    // Fetch the students data from database and then check if credentials are match
    this.getStudents().subscribe({
      next: (result) => {
        // Check if user emailId and matched password exists in the list
        const found = result.find(
          (r) => r.emailId === emailId && r.password === password
        );

        // if user exists
        if (found) {
          // Update the current student
          this.currentStudent = found;
          this.router.navigate(['/student']);
        } else {
          // If user doesn't exists
          alert("User doesn't exist");
          console.log('User not found');
        }
      },
    });
  }

  signup(
    firstName: string,
    lastName: string,
    emailId: string,
    password: string
  ) {
    this.getStudents().subscribe({
      next: (result) => {
        // Check if email already exists
        const found = result.find((r) => r.emailId === emailId);
        // if email already exists, then don't allow
        if (found) {
          alert('User already exists');
        } else {
          // Register
          const newStudent: Student = {
            id: String(~~(Math.random() * 10000)),
            firstName,
            lastName,
            emailId,
            password,
          };

          this.createStudent(newStudent).subscribe({
            next: () => {
              // if user sucessfully created
              alert('User successfully created!!');
              this.router.navigate(['login']);
            },
            error: () =>
              console.log('Something went wrong while creating student!!'),
          });
        }
      },
    });
  }

  // Update Student
  updateStudent(updated: Student): Observable<Student> {
    const url = `${this.apiUrl}/${updated.id}`;
    return this.http.put<Student>(url, updated);
  }
}
