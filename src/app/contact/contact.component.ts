import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Datos-Service/datos.service';
import { EmailService } from '../EmailService/email.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  private dataForm = {
    "name" : "",
    "email" : "",
    "mensaje" : "" 
  };

  private enviado = false;
  private correcto = true;

constructor(private emailService: EmailService){}

  ngOnInit() : void {

  }

  
  sendEmail(){

    this.emailService.sendEmail(this.dataForm).subscribe(res => {


    
    }, error => {

      
    });

    
  }
}
