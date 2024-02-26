import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  private ruta_datos = 'C:/Users/Gabriel Perlaza/Documents/Gabo/Curriculum/CVProject/src/assets/datos.json'

  constructor(private http:HttpClient) { }

  public getData() {
    return this.http.get(this.ruta_datos);
  }

}
