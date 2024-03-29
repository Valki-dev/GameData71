import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent {
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() type: string = "";
  @Input() videogame: any;
}
