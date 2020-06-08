import { Component, OnInit, HostBinding } from '@angular/core';
import { Report } from '../models/report';
import { LogalStorageService } from '../services/logal-storage.service';

import { trigger, state, style, animate, transition } from '@angular/animations';
//import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  animations: [
    trigger('fade', [transition('void => *', [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))])]),
    trigger('fade1', [transition('void => *', [style({ opacity: 0 }), animate(1000, style({ opacity: 1 }))])]),
    trigger('fade2', [transition('void => *', [style({ opacity: 0 }), animate(1500, style({ opacity: 1 }))])]),
  ]
})
export class ReportsComponent implements OnInit {

  reports: Report = this.localStorageService.readLocalStorageReports(); 
  
  public divCrear = false;
  public divReportes = true;
  public divHistorial = true;
  public divValorado = true;
  public reportModel = new Report();

  constructor(public localStorageService: LogalStorageService) {
  }

  onSubmit() {
    this.localStorageService.storeOnLocalStorageReports(this.reportModel);

    const recognitionImageInputElement = document.querySelector(
      '#recognition-image-input',
    );
    var img1 = document.createElement("img");
    img1.src = "src/assets/placas.png";


    /*
    const worker = createWorker({
      logger: m => console.log(m)
    });
    
    (async () => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(img1);
      console.log(text);
      await worker.terminate();
    })();
    */


  }
  ngOnInit(): void {// this.localStorageService.storeOnLocalStorageReports(new Report("bache", "juan", "fecha", "descr", "foto", "hora"));
  }

  verCrear() {
    this.divCrear = false;
    this.divReportes = true;
    this.divHistorial = true;
    this.divValorado = true;
  }

  verReportes() {
    this.divCrear = true;
    this.divReportes = false;
    this.divHistorial = true;
    this.divValorado = true;
  }

  verHistorial() {
    this.divCrear = true;
    this.divReportes = true;
    this.divHistorial = false;
    this.divValorado = true;
  }

  verValorado() {
    this.divCrear = true;
    this.divReportes = true;
    this.divHistorial = true;
    this.divValorado = false;
  }


}
