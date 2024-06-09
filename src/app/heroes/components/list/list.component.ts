import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesList: string[] = ['Hulk', 'Batman', 'El Chapulin Colorado', 'John Wayne'];
  public heroeBorrao?: string;

  public deleteHero() {
    this.heroeBorrao = this.heroesList.pop();
  }
}
