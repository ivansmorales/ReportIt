import { Component, OnInit, HostBinding } from '@angular/core';
import { Report } from '../models/report';
import { LogalStorageService } from '../services/logal-storage.service';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  animations: [
    trigger('fade', [transition('void => *', [style({ opacity: 0 }), animate(500, style({opacity: 1}))])]),
    trigger('fade1', [transition('void => *', [style({ opacity: 0 }), animate(1000, style({opacity: 1}))])]),
    trigger('fade2', [transition('void => *', [style({ opacity: 0 }), animate(1500, style({opacity: 1}))]) ]),
  ]
})
export class ReportsComponent implements OnInit {

  public divCrear = false;
  public divReportes = true;
  public divHistorial = true;
  public divValorado = true;
  public reportModel = new Report();

  constructor(public localStorageService: LogalStorageService) {

  }

  onSubmit(){
    this.localStorageService.storeOnLocalStorageReports(this.reportModel);
  }
  ngOnInit(): void {// this.localStorageService.storeOnLocalStorageReports(new Report("bache", "juan", "fecha", "descr", "foto", "hora"));
  }

  verCrear(){
    this.divCrear = false;
    this.divReportes = true;
    this.divHistorial = true;
    this.divValorado = true;
  }

  verReportes(){
    this.divCrear = true;
    this.divReportes = false;
    this.divHistorial = true;
    this.divValorado = true;
  }

  verHistorial(){
    this.divCrear = true;
    this.divReportes = true;
    this.divHistorial = false;
    this.divValorado = true;
  }

  verValorado(){
    this.divCrear = true;
    this.divReportes = true;
    this.divHistorial = true;
    this.divValorado = false;
  }


}
