import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-create-first-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './create-first-project.component.html',
  styleUrl: './create-first-project.component.scss',
})
export class CreateFirstProjectComponent {
  constructor(
    private fb: FormBuilder,
    private company: CompanyService,
    private router: Router
  ) {}

  projectForm: any = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    logo: [null],
    start_date: ['', Validators.required],
    expiry_date: ['', Validators.required],
    end_method: ['', Validators.required],
  });

  get title() {
    return this.projectForm.controls['title'];
  }
  get description() {
    return this.projectForm.controls['description'];
  }
  get logo() {
    return this.projectForm.controls['logo'];
  }
  get start_date() {
    return this.projectForm.controls['start_date'];
  }
  get expiry_date() {
    return this.projectForm.controls['expiry_date'];
  }
  get end_method() {
    return this.projectForm.controls['end_method'];
  }

  projectLogo: any = null;
  uploadLogo(event: any) {
    const file: File = event.target.files[0];
    this.projectLogo = file;
  }

  skip() {
    this.router.navigateByUrl('/register/create-first-attachments');
  }

  createProject() {
    this.projectForm.markAllAsTouched();
    if (typeof window !== 'undefined') {
      const company_id: any = localStorage.getItem('company_id');
      const created_by: any = localStorage.getItem('username');

      const formData = new FormData();
      formData.append('company_id', company_id);
      formData.append('created_by', created_by);
      formData.append('completness', '0');
      formData.append('title', this.projectForm.controls.title.value);
      formData.append(
        'description',
        this.projectForm.controls.description.value
      );
      formData.append('logo', this.projectLogo);
      formData.append('end_method', this.projectForm.controls.end_method.value);
      formData.append('start_date', this.projectForm.controls.start_date.value);
      formData.append(
        'expiry_date',
        this.projectForm.controls.expiry_date.value
      );
      this.company
        .createProject(formData)
        .pipe(first())
        .subscribe({
          next: (res: any) => {
            if (typeof window !== 'undefined') {
              localStorage.setItem('project_id', res.id);
            }
            this.router.navigateByUrl('/register/create-first-attachments');
          },
          error: (err) => console.log(err),
        });
    }
  }
}
