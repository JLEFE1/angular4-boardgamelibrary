import { Component, OnInit } from '@angular/core';
import {Boardgame} from '../shared/boardgame.model';
import {BoardgameService} from '../shared/boardgame.service';

@Component({
  selector: 'bgl-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.css']
})
export class BoardgameListComponent implements OnInit {

  private games: Boardgame[];
  private selectedGame: Boardgame;

  constructor(private boardgameService: BoardgameService) {
    boardgameService.getAllGames().subscribe(result => this.games = result);
  }

  ngOnInit() {
  }

}
