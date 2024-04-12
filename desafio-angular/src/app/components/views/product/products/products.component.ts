import { Component, OnInit } from '@angular/core';
import { HeaderProductsComponent } from '../../../shared/header-products/header-products.component';

import { Product } from '../../../models/product';
import { NgFor } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderProductsComponent,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  
  public product!: Product[]

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: Product[]) => {
      this.product = response
    })
  }
}