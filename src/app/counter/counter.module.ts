import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { CounterComponent } from "./components/counter/counter.component";



@NgModule({
  // ACORDARSE DE IMPORTAR ESTO!!!!!
  imports: [
    CommonModule,
  ],
  declarations:[
    CounterComponent,
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
