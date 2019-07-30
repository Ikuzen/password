import { Component, OnInit,Input,Output } from '@angular/core';
import {RandomizerNumericInputComponent} from './randomizer-numeric-input/randomizer-numeric-input.component'
@Component({
  selector: 'app-numerical-password-input',
  templateUrl: './numerical-password-input.component.html',
  styleUrls: ['./numerical-password-input.component.scss']
})
export class NumericalPasswordInputComponent implements OnInit {
  input:RandomizerNumericInputComponent;
  constructor(input:RandomizerNumericInputComponent) {
    this.input = input;
  }
  ngOnInit() {
    console.log(this.input)
  }
  // @Input() userPassword:Number  ;
  // @Output() onPasswordMatch = new EventEmitter<Class>();
}
