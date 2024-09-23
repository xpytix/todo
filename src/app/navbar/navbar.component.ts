import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './navbar.component.css',
  template: `
   <header>
      <a routerLink="" routerLinkActive="router-link-active"> home </a>
      <a routerLink="/task" routerLinkActive="router-link-active"> task</a>
      <!-- <a routerLink="/image"> Image</a> -->
    </header>
  `  
})
export class NavbarComponent {

}
