import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CompanyService } from '../../../../services/company.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private company: CompanyService,
    private router: Router
  ) {}
  tasks: any;
  navigateToTask(task_id: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('task_id', task_id);
    }
    this.router.navigateByUrl('/dashboard/project/task');
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const project_id = localStorage.getItem('project_id');
      this.company.getTasks(project_id).subscribe({
        next: (tasks) => {
          this.tasks = tasks;
        },
      });
    }
  }
}
