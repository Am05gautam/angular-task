import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prodItem
  productId
  constructor(public productservice:ProductserviceService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.productId=this.route.snapshot.paramMap.get("productId") // this not works when we refresh the content of the same page..so we use another approach as below:
    // this.product=this.productservice.getProductById(this.productId)

    this.route.params.subscribe(res=>{
      this.productId=res["productId"];
      this.prodItem=this.productservice.getProductById(this.productId)
    })
  }

}
