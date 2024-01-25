import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { CompanyService } from '../../services/company.service';
import { first } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, MatExpansionModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private company: CompanyService) {}
  apiUrl = environment.apiUrl;
  panelOpenState = false;
  username: string | null = null;
  profile_picture: string | null = null;
  projects: any = [];
  staticItems = [
    { id: 1, title: 'بيانات الشركة', icon: 'monitoring', path: '/' },
    { id: 2, title: 'أهداف الشركة', icon: 'target', path: '/' },
    { id: 3, title: 'فريق العمل', icon: 'diversity_3', path: '/' },
    { id: 4, title: 'الإعدادات', icon: 'settings', path: '/' },
  ];

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.username = localStorage.getItem('username');
      this.profile_picture = localStorage.getItem('profile_picture');
      let company_id = localStorage.getItem('company_id');
      this.company
        .getProjects(company_id)
        .pipe(first())
        .subscribe({
          next: (projects) => {
            this.projects = projects;
          },
        });
    }
  }
}
