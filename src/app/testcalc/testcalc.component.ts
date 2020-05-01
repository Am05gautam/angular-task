import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcalc',
  templateUrl: './testcalc.component.html',
  styleUrls: ['./testcalc.component.scss']
})
export class TestcalcComponent implements OnInit {
  number1 : number;
  number2 : number;
  // viewColor: boolean=false;
  resultColor:string="red";
  result  : number=0;
  operation: string;
  constructor() {

   }

  ngOnInit(): void {
  }

  addNumbers(){
    if(this.isInputValid()){
    this.result=this.number1+this.number2;
    this.operation="addition";
    // this.viewColor=true;
    this.resultColor="green";
    setTimeout(()=>{
     // this.viewColor=false;
      this.resultColor="red";
      this.resetNumbers();
      this.result=undefined;
      this.operation=null;
    },5000)
    } 
  else{
    alert("Invalid Input, Please Enter a valid input!")
    }
  }
  subtractNumbers(){
    if(this.isInputValid()){
      this.result=this.number1-this.number2;
      this.operation="subtraction";
      this.resultColor="green";
      setTimeout(()=>{
       // this.viewColor=false;
        this.resultColor="red";
        this.resetNumbers();
        this.result=undefined;
        this.operation=null;
      },5000)
    }
    else{
      alert("Invalid Input, Please Enter a valid input!")
    }
  }
  multiplyNumbers(){
    if(this.isInputValid()){
      this.result=this.number1*this.number2;
      this.operation="multiplication";
      this.resultColor="green";
      setTimeout(()=>{
       // this.viewColor=false;
        this.resultColor="red";
        this.resetNumbers();
        this.result=undefined;
        this.operation=null;
      },5000)
    }
    else{
      alert("Invalid Input, Please Enter a valid input!")
    }
  }
  divideNumbers(){
    if(this.isInputValid()){
      this.result=this.number1/this.number2;
      this.operation="divison";
      this.resultColor="green";
      setTimeout(()=>{
       // this.viewColor=false;
        this.resultColor="red";
        this.resetNumbers();
        this.result=undefined;
        this.operation=null;
      },5000)
    }
    else{
      alert("Invalid Input, Please Enter a valid input!")
    }
  }
  isInputValid(){
    if(this.number1 && this.number2){
      console.log("Valid Input")
      return true;
    }
    else{
      console.log("Invalid Input")
      return false;
    }
  }
  resetNumbers(){
    this.number1= undefined;
    this.number2= undefined;
  }
  // isColor(){
  //   if(this.result){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  // resultAvailable(){
  //   if(this.result){
  //     return "green";
  //   }
  //   else{
  //     return "red";
  //   }
  // }
}

