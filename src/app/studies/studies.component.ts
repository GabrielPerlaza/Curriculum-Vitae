import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Datos-Service/datos.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {

  public studies : any[] = []; 
  constructor(private dataService: DatosService){}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      datos => {
        this.studies = datos['estudios'];
        console.log(datos);
      });   
  }

}
