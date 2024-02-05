import { Component, OnInit } from '@angular/core';
import { VideogamesService } from '../../services/videogames.service';
import { ActivatedRoute } from '@angular/router';
import { VideogameDetail } from '../../models/videogame-details.interface';
import * as literals from 'src/assets/literals/app_literal.json';

@Component({
  selector: 'app-videogame-details',
  templateUrl: './videogame-details.component.html',
  styleUrls: ['./videogame-details.component.css']
})
export class VideogameDetailsComponent implements OnInit {
  
  videogame!: VideogameDetail;
  literals = literals;

  constructor(private route: ActivatedRoute, private videogamesService: VideogamesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getVideogameById(params['id']);
    })
  }

  getVideogameById(id: string) {
    this.videogamesService.getVideogameById(id).subscribe(
      (response) => {
        console.log(response);
        this.videogame = response;
      } 
    );
  }

}
