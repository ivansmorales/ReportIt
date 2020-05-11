import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-graph',
  templateUrl: './create-graph.component.html',
  styleUrls: ['./create-graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateGraphComponent implements OnInit {

  public htmlToAdd;

  constructor() { }

  ngOnInit(): void {
  }

  
  /* Toma el valor del input para agregar código html desde typescript con base en el valor */
  getValues(){
    const div = (document.getElementById("add_me") as HTMLInputElement);
    const n = (document.getElementById("data_inputs") as HTMLInputElement).value;
    for(let i = 1; i <= Number(n); i++){
      this.htmlToAdd = '<div class="row row-input"> <div class="input-field col s6"> <input placeholder="Valor en posición x" id="x_value" type="text" class="validate"> </div><div class="input-field col s6"> <input placeholder="Valor en la posición y" id="y_value" type="text" class="validate"> </div> </div>';
      div.innerHTML += this.htmlToAdd;
    }
  }

}
