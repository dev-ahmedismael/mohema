import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../../services/company.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-inbound-requests',
  standalone: true,
  imports: [],
  templateUrl: './inbound-requests.component.html',
  styleUrl: './inbound-requests.component.scss',
})
export class InboundRequestsComponent implements OnInit {
  constructor(private company: CompanyService) {}
  requests: any = [];

  ngOnInit(): void {
    const userID = window?.localStorage?.getItem('id');
    const projectID = window?.localStorage?.getItem('project_id');
    this.company
      .getInboundRequest(userID, { project_id: projectID })
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.requests = res;
        },
      });
  }
}
