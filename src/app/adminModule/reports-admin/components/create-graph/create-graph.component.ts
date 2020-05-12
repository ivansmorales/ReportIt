import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {LogalStorageService} from '../../../../userModule/services/logal-storage.service';

@Component({
  selector: 'app-create-graph',
  templateUrl: './create-graph.component.html',
  styleUrls: ['./create-graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateGraphComponent implements OnInit {

  public htmlToAdd;
  public xArray = [];
  public yArray = [];

  constructor(public localStorageService: LogalStorageService) { }

  ngOnInit(): void {
  }

  /* Toma el valor del input para agregar código html desde typescript con base en el valor */
  getValues(){
    const div = (document.getElementById('add_me') as HTMLInputElement);
    const n = (document.getElementById('data_inputs') as HTMLInputElement).value;
    for (let i = 1; i <= Number(n); i++){
      this.htmlToAdd = '<div class="row row-input"><div class="input-field col s6"> <input placeholder="Valor en posición x, eg. Mexico" id="x_value' + i + '" type="text" class="validate"> </div><div class="input-field col s6"> <input placeholder="Valor en la posición y, eg. 1000" id="y_value' + i + '" type="text" class="validate"> </div> </div>';
      div.innerHTML += this.htmlToAdd;
    }
  }

  getAllInputDataForGraphic(){
    const name = (document.getElementById('graph_name') as HTMLInputElement).value;
    const n = (document.getElementById('data_inputs') as HTMLInputElement).value;

    for (let i = 1; i <= Number(n); i++){
      const yVal = (document.getElementById('y_value' + i) as HTMLInputElement).value;
      const label = (document.getElementById('x_value' + i) as HTMLInputElement).value;
      this.xArray.push(label);
      this.yArray.push(yVal);
    }
    this.localStorageService.storeOnLocalStorageAdmin(name, this.xArray, this.yArray);
  }

}
