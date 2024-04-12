import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss'
})
export class DeleteProductComponent implements OnInit {

  public id!: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  public deleteProduct() {
    this.productService.deleteProduct(this.id)
    console.log("deletou");
  }
}
