import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public saludo: string = 'Hola Tongo!';

  public counter: number = 10;

  public increaseBy = (aumento: number) => {this.counter += aumento};
  public reset = () => {this.counter = 10};
}
