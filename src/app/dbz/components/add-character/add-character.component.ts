import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html'
})

export class AddCharacterComponent {
  public character: Character = {
    name: 'Vladi',
    power: 0
  }

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public emitCharacter (): void {
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0};
  }
}
