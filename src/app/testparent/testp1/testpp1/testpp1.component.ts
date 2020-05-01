import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-testpp1',
  templateUrl: './testpp1.component.html',
  styleUrls: ['./testpp1.component.scss']
})
export class Testpp1Component implements OnInit {
  dummy:string;
  testvar="Gautam";
  constructor(public common:CommonService) { }

  ngOnInit(): void {
    
  }
  changeName(){
    this.common.name=this.dummy;
  }

}