import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  name="Aman Gautam";
  testvar2="20";
  constructor() {
    
   }

   showAlert(){
    alert("Hello!")
  }
}
