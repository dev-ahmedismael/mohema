import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-company-goals',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './set-company-goals.component.html',
  styleUrl: './set-company-goals.component.scss',
})
export class SetCompanyGoalsComponent {
  constructor(
    private fb: FormBuilder,
    private company: CompanyService,
    private router: Router
  ) {}

  createGoalForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  goalsForm = this.fb.group({
    aliases: this.fb.array([this.createGoalForm()]),
  });

  get aliases() {
    return this.goalsForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.createGoalForm());
  }

  addGoal() {
    this.goalsForm.markAllAsTouched();
    if (typeof window !== 'undefined' && this.goalsForm.value.aliases) {
      for (
        let index = 0;
        index < this.goalsForm.value.aliases.length;
        index++
      ) {
        this.company
          .addCompanyGoal({
            company_id: localStorage.getItem('company_id'),
            title: this.goalsForm.value.aliases[index].title,
            description: this.goalsForm.value.aliases[index].description,
          })
          .subscribe({
            next: (res) => console.log(res),
            error: (err) => console.log(err),
          });
      }
      this.router.navigateByUrl('/register/create-first-project');
    }
  }
}
