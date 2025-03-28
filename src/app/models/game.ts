export class Game {
    public players:string[] = [];
    public stack:string[] = [];
    public playedCards:string[] = [];
    public currentPlayer:number = 0;
    public pickCardAnimation = false;
    public currentCard:string = '';

    constructor() {
        for (let index = 1; index < 14; index++) {
            this.stack.push('Spade_' + index);
            this.stack.push('Heart_' + index);
            this.stack.push('Club_' + index);
            this.stack.push('Diamond_' + index);
        }

        this.stack = this.shuffle(this.stack);
    }



    shuffle<T>(array: T[]): T[] {
        let currentIndex = array.length,  randomIndex;
    
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    };

    public toJSON() {
        return {
            players: this.players,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard
        }
    }
}