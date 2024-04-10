import { Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ProductsComponent } from './components/views/product/products/products.component';
import { NewProductComponent } from './components/views/product/new-product/new-product.component';
import { UpdateProductComponent } from './components/views/product/update-product/update-product.component';
import { DeleteProductComponent } from './components/views/product/delete-product/delete-product.component';
import { CategoriesComponent } from './components/views/category/categories/categories.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/add",
    component: NewProductComponent
  },
  {
    path: "products/update",
    component: UpdateProductComponent
  },
  {
    path: "products/delete",
    component: DeleteProductComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "categories/add",
    component: NewProductComponent
  }
];
