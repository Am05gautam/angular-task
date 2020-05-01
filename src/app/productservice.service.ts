import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  products=[];
  constructor() {
    this.products.push({name:"abc",description:"I am abc",price:"500"})
    this.products.push({name:"xyz",description:"I am xyz",price:"800"})
    this.products.push({name:"pqr",description:"I am pqr",price:"200"})
    console.log(this.products)
   }

   getProductById(id){
     return this.products[id];
   }

   getAllProducts(){
     return this.products;
   }
}

