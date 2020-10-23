import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDatailComponent } from './product-datail/product-datail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
     path:'products',component:  ProductComponent,
     children: [
      { path:' ',component:  ProductListComponent },
      { path:':productId',component: ProductDatailComponent}
     ]
   },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDatailComponent,
    ProductListComponent
      ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
