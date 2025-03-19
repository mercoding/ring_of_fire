import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";


@Component({
  selector: 'app-game',
  imports: [CommonModule, PlayerComponent, MatIconModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  host: { 'hostID': crypto.randomUUID().toString() }
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard:string = '';
  game:Game;
  
  constructor(public dialog: MatDialog) {
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


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {});

    dialogRef.afterClosed().subscribe(name => {
      this.game.players.push(name);
      
    });
  }
}
