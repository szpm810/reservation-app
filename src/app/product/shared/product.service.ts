import{ Injectable } from '@angular/core';
import { from } from 'rxjs';
import{ products } from 'src/app/products';

@Injectable()
export class ProductService{


    getProducts() {
        return products
    }

    getProductById() {

    }
}