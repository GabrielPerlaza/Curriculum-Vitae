import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Datos-Service/datos.service';
import { EmailService } from '../EmailService/email.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private emailService: EmailService){}

  ngOnInit() : void {}

 

    public formBuild = {
      "nombre" : new FormControl(''),
      "correo" : new FormControl(''),
      "mensaje" : new FormControl('')
    }

    sendEmail(){
      try{
        this.emailService.sendEmail(this.formBuild).subscribe();
      }
      catch(error){
        console.log(error);
      }
      
    }

  }


  
 

