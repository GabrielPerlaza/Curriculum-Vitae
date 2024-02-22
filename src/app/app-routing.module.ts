import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { SkillsComponent } from './skills/skills.component';
import { StudiesComponent } from './studies/studies.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {path:'inicio', component: HomeComponent},
  {path: 'contacto', component:ContactComponent},
  {path:'experiencia', component: ExperienceComponent},
  {path:'datos-personales', component:PersonaldataComponent},
  {path: 'habilidades', component:SkillsComponent},
  {path: 'estudios', component:StudiesComponent},
  {path:'', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  App_routing =  RouterModule.forRoot(routes, {useHash: true});
 }
