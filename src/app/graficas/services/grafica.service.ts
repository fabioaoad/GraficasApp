import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  constructor( private http: HttpClient ) {  }


  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica');
  }


}
