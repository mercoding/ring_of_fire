import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import { Firestore, doc, docData, updateDoc, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private injector = inject(Injector);

  constructor(private firestore: Firestore) {}

  getGameById(id: string): Observable<Game> {
    return runInInjectionContext(this.injector, () => {
      const firestore = inject(Firestore);
      const ref = doc(firestore, `games/${id}`);
      return docData(ref) as Observable<Game>;
    });
  }

  updateGameStatus(id: string, updatedGame: Partial<Game>): Promise<void> {
    return runInInjectionContext(this.injector, () => {
      const firestore = inject(Firestore);
      const ref = doc(firestore, `games/${id}`);
      return updateDoc(ref, updatedGame);
    });
  }

  async addGame(game: Game) {
    return await addDoc(collection(this.firestore, "games"), game.toJSON());
    
  }
}
