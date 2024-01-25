import { OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import moment from 'moment';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CompanyService } from '../../../../services/company.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid,
} from 'ng-apexcharts';
import { first } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlansComponent implements OnInit {
  @ViewChild('chart', { static: false }) chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private company: CompanyService) {
    this.chartOptions = {
      series: [
        {
          data: [],
        },
      ],
      chart: {
        height: 350,
        type: 'rangeBar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          var a = moment(val[0]);
          var b = moment(val[1]);
          var diff = b.diff(a, 'days');
          return diff + ' يوم';
        },
        style: {
          colors: ['#f3f4f5', '#fff'],
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        show: false,
      },
      grid: {
        row: {
          colors: ['#f3f4f5', '#fff'],
          opacity: 1,
        },
      },
    };
  }

  ngOnInit(): void {
    const project_id = window?.localStorage?.getItem('project_id');
    this.company
      .getTasks(project_id)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          const data = res.map((e: any) => {
            return {
              x: e.title,
              y: [
                new Date(e.start_date).getTime(),
                new Date(e.expiry_date).getTime(),
              ],
              fillColor: '#00E396',
            };
          });

          console.log(data);

          this.chartOptions.series = [{ data: data }];
        },
      });
  }
}
