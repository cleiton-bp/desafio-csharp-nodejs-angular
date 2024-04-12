import { Component } from '@angular/core';
import { HeaderCategoriesComponent } from '../../../shared/header-categories/header-categories.component';
import { Category } from '../../../models/category';
import { NgFor } from '@angular/common';
import { CategoryServiceService } from '../../../services/category/category-service.service';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HeaderCategoriesComponent, NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  public category!: Category[]

  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((response) => {
      this.category = response
    })
  }
}
