import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [],
  templateUrl: './my-tasks.component.html',
  styleUrl: './my-tasks.component.scss',
})
export class MyTasksComponent implements OnInit {
  constructor(private company: CompanyService) {}

  tasks: any[] = [];
  lateTasks: any[] = [];
  oneDayRemainingTasks: any[] = [];

  ngOnInit(): void {
    let user_id = window?.localStorage?.getItem('id');
    const date = new Date();
    const day = date.getDate();

    this.company.getUserTasks(user_id).subscribe({
      next: (res: any[]) => {
        this.tasks = res;
        this.lateTasks = res.filter((task) => {
          return new Date(task.expiry_date) < date;
        });
        this.oneDayRemainingTasks = res.filter((task) => {
          return day - new Date(task.expiry_date).getDate() == -1;
        });
      },
    });
  }
}
