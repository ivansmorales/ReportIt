import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-footer-login-register',
  templateUrl: './footer-login-register.component.html',
  styleUrls: ['./footer-login-register.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(500, style({opacity: 1}))
      ]) 
    ]),
    trigger('fade1', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ]),
    trigger('fade2', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1500, style({opacity: 1}))
      ]) 
    ]),
  ]

})
export class FooterLoginRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
