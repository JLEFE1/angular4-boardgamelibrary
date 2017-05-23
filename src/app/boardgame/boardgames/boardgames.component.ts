import { Component, OnInit } from '@angular/core';
import {Boardgame} from '../entities/boardgame.model';
import {BoardgameService} from '../../shared/service/boardgame.service';

@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.css']
})
export class BoardgamesComponent implements OnInit {

  private games: Boardgame[];
  private selectedGame: Boardgame;

  constructor(private boardgameService: BoardgameService) {
    boardgameService.getAllGames().subscribe(result => this.games = result);
    console.log("Constructor called in Boardgames module");

  }

  ngOnInit() {
    console.log("NgOnInit called in Boardgames module");
  }

}
