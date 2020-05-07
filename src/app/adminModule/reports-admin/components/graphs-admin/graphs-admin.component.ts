import { Component, OnInit } from '@angular/core';

import * as CanvasJS from 'node_modules/canvasjs/dist/canvasjs.min.js';


@Component({
  selector: 'app-graphs-admin',
  templateUrl: './graphs-admin.component.html',
  styleUrls: ['./graphs-admin.component.scss']
})
export class GraphsAdminComponent implements OnInit {

  constructor() { }

	ngOnInit() : void{
    
    let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Estados con mayor cantidad de reportes en 2020"
        },
        data: [{
          type: "column",
          dataPoints: [
            { y: 3211, label: "Guanajuato" },
            { y: 2657, label: "Tamaulipas" },
            { y: 2100, label: "Jalisco" },
            { y: 1987, label: "Michoacán" },
            { y: 1689, label: "EdoMex" },
            { y: 1563, label: "Guerrero" },
            { y: 1221, label: "Ciudad de Mexico" }
          ]
        }]
      });
      
    chart.render();
  }

}
