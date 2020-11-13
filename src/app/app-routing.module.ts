import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module'
import { ProductDatailComponent } from './product/product-datail/product-datail.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  { path:'', component: ProductListComponent},
  { path:'datail',component: ProductDatailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
