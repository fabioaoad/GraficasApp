import { Component } from '@angular/core';
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Otros'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100],
  //   [50, 150, 120],
  //   [250, 130, 70],
  // ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 180]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#1B68F5',
        '#36D6D4',
        '#3AEB6B',
        '#7CD61A',
      ]
    }
  ];

}
