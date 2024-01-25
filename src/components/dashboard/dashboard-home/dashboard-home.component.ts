import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
} from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { first } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NgOptimizedImage } from '@angular/common';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [NgOptimizedImage, NgApexchartsModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardHomeComponent implements OnInit {
  constructor(private company: CompanyService, private router: Router) {}
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions: any = {
    chart: {
      type: 'donut',
      height: 50,
      width: 50,
      sparkline: {
        enabled: true,
      },
    },

    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
      formatter: function (value: number) {
        return value + '%';
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val: number) {
          return '%' + val;
        },
      },
    },
    colors: ['#0d9488', '#e11d48'],
    labels: ['مكتمل', 'متبقي'],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
            name: {
              show: true,
            },
            value: {
              show: true,
              formatter: function (value: number) {
                return value + '%';
              },
            },
          },
        },
      },
    },
  };
  company_id: any = '0';
  apiUrl = environment.apiUrl;
  company_name = '';
  company_logo = '';
  role: any = '';
  projects: any = [];

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.company_id = localStorage.getItem('company_id');
      this.role = localStorage.getItem('role');
    }
    this.company
      .getCompany(this.company_id)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          this.company_name = res[0]?.company_name;
          this.company_logo = res[0]?.company_logo;
        },
      });

    this.company
      .getProjects(this.company_id)
      .pipe(first())
      .subscribe({
        next: (projects) => {
          this.projects = projects;
        },
      });
  }

  createNewProject() {
    this.router.navigateByUrl('/dashboard/create-new-project');
  }
  navigateToProject(project_id: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('project_id', project_id);
    }
    this.router.navigateByUrl('/dashboard/project');
  }
}
