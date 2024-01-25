import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../services/company.service';
import { first } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent implements OnInit {
  constructor(private company: CompanyService) {}
  project: any;
  apiUrl = environment.apiUrl;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      let project_id = localStorage.getItem('project_id');
      this.company
        .getProject(project_id)
        .pipe(first())
        .subscribe({
          next: (res) => {
            console.log(res);
            this.project = res;
          },
        });
    }
  }
}
