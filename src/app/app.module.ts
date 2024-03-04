import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { StudiesComponent } from './studies/studies.component';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { DatosService } from './Datos-Service/datos.service';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './EmailService/email.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent,
    StudiesComponent,
    PersonaldataComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DatosService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
