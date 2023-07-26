import { Component } from '@angular/core';
import { gamesConfig } from './videogames.config';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent {
  videogames: any = gamesConfig;
}
