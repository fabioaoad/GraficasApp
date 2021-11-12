import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;


  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  @Input() barChartLabels: Label[] = [
  //  '2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];
  public barChartType: ChartType = 'bar'; // probar con horizontalBar
  public barChartLegend = true;  // porbar con false


  // Para crear colores: https://color.adobe.com/es/create/color-wheel
@Input()  public barChartData: ChartDataSets[] = [
   // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#0CE8AA', hoverBackgroundColor: 'red' },
   // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#00F525', hoverBackgroundColor: 'red' },
  //  { data: [8, 65, 32, 59, 11, 66, 100], label: 'Series C', backgroundColor: '#DDFA87', hoverBackgroundColor: 'red' },
  ];

  constructor() {
    //console.log(this.horizontal);
  }

  ngOnInit(): void {
    //console.log(this.horizontal);
    if( this.horizontal ){
      this.barChartType = 'horizontalBar';
    }
  }

  public randomize(): void {
    this.barChartData[0].data = [
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
    ];

    this.barChartData[1].data = [
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
    ];

    this.barChartData[2].data = [
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
    ];

  }

}
