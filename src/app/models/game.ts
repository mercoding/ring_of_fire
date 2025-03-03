export class Game {
    public players:string[] = [];
    public stack:string[] = [];
    public playedCards:string[] = [];
    public currentPlayer:number = 0;

    constructor() {
        for (let index = 1; index < 14; index++) {
            this.stack.push('spade_' + index);
            this.stack.push('hearts_' + index);
            this.stack.push('clubs_' + index);
            this.stack.push('diamonds_' + index);
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
}