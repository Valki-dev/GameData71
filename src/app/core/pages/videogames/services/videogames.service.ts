import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameDataList } from '../models/videogames.interface';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  private baseUrl: string = environment.API_URL;
  private gameDataUrl: string = 'GameData';
  private gamesUrl: string = 'games';

  constructor(private httpClient: HttpClient) {}

  getAllVideogames(): Observable<GameDataList> {
    return this.httpClient.get<GameDataList>(
      `${this.baseUrl}/${this.gameDataUrl}/${this.gamesUrl}?style=simple`
    );
  }
}
