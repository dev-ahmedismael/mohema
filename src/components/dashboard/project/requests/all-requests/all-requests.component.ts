import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../../services/company.service';

@Component({
  selector: 'app-all-requests',
  standalone: true,
  imports: [],
  templateUrl: './all-requests.component.html',
  styleUrl: './all-requests.component.scss',
})
export class AllRequestsComponent implements OnInit {
  constructor(private company: CompanyService) {}
  requests: any = [];
  ngOnInit(): void {
    const project_id = window?.localStorage?.getItem('project_id');
    this.company.getProjectRequests(project_id).subscribe({
      next: (res) => {
        this.requests = res;
      },
    });
  }
}
