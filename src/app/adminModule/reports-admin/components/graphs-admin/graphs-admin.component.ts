import { Component, OnInit } from '@angular/core';

//import * as CanvasJS from 'node_modules/canvasjs/dist/canvasjs.min.js';
import * as CanvasJS from 'src/assets/canvasjs.min.js';

@Component({
  selector: 'app-graphs-admin',
  templateUrl: './graphs-admin.component.html',
  styleUrls: ['./graphs-admin.component.scss']
})
export class GraphsAdminComponent implements OnInit {

  constructor() { }

	ngOnInit() : void{

    
    let chart1 = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: 'light2',
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
    let chart2 = new CanvasJS.Chart("chartContainer2", {
      theme: "light1",
      animationEnabled: true,
      title: {
        text: "Reportes sobre accidentes de auto por mes durante el 2020 en la CDMX"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 8200, label: "Enero" },
          { y: 9500, label: "Febrero" },
          { y: 4300, label: "Marzo" },
          { y: 943, label: "Abril" },
          { y: 220, label: "Mayo" }
        ]
      }]
    });
    let chart3 = new CanvasJS.Chart("chartContainer3", {
      theme: "light2",
      animationEnabled: true,
      title: {
        text: "Tipos de reportes presentados en 2019 en todo México"
      },
      data: [{
        type: "pie",
        startAngle: 240,
        indexLabel: "{label}",
        dataPoints: [
          { y: 30432, label: "Homicidio" },
          { y: 14382, label: "Asaltos" },
          { y: 16432, label: "Desapariciones" },
          { y: 70323, label: "Acoso sexual" },
          { y: 32933, label: "Autos mal estacionados" },
          { y: 40345, label: "Accidentes de auto" }
        ]
      }]
    });
    chart1.render();
    chart2.render();
    chart3.render();
  }

}
