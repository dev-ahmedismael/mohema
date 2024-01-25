import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CompanyService } from '../../../../services/company.service';
import { first } from 'rxjs';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule,
} from 'ng-apexcharts';
import ApexCharts from 'apexcharts';
import { AfterViewInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BudgetComponent implements OnInit {
  @ViewChild('chart', { static: false }) chart!: ChartComponent;

  constructor(private company: CompanyService) {
    this.chartOptions = {
      series: [
        {
          name: 'تكاليف الموارد',
          data: [],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'يناير',
          'فبراير',
          'مارس',
          'ابريل',
          'مايو',
          'يونيو',
          'يوليو',
          'أغسطس',
          'سبتمبر',
          'اكتوبر',
          'نوفمبر',
          'ديسمبر',
        ],
      },

      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return `${val} ر.س`;
          },
        },
      },
    };
  }
  tasksData: any[] = [];
  public chartOptions: any;

  ngOnInit(): void {
    const project_id = window?.localStorage?.getItem('project_id');
    this.company
      .getTasksChartData(project_id)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          this.tasksChartData = res.sort((a: any, b: any) => b.year - a.year);
        },
        complete: () => {
          this.company
            .getResourcesChartData(project_id)
            .pipe(first())
            .subscribe({
              next: (res: any) => {
                this.resourcesChartData = res.sort(
                  (a: any, b: any) => b.year - a.year
                );
              },
              complete: () => {
                var tasksData: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  resourcesData: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                var tasksMonths = this.tasksChartData[0]?.months;
                var tasksCosts = this.tasksChartData[0]?.costs;
                var resourcesMonths = this.resourcesChartData[0]?.months;
                var resourcesCosts = this.resourcesChartData[0]?.costs;

                for (let index = 0; index < tasksMonths?.length; index++) {
                  tasksData[parseInt(tasksMonths[index]) - 1] =
                    tasksCosts[index];
                }
                if (
                  this.resourcesChartData[0].year ===
                  this.tasksChartData[0].year
                ) {
                  for (
                    let index = 0;
                    index < resourcesMonths?.length;
                    index++
                  ) {
                    resourcesData[parseInt(resourcesMonths[index]) - 1] =
                      resourcesCosts[index];
                  }
                }

                this.chartOptions.series = [
                  { name: 'تكاليف الموارد', data: resourcesData },
                  { name: 'تكاليف المهام', data: tasksData },
                ];
              },
            });
        },
      });
  }

  tasksChartData: any = [];
  resourcesChartData: any = [];
  changeYear(event: any) {
    const currentYear = event.currentTarget.value;
    var tasksData: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      resourcesData: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var currentYearTasks = this.tasksChartData.find((tasks: any) => {
      return tasks.year == currentYear;
    });
    var currentYearResources = this.resourcesChartData.find(
      (resources: any) => {
        return resources.year == currentYear;
      }
    );

    var tasksMonths = currentYearTasks?.months;
    var tasksCosts = currentYearTasks?.costs;
    var resourcesMonths = currentYearResources?.months;
    var resourcesCosts = currentYearResources?.costs;

    for (let index = 0; index < tasksMonths?.length; index++) {
      tasksData[parseInt(tasksMonths[index]) - 1] = tasksCosts[index];
    }
    for (let index = 0; index < resourcesMonths?.length; index++) {
      resourcesData[parseInt(resourcesMonths[index]) - 1] =
        resourcesCosts[index];
    }
    console.log(tasksData);

    this.chartOptions.series = [
      { name: 'تكاليف الموارد', data: resourcesData },
      { name: 'تكاليف المهام', data: tasksData },
    ];
  }
}
