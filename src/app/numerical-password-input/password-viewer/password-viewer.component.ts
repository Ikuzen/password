import { Component, OnInit } from '@angular/core';
import {NumericalPasswordInputComponent} from './../numerical-password-input.component'
import { isNull } from '@angular/compiler/src/output/output_ast';
// import { RandomGenerationService } from './../../services/random-generation.service'

@Component({
  selector: 'app-password-viewer',
  templateUrl: './password-viewer.component.html',
  styleUrls: ['./password-viewer.component.scss']
})
export class PasswordViewerComponent implements OnInit {
  
  randomArr:number[];
  currentInput:string;
  constructor(private inputPassword:NumericalPasswordInputComponent) { }
  ngOnInit() {  
    this.randomArr = this.inputPassword.input.randomInput;
    this.currentInput = "";
  }
  digit(number:string){
    this.currentInput += number;
    console.log(this.currentInput)
  }
  isNumber(number:number){
    if(number!= null){
      return number;
      
    }
    else{
      return "";
    }
  }
}
