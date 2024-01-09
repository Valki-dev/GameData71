import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDataList } from '../models/videogames.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  private baseUrl: string = 'http://localhost:8071';
  private gameDataUrl: string = 'GameData';
  private gamesUrl: string = 'games';


  constructor(private httpClient: HttpClient) { }

  getAllVideogames(): Observable<GameDataList> {
    return this.httpClient.get<GameDataList>(`${this.baseUrl}/${this.gameDataUrl}/${this.gamesUrl}?style=simple`);
  }

}
