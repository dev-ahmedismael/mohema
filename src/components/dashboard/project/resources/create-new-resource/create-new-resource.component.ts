import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../../../../services/company.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-create-new-resource',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-new-resource.component.html',
  styleUrl: './create-new-resource.component.scss',
})
export class CreateNewResourceComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private company: CompanyService
  ) {}

  resourceForm = this.fb.group({
    title: ['', Validators.required],
    type: [''],
    number: ['', Validators.pattern('^[0-9]*$')],
    cost: ['', Validators.pattern('^[0-9]*$')],
    description: [''],
  });

  get title() {
    return this.resourceForm.controls['title'];
  }
  get type() {
    return this.resourceForm.controls['type'];
  }
  get number() {
    return this.resourceForm.controls['number'];
  }
  get cost() {
    return this.resourceForm.controls['cost'];
  }
  get description() {
    return this.resourceForm.controls['description'];
  }

  addResource() {
    let formData: any = this.resourceForm.value;
    const project_id = window?.localStorage?.getItem('project_id');
    formData.project_id = project_id;

    this.company
      .createResource(formData)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.router.navigateByUrl('/dashboard/project/resources');
        },
      });
  }

  back() {
    this.router.navigateByUrl('/dashboard/project/resources');
  }
}
