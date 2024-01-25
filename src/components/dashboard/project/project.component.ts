import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { first } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  constructor(private company: CompanyService) {}
  apiUrl = environment.apiUrl;
  project: any;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      let project_id = localStorage.getItem('project_id');
      this.company
        .getProject(project_id)
        .pipe(first())
        .subscribe({
          next: (res: any) => {
            this.project = res;
          },
        });
    }
  }

  // Buttons

  buttons = [
    {
      id: 1,
      title: 'عن المشروع',
      icon: 'house',
      path: '/dashboard/project/project-details',
    },
    {
      id: 2,
      title: 'المهام',
      icon: 'task_alt',
      path: '/dashboard/project/tasks',
    },
    {
      id: 3,
      title: 'الطلبات',
      icon: 'receipt_long',
      path: '/dashboard/project/requests',
    },
    {
      id: 4,
      title: 'الموارد',
      icon: 'cycle',
      path: '/dashboard/project/resources',
    },
    {
      id: 5,
      title: 'الفريق',
      icon: 'diversity_1',
      path: '/dashboard/project/team',
    },
    {
      id: 6,
      title: 'الميزانية',
      icon: 'paid',
      path: '/dashboard/project/budget',
    },
    {
      id: 7,
      title: 'المخططات',
      icon: 'monitoring',
      path: '/dashboard/project/plans',
    },
  ];
}
