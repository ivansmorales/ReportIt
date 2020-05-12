import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-contacto-langingpage',
  templateUrl: './contacto-langingpage.component.html',
  styleUrls: ['./contacto-langingpage.component.scss'],
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
export class ContactoLangingpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
