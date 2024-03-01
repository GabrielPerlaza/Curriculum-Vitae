import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Datos-Service/datos.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

public contact : any[] = [];

constructor(private dataService : DatosService){}

  ngOnInit() : void {

    this.dataService.getData().subscribe(
      datos => {
        this.contact = datos['contacto'];
      });

  }

}
