import { Component, OnInit } from '@angular/core';
import {Boardgame} from './shared/boardgame.model';
import {BoardgameService} from './shared/boardgame.service';

@Component({
  selector: 'bgl-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.css']
})
export class BoardgamesComponent implements OnInit {

  private games: Boardgame[];
  private selectedGame: Boardgame;

  constructor(private boardgameService: BoardgameService) {
    boardgameService.getAllGames().subscribe(result => this.games = result);
  }

  ngOnInit() {
  }

}
