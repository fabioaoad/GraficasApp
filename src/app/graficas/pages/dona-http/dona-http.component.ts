import { Component, OnInit } from '@angular/core';
import {GraficaService} from "../../services/grafica.service";

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor( private graficaService: GraficaService ) { }

  ngOnInit(): void {

    this.graficaService.getUsuariosRedesSociales()
      .subscribe( data => {
        console.log(data);
      });
  }

}
