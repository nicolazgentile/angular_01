import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 44;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero() {
    this.name = 'Hombre moco';
  }

  public changeAge() {
    this.age = 107;
  }

  public asd():void {
    //TODO: Definir el método
    throw('Pendiente');
  }

  public resetForm():void {
    this.name = 'Ironman';
    this.age = 44;

    document.querySelectorAll('h1').forEach( element => {
      element.innerHTML = 'Hi Angular!';
    });
  }
}
