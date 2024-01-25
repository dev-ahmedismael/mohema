import { Component, Injectable } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss',
})
@Injectable({ providedIn: 'root' })
export class PersonalInformationComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  // Sign Up form validation
  signUpForm: any = this.fb.group({
    username: ['', [Validators.required]],
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
  get phone() {
    return this.signUpForm.controls['phone'];
  }

  errorMessage: string | null = null;

  signUp(): void {
    this.signUpForm.markAllAsTouched();

    if (typeof window !== 'undefined') {
      localStorage.setItem('username', this.signUpForm.controls.username.value);
      localStorage.setItem('phone', this.signUpForm.controls.phone.value);
      localStorage.setItem('user_type', 'admin');
      this.router.navigateByUrl('/register/company-details');
    }
  }
}
