import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../../services/company.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-outbound-requests',
  standalone: true,
  imports: [],
  templateUrl: './outbound-requests.component.html',
  styleUrl: './outbound-requests.component.scss',
})
export class OutboundRequestsComponent implements OnInit {
  constructor(private company: CompanyService) {}
  requests: any = [];
  ngOnInit(): void {
    const userID = window?.localStorage?.getItem('id');
    const projectID = window?.localStorage?.getItem('project_id');
    this.company
      .getOutboundRequest(userID, { project_id: projectID })
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.requests = res;
        },
      });
  }
}
