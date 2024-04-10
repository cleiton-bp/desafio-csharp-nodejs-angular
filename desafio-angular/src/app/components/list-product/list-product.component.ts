import { Component, Input } from '@angular/core';
import { BtnUpdateComponent } from '../buttons/btn-update/btn-update.component';
import { BtnDeleteComponent } from '../buttons/btn-delete/btn-delete.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [BtnUpdateComponent, BtnDeleteComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent {
  @Input() product!: string;
  @Input() price!: string;
}
