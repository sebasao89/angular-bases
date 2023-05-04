import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
  ]

  public deleteHero?: string

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero)
  }

}
