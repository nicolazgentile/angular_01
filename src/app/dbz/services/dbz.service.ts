import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 20
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegetta',
    power: 4000
  },];

  public agregarPersonaje(personaje: Character): void {
    const newCharacter: Character = {...personaje, id: uuid()}
    this.characters.push(newCharacter);
  }

  public eliminarPersonajePorId(id: string): void {
    this.characters = this.characters.filter(character => character.id != id);
  }
}
