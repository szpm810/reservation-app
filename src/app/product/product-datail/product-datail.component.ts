import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-datail',
  templateUrl: './product-datail.component.html',
  styleUrls: ['./product-datail.component.scss']
})
export class ProductDatailComponent implements OnInit {

  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {
    }
  };

