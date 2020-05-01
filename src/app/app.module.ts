import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcalcComponent } from './testcalc/testcalc.component';
import { FormsModule } from '@angular/forms';
import { TestcurrComponent } from './testcurr/testcurr.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TestdashComponent } from './testdash/testdash.component';
import { TestdataComponent } from './testdata/testdata.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentCardComponent } from './testdata/student-card/student-card.component';
import { TestparentComponent } from './testparent/testparent.component';
import { Testp1Component } from './testparent/testp1/testp1.component';
import { Testpp1Component } from './testparent/testp1/testpp1/testpp1.component';
import { Testparent2Component } from './testparent2/testparent2.component';
import { Testp2Component } from './testparent2/testp2/testp2.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { Child3Component } from './parent/child3/child3.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcalcComponent,
    TestcurrComponent,
    NavbarComponent,
    TestdashComponent,
    TestdataComponent,
    StudentCardComponent,
    TestparentComponent,
    Testp1Component,
    Testpp1Component,
    Testparent2Component,
    Testp2Component,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    ProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
