import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { Category } from '../../../models/category';
import { CategoryServiceService } from '../../../services/category/category-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit {

  public product!: Product[]
  public category!: Category[]

  constructor(private productService: ProductService, private categoryService: CategoryServiceService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((response: Category[]) => {
      this.category = response
    })
  }
  public name!: string;
  public description!: string;
  public price!: number;
  public categoriaId!: number;

  public async createProduct() {
    let product = new Product(this.name, this.price, this.description, this.categoriaId)
    console.log(this.categoriaId)

    console.log(product);
    (await this.productService.createProduct(product)).subscribe((response) => { console.log(response) })
    this.router.navigate(["/products"])
  }
}
