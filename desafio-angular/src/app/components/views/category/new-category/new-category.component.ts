import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../../services/category/category-service.service';
import { Router } from 'express';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-new-category',
  standalone: true,
  imports: [],
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.scss'
})
export class NewCategoryComponent {

  public category!: Category[]

  constructor(private categoryService: CategoryServiceService, private router: Router) { }

  public async createProduct() {
    let category = new Category(this.name)

    console.log(category);
    (await this.categoryService.createCategory(category)).subscribe((response) => { console.log(response) })
  }

  public name!: string;
}
