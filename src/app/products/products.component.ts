import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Observable<any> | undefined;

  constructor(private PService: ProductService) { }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts() {
    this.products = this.PService.getProducts();
  }
}
