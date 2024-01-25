import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-first-teamwork',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './create-first-teamwork.component.html',
  styleUrl: './create-first-teamwork.component.scss',
})
export class CreateFirstTeamworkComponent {
  constructor(
    private fb: FormBuilder,
    private company: CompanyService,
    private router: Router
  ) {}
  teamForm = this.fb.group({
    aliases: this.fb.array([this.fb.control('')]),
  });

  get aliases() {
    return this.teamForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  addTeam() {
    if (typeof window !== 'undefined' && this.teamForm.value.aliases) {
      for (let index = 0; index < this.teamForm.value.aliases.length; index++) {
        this.company
          .addEmployee({
            company_id: localStorage.getItem('company_id'),
            email: this.teamForm.value.aliases[index],
          })
          .subscribe({
            next: (res) => console.log(res),
            error: (err) => console.log(err),
          });
      }
      this.router.navigateByUrl('/register/set-company-goals');
    }
  }
}
