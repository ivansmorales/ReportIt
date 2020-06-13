import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-header-landing-page',
  templateUrl: './header-landing-page.component.html',
  styleUrls: ['./header-landing-page.component.scss'],
  animations: [
    trigger('fade', [transition('void => *', [style({ opacity: 0 }), animate(500, style({opacity: 1}))])]),
    trigger('fade1', [transition('void => *', [style({ opacity: 0 }), animate(1000, style({opacity: 1}))])]),
    trigger('fade2', [transition('void => *', [style({ opacity: 0 }), animate(1500, style({opacity: 1}))]) ]),
  ]
})
export class HeaderLandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    let div = document.getElementById("navbarTogglerDemo03").style.display = "block";
  }

}
