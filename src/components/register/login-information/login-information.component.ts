import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-information',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login-information.component.html',
  styleUrl: './login-information.component.scss',
})
export class LoginInformationComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  // Sign Up form validation
  signUpForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get email() {
    return this.signUpForm.controls['email'];
  }
  get password() {
    return this.signUpForm.controls['password'];
  }

  errorMessage: string | null = null;

  signUp(): void {
    this.signUpForm.markAllAsTouched();

    if (typeof window !== 'undefined') {
      localStorage.setItem('email', this.signUpForm.controls.email.value);
      localStorage.setItem('password', this.signUpForm.controls.password.value);
    }

    this.router.navigateByUrl('/register/personal-information');
  }
}
