import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { first } from 'rxjs';
@Component({
  selector: 'app-password',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
})
export class PasswordComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}
  loginForm: any = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get password() {
    return this.loginForm.controls['password'];
  }

  errorMessage: string | null = null;

  login(): void {
    this.loginForm.markAllAsTouched();

    if (typeof window !== 'undefined') {
      let email = localStorage.getItem('email');
      let password = this.loginForm.controls.password.value;

      this.auth
        .login({
          email: email,
          password: password,
        })
        .pipe(first())
        .subscribe({
          next: (res: any) => {
            localStorage.setItem('token', res.token);
            for (const key in res.user) {
              localStorage.setItem(key, res.user[key]);
            }
            this.router.navigateByUrl('/dashboard');
          },
          error: (err) => {
            if (err.error.message === 'Bad Creds') {
              this.errorMessage = 'كلمة المرور غير صحيحة.';
            }
          },
        });
    }
  }
}
