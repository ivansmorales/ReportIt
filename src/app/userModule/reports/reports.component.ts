import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  public show : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  verCrear(){}
  
  verReportes(){
    //this.show = !this.show;
    console.log("click");
  }

  verHistorial(){}
  verValorado(){}

}
