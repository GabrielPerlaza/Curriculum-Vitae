import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Datos-Service/datos.service';
import { EmailService } from '../EmailService/email.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import * as Notiflix from 'notiflix';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  datos : FormGroup;
  constructor(private http: HttpClient){
    this.datos = new FormGroup({
      "nombre" : new FormControl('', [Validators.required]),
      "correo" : new FormControl('', [Validators.required, Validators.email]),
      "mensaje" : new FormControl('', Validators.required)
    })
  }

  ngOnInit() : void {}

    envioCorreo(){
      Notiflix.Loading.standard('Cargando..');
      let params = {
        nombre : this.datos.value.nombre,
        correo : this.datos.value.correo,
        mensaje : this.datos.value.mensaje
      }

      console.log(params);
      this.http.post('https://backend-cv.onrender.com/envio', params).subscribe(resp =>{
        console.log(resp);
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Enviado Correctamente');
      });
    }

    userNombre: string = '';
    userEmail: string = '';
    userMsg: string = '';

    limpiarCampo(){
    this.userNombre = '';
    this.userEmail='';
    this.userMsg='';
    }

  

}



  
 

