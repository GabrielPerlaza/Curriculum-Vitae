import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Datos-Service/datos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.css']
})
export class PersonaldataComponent implements OnInit {
 
   
  public personal_data: any[] = [];

  constructor(private dataService : DatosService){

  }
  

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      datos => {
        this.personal_data = datos['datos_personales'];
        console.log(datos);
      });   
  }

}
