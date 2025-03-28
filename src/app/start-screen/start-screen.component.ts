import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';


@Component({
  selector: 'app-start-screen',
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent {
  constructor(private firestore: Firestore, private router: Router, private gameService: GameService) {

  }

  async newGame() {
    const game = new Game();
    const docRef = await this.gameService.addGame(game);
    this.router.navigateByUrl(`/game/${docRef.id}`);
  }
}
