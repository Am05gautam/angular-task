import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcurr',
  templateUrl: './testcurr.component.html',
  styleUrls: ['./testcurr.component.scss']
})
export class TestcurrComponent implements OnInit {
  currencyValue: number;
  result;
  currencyType="rupees";
  constructor() { }

  ngOnInit(): void {
  }
  currencyConverter(){
    if(this.currencyType=="rupees"){
      this.result=this.currencyValue/74;
    }
    else{
      this.result=this.currencyValue*74;
    }
  }

  displayShow(){
    if(this.result){
      return 'block';
    }
    else{
      return 'none';
    }
  }

  resetnum(){
    if(this.result){
      setTimeout(()=>{
        this.result=undefined;
        this.currencyValue=null;
      },4000)
    }
  }
}
