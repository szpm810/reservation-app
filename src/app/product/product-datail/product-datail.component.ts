import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {products } from '../products';

@Component({
  selector: 'app-product-datail',
  templateUrl: './product-datail.component.html',
  styleUrls: ['./product-datail.component.scss']
})
export class ProductDatailComponent implements OnInit {
  product

  constructor( private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe(params => {
       //this.product = products[+params.get('productId')]
       this.product =products[+params.get('productId')]
     })
    }
  };

