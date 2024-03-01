import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Datos-Service/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  public skills : any[] = [];

  constructor(private dataService: DatosService) {}

  ngOnInit(): void {

    this.dataService.getData().subscribe(
        datos => {
        this.skills = datos['habilidades'];
        for(let skill of this.skills){
          skill.class_color = this.randomColor();
          console.log(skill);
        }
      });
      
  }

  randomColor(){
    let rand = Math.floor((Math.random()*4)+1);
    let class_color = {"color" : '', "class_progress" : ''};

    switch(rand){
      case 1: 
      class_color.color="red";
      class_color.class_progress ="progress-bar bg-danger";
      break;
      case 2: 
      class_color.color="blue";
      class_color.class_progress ="progress-bar bg-info";
      break;
      case 3: 
      class_color.color="yellow";
      class_color.class_progress ="progress-bar bg-warning";
      break;
      case 4: 
      class_color.color="green";
      class_color.class_progress ="progress-bar bg-success";
      break;
    }
    return class_color;
  }

}
