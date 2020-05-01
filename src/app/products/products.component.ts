import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products=[];
  constructor(public productservice:ProductserviceService) { }

  ngOnInit(): void {
    this.products=this.productservice.getAllProducts();
  }

}
