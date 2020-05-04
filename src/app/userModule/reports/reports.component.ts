import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  public divCrear : boolean = true;
  public divReportes : boolean = true;
  public divHistorial : boolean = true;
  public divValorado : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  verCrear(){
    this.divCrear = true;
    this.divReportes = false;
    this.divHistorial = false;
    this.divValorado = false;
  }

  verReportes(){
    this.divCrear = false;
    this.divReportes = true;
    this.divHistorial = false;
    this.divValorado = false;
  }

  verHistorial(){
    this.divCrear = false;
    this.divReportes = false;
    this.divHistorial = true;
    this.divValorado = false;
  }

  verValorado(){
    this.divCrear = false;
    this.divReportes = false;
    this.divHistorial = false;
    this.divValorado = true;
  }

}
