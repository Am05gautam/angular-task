import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-testp2',
  templateUrl: './testp2.component.html',
  styleUrls: ['./testp2.component.scss']
})
export class Testp2Component implements OnInit {
  testvar3="20";
  constructor(public common:CommonService) { }

  ngOnInit(): void {
  }

  function1(){
    this.common.name="Shubham Gautam";
    this.testvar3="24";
    setTimeout(()=>{
      this.reset();
    },4000)
  }
  function2(){
    this.common.name="Mayank Gautam";
    this.testvar3="22";
    setTimeout(()=>{
      this.reset();
    },4000)
  }
  function3(){
    this.common.name="Narendra Gautam";
    this.testvar3="52";
    setTimeout(()=>{
      this.reset();
    },4000)
  }
  function4(){
    this.common.name="Mamta Gautam";
    this.testvar3="46";
    setTimeout(()=>{
      this.reset();
    },4000)
  }
  reset(){
    this.testvar3="20";
    this.common.name="Aman Gautam";
  }
}
