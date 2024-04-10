import { Component } from '@angular/core';
import { HeaderCategoriesComponent } from '../../../shared/header-categories/header-categories.component';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HeaderCategoriesComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

}
