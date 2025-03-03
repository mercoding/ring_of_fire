import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  host: { 'hostID': crypto.randomUUID().toString() }
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard:string = '';
  //game:Game
  
  constructor() {
    //this.game = new Game();
    //this.newGame();
  }

  newGame() {
    //this.game = new Game();
    //console.log(this.game);
  }

  takeCard() {
      this.pickCardAnimation = true;
      this.currentCard = "";
      //this.currentCard = this.game.stack.pop().toString();
  }

}
