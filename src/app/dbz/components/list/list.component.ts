import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})

export class ListComponent {
  @Input()
  public characterList: Character [] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public deleteCharacter(id?: string) {
    if(!id) console.log("No se puede eliminar un elemento sin id");
    this.onDeleteCharacter.emit(id);
  }
}
