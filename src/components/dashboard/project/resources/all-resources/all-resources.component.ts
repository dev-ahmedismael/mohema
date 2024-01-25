import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../../services/company.service';

@Component({
  selector: 'app-all-resources',
  standalone: true,
  imports: [],
  templateUrl: './all-resources.component.html',
  styleUrl: './all-resources.component.scss',
})
export class AllResourcesComponent implements OnInit {
  constructor(private company: CompanyService) {}
  resources: any = [];

  ngOnInit(): void {
    const project_id = window?.localStorage?.getItem('project_id');
    this.company.getResources(project_id).subscribe({
      next: (res) => {
        this.resources = res;
      },
    });
  }
}
