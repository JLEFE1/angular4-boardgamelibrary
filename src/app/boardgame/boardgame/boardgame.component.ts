import {Component, Inject, Input, OnInit} from '@angular/core';
import {Boardgame} from '../entities/boardgame.model';
import {BoardgameService} from '../../shared/service/boardgame.service';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  @Input() game: Boardgame;
  private selectedGame: Boardgame;

  constructor() {

    console.log("Constructor called in Boardgame module");

  }

  goTo(game){
    //this.boardgameService.findGame(game).subscribe(result => this.selectedGame = result);
  }

  ngOnInit() {
    console.log("NgOnInit called in Boardgame module");
  }

}
