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

  constructor() { }

  ngOnInit(): void {
  }

  verReportes(){
    this.divReportes = false;
    this.divValorado = true;
    this.divEditar = true;
  }

  verEditar(){
    this.divEditar = false;
    this.divReportes = true;
    this.divValorado = true;
  }

  verValorado(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = false;
  }

}
