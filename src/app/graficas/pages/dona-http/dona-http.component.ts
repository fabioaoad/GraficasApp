import { Component, OnInit } from '@angular/core';
import {GraficaService} from "../../services/grafica.service";
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [

  ];

  public doughnutChartData: MultiDataSet = [

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

  constructor( private graficaService: GraficaService ) { }

  ngOnInit(): void {

    this.graficaService.getUsuariosRedesSociales()
      .subscribe( data => {
        console.log(data);
        const labels = Object.keys( data );
        const values = Object.values( data );
        //console.log(labels);
        //console.log(values);
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push( values );
      });
  }

}
