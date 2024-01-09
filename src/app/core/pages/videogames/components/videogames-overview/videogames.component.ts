import { Component, OnInit } from '@angular/core';
import { VideogamesService } from '../../services/videogames.service';
import { Videogame } from '../../models/videogames.interface';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {
  allVideogames: Videogame[] = [];
  totalProjects: number = 0;
  
  constructor(private videogamesService: VideogamesService) {}

  ngOnInit(): void {
    this.getAllVideogames();
  }

  getAllVideogames() {
    this.videogamesService.getAllVideogames().subscribe(
      ({gameDataList, nproyectos}) => {
        this.allVideogames = gameDataList;
        this.totalProjects = nproyectos;
      }
    )
  }
  


}
