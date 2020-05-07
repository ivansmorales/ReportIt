import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-admin',
  templateUrl: './reports-admin.component.html',
  styleUrls: ['./reports-admin.component.scss']
})
export class ReportsAdminComponent implements OnInit {

  public divReportes : boolean = false;
  public divEditar : boolean = true;
  public divValorado : boolean = true;
  public divUsers : boolean = true;
  public divGraphs : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  verReportes(){
    this.divReportes = false;
    this.divValorado = true;
    this.divEditar = true;
    this.divUsers = true;
    this.divGraphs = true;
  }

  verEditar(){
    this.divEditar = false;
    this.divReportes = true;
    this.divValorado = true;
    this.divUsers = true;
    this.divGraphs = true;
  }

  verValorado(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = false;
    this.divUsers = true;
    this.divGraphs = true;
  }

  verUsuarios(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = true;
    this.divUsers = false;
    this.divGraphs = true;
  }

  verGraficas(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = true;
    this.divUsers = true;
    this.divGraphs = false;
  }

}
