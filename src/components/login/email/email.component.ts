import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss',
})
export class EmailComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}
  loginForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    // password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get email() {
    return this.loginForm.controls['email'];
  }
  // get password() {
  //   return this.loginForm.controls['password'];
  // }

  errorMessage: string | null = null;

  login(): void {
    this.loginForm.markAllAsTouched();

    this.auth
      .findByEmail(this.loginForm.controls.email.value)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          if (res.length === 0) {
            this.auth
              .checkIfPendingUser(this.loginForm.controls.email.value)
              .pipe(first())
              .subscribe({
                next: (res: any) => {
                  if (res.length === 0) {
                    this.errorMessage =
                      'عفواً، لايوجد حساب مسجل باستخدام البريد الإلكتروني الذي أدخلته.';
                  } else {
                    if (typeof window !== 'undefined') {
                      localStorage.setItem(
                        'email',
                        this.loginForm.controls.email.value
                      );
                      localStorage.setItem('company_id', res[0].company_id);
                    }

                    this.router.navigateByUrl('/login/complete-registeration');
                  }
                },
              });
          } else {
            if (typeof window !== 'undefined') {
              localStorage.setItem(
                'email',
                this.loginForm.controls.email.value
              );
            }

            this.router.navigateByUrl('/login/password');
          }
        },
      });
    // this.router.navigateByUrl('/login/password');
  }
}
