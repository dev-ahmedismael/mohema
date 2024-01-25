import { Component, Injectable } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { first } from 'rxjs';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss',
})
@Injectable({ providedIn: 'root' })
export class CompanyDetailsComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private company: CompanyService
  ) {}

  // Company form validation
  companyForm: any = this.fb.group({
    company_name: ['', [Validators.required]],
    company_logo: [
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

  get company_name() {
    return this.companyForm.controls['company_name'];
  }
  get company_logo() {
    return this.companyForm.controls['company_logo'];
  }

  errorMessage: string | null = null;

  logo: any = null;
  uploadLogo(event: any) {
    const file: File = event.target.files[0];
    this.logo = file;
  }

  createCompany(): void {
    this.companyForm.markAllAsTouched();
    const formData = new FormData();
    formData.append(
      'company_name',
      this.companyForm.controls.company_name.value
    );
    formData.append('company_logo', this.logo);
    this.company
      .createCompany(formData)
      .pipe(first())
      .subscribe({
        next: (company: any) => {
          for (const key in company) {
            localStorage.setItem(key, company[key]);
          }
          if (typeof window !== 'undefined') {
            const userData = {
              company_id: company.id,
              username: localStorage.getItem('username'),
              email: localStorage.getItem('email'),
              phone: localStorage.getItem('phone'),
              password: localStorage.getItem('password'),
              role: 'admin',
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
                  localStorage.removeItem('password');
                  this.router.navigateByUrl('/register/create-first-teamwork');
                },
                error: (error) => {
                  error.error.message.startsWith(
                    'SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry'
                  )
                    ? (this.errorMessage = `البريد الالكتروني الذي ادخلته مستخدم بالفعل`)
                    : (this.errorMessage = `البريد الالكتروني أو كلمة المرور غير صحيحة، برجاء التحقق من صحة البيانات والمحاولة مرة أخرى.`);
                },
              });
          }
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }
}
