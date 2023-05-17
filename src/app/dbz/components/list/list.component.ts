import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 7100
    }
  ]
  
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter() 
  
  onDeleteCharacter(id?: string):void {
    if( !id ) return
    
    this.onDelete.emit(id)
  }
}
