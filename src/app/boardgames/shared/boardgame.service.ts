import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BoardgameService {

  constructor(private http: Http) { }


  getAllGames() {
    return this.http.get('http://localhost:8080/boardgames/all').map(res => res.json());
  }

  findGame(game) {
    return this.http.get('http://localhost:8080/boardgames/findOne/' + game.bggId).map(res => res.json());
  }

}
