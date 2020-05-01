import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestcalcComponent } from './testcalc/testcalc.component';
import { TestcurrComponent } from './testcurr/testcurr.component';
import { TestdashComponent } from './testdash/testdash.component';
import { TestdataComponent } from './testdata/testdata.component';
import { Testpp1Component } from './testparent/testp1/testpp1/testpp1.component';
import { Testp2Component } from './testparent2/testp2/testp2.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child3Component } from './parent/child3/child3.component';
import { Child2Component } from './parent/child2/child2.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {path:'',component:TestdashComponent}, // Since the path of this dash component available
  {path:'data',component:TestdataComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/:productId',component:ProductDetailsComponent},
  {path:'testpp1',component:Testpp1Component},
  {path:'testp2',component:Testp2Component},
  {path:'parent',component:ParentComponent,children:[ // if we have to show children of a parent then we can show like that!
    {path:'',component:Child1Component}, // for by-default show
    {path:'child1',component:Child1Component},
    {path:'child2',component:Child2Component},
    {path:'child3',component:Child3Component},
  ]},
  {path:'calculator',component:TestcalcComponent},
  {path:'currencyconverter',component:TestcurrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
