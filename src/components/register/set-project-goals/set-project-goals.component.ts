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
  selector: 'app-set-project-goals',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './set-project-goals.component.html',
  styleUrl: './set-project-goals.component.scss',
})
export class SetProjectGoalsComponent {
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
          .addProjectGoal({
            project_id: localStorage.getItem('project_id'),
            title: this.goalsForm.value.aliases[index].title,
            description: this.goalsForm.value.aliases[index].description,
          })
          .subscribe({
            next: (res) => console.log(res),
            error: (err) => console.log(err),
          });
      }
      this.router.navigateByUrl('/login');
    }
  }
}
