import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Datos-Service/datos.service';

@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.css']
})
export class PersonaldataComponent implements OnInit {
 
   
  private personal_data: any [] = [];

  constructor(private dataService : DatosService){

  }
  

  ngOnInit(): void {

    this.dataService.getData().subscribe();
    
  }

}
