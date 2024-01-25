import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { first } from 'rxjs';
@Component({
  selector: 'app-complete-registeration',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './complete-registeration.component.html',
  styleUrl: './complete-registeration.component.scss',
})
export class CompleteRegisterationComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  // Sign Up form validation
  signUpForm: any = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(
          /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
        ),
      ],
    ],
  });

  get username() {
    return this.signUpForm.controls['username'];
  }
  get password() {
    return this.signUpForm.controls['password'];
  }
  get phone() {
    return this.signUpForm.controls['phone'];
  }

  errorMessage: string | null = null;

  signUp(): void {
    this.signUpForm.markAllAsTouched();

    if (typeof window !== 'undefined') {
      const userData = {
        company_id: localStorage.getItem('company_id'),
        username: this.signUpForm.controls.username.value,
        email: localStorage.getItem('email'),
        password: this.signUpForm.controls.password.value,
        phone: this.signUpForm.controls.phone.value,
        role: 'member',
      };

      this.auth
        .register(userData)
        .pipe(first())
        .subscribe({
          next: (res: any) => {
            localStorage.setItem('token', res.token);
            for (const key in res.user) {
              localStorage.setItem(key, res.user[key]);
            }
            this.router.navigateByUrl('/dashboard');
          },
          error: () => {
            this.errorMessage =
              'البريد الإلكتروني / رقم الجوال مستخدم في حساب آخر.';
          },
        });
    }
  }
}
