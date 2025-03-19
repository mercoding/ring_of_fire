import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent {
  cardAction = [
    { title: "Ass, Waterfall", description: "All players take turns drinking. In a clockwise direction, they may only stop drinking when the player sitting to their right has finished their waterfall. The player who draws the ace may stop drinking first (whenever they wish)." },
    { title: "2, is for you", description: "You decide who drinks." },
    { title: "3, is me", description: "Congrats! Drink a shot!" },
    { title: "4, is floor", description: "Touch the ground with your hand. The last player to touch the ground has to take a drink." },
    { title: "5, is thumbmaster", description: "Touch the tabletop with your thumb. The last player to touch the table takes a drink." },
    { title: "6, is for chicks", description: "The ladies of creation need to take a drink." },
    { title: "7, is heaven", description: "Point your index finger toward the sky. Whoever points to the sky last has to take a drink." },
    { title: "8, is mate", description: "From now on, choose a fellow player who must take a drink with you every time you are asked to do so." },
    { title: "9, is rhyme", description: "Choose a word. In a clockwise direction, players must find a rhyme for it. Anyone who repeats a word or can't come up with a new rhyme has to take a drink." },
    { title: "10, is men", description: "The men are allowed to toast and take a drink." },
    { title: "Jack", description: "The person who draws a Jack may invent a new rule that applies until the end of the game. This rule may not override any other." },
    { title: "Queen", description: "The player may shout 'Never have I ever...' for one round. The losers drink." },
    { title: "King", description: "If a King is drawn, the player may pour a drink of their choice into the King's Cup. If the fourth King is drawn, the player must immediately empty the King's Cup in the middle of the game." }
  ];
}
