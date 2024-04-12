import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  }

  public async createProduct(product: Product)  {
    console.log(product.categoryId);
    
    return await this.http.post<string>("http://localhost:3000/products", product)
  }

  public async deleteProduct(id:number) {
    return await this.http.delete<Product>(`http://localhost:3000/products/${id}`)
  }
}


// public createProduct(product: Product) : Observable<object> {
//   return this.http.post<object>("http://localhost:3000/products", product, {
//     headers: {
//       contentType: "application/json"
//     }
//   })
// }