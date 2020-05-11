import { Component, OnInit } from '@angular/core';
import { Report } from '../models/report';
import { LogalStorageService } from '../services/logal-storage.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  public divCrear : boolean = false;
  public divReportes : boolean = true;
  public divHistorial : boolean = true;
  public divValorado : boolean = true;
  public reportModel = new Report();

  constructor(public localStorageService : LogalStorageService) {
    


  }

  onSubmit(){
    this.localStorageService.storeOnLocalStorageReports(this.reportModel);
  }  

  ngOnInit(): void {
    //this.localStorageService.storeOnLocalStorageReports(new Report("bache", "juan", "fecha", "descr", "foto", "hora"));
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
