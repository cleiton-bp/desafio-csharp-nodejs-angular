import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  public getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:3000/categories");
  }

  public async createCategory(category: Category)  {
    console.log(category.name);
    
    return await this.http.post<string>("http://localhost:3000/category", category)
  }
}
