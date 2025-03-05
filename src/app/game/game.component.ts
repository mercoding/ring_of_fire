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
  game:Game;
  
  constructor() {
    this.game = new Game();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
      if(this.pickCardAnimation) return;

      this.pickCardAnimation = true;
      this.currentCard = this.game.stack.pop() as string;
      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.currentCard);
      }, 1000);
  }

}
