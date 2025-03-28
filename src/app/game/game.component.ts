import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
import { Firestore, collection, collectionData, addDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { ActivatedRoute, GuardsCheckStart } from '@angular/router';
import { GameService } from '../services/game.service';
import { PlayerMobileComponent } from "../player-mobile/player-mobile.component";

@Component({
  selector: 'app-game',
  imports: [CommonModule, PlayerComponent, PlayerMobileComponent, MatIconModule, GameInfoComponent, PlayerMobileComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  host: { 'hostID': crypto.randomUUID().toString() }
})
export class GameComponent implements OnInit {
  
  game:Game;
  //firestore: Firestore = inject(Firestore);
  //items$: Observable<any[]>;
  //db;
  
  
  constructor( private route: ActivatedRoute,
    private gameService: GameService, public dialog: MatDialog) {
    
    this.game = new Game();
    //const app = initializeApp(environment.firebase);
    //this.db = getFirestore(app);
   
  }

  /*
  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe(p => { 
      console.log(p['id']); 
      //const g = doc(this.db, `games/${p['id']}`);
      //console.log(g);
      this.getGameById(p['id']).subscribe(data => {
        console.log(data);
        
      });
      
    });

    
  }*/

    ngOnInit(): void {
      const gameId = this.route.snapshot.paramMap.get('id');
      if (gameId) {
        this.gameService.getGameById(gameId).subscribe((gameData) => {
          this.game.currentPlayer = gameData.currentPlayer;
          this.game.playedCards = gameData.playedCards;
          this.game.players = gameData.players;
          this.game.stack = gameData.stack;
          this.game.currentCard = gameData.currentCard;
          this.game.pickCardAnimation = gameData.pickCardAnimation;
        });
      }
    }


  async newGame() {
    this.game = new Game();
    //const docRef = await addDoc(collection(this.firestore, "games"), this.game.toJSON());
  }

  takeCard() {
      if(this.game.pickCardAnimation) return;

      this.game.pickCardAnimation = true;
      this.game.currentCard = this.game.stack.pop() as string;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.updateGame();
      setTimeout(() => {
        this.game.pickCardAnimation = false;
        this.game.playedCards.push(this.game.currentCard);
        this.updateGame();
      }, 1000);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {});

    dialogRef.afterClosed().subscribe(name => {
      if(name && name.length > 0) {
        this.game.players.push(name);
        this.updateGame();
      }
    });
  }

  updateGame() {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId) {
      this.gameService.updateGameStatus(gameId, this.game.toJSON());
    }
  }
}
