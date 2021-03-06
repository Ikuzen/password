import { Component, OnInit } from '@angular/core';
// import {NumericalPasswordInputComponent} from './../numerical-password-input.component'
@Component({
  selector: 'app-randomizer-numeric-input',
  templateUrl: './randomizer-numeric-input.component.html',
  styleUrls: ['./randomizer-numeric-input.component.scss']
})
export class RandomizerNumericInputComponent implements OnInit {
  randomInput:number[];
  
  constructor() { 
    this.randomInput = [0,1,2,3,4,5,6,7,8,9,null,null];
    this.randomInput = this.shuffle(this.randomInput);
  }
  ngOnInit(){}
  shuffle(array:number[]):number[] {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
}
