import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDatailComponent } from './product/product-datail/product-datail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  { path:' ',redirectTo: 'products', },
  //{ path:'detail',component: ProductDatailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ProductListComponent,
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
