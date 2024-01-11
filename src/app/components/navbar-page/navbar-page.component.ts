import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('5000ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'scale(0.8)' })),
      ]),
    ]),
    trigger('highlight', [
      transition('void => *', [
        animate('1s', keyframes([
          style({ background: 'yellow', offset: 0.5 }),
          style({ background: 'transparent', offset: 1.0 }),
        ])),
      ]),
    ]),
  ],
})
export class NavbarPageComponent {

  public links = ['Landing Page', 'Table', 'Features'];

  constructor(private router: Router){}

  public navigateTo(link: string): void {
    // Responsible for route navigation on the navbar
    let route: string;
    switch (link) {
      case 'Landing Page':
        route = '/';
        break;
      case 'Table':
        route = '/home';
        break;
      case 'Features':
        route = '/features';
        break;
      default:
        route = '/';
    }
    this.router.navigate([route]);
  }
  
}
