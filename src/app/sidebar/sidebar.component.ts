import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  protected social_network = [
    {
      name : "LinkedIn",
      icon : "linkedin",
      link :  "https://www.linkedin.com/in/gabriel-perlaza-a431b5235/"
    },
    {
      name : "GitHub",
      icon : "github",
      link :  "https://github.com/GabrielPerlaza"
    },
    {
      name : "X",
      icon : "twitter",
      link :  "https://twitter.com/gabrielperlaza_"
    }
  ];

}
