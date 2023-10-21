import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  productDetail: Product | undefined;

  constructor(private route: ActivatedRoute,private productService: ProductService) {
    this.route.params.subscribe(params => {
      const reference = params['reference'];
      this.productService.getProductByReference(reference).subscribe(product => {
        this.productDetail=product;
      });
      
    });
  }

  printStar(rating: number) {
    let star = "";
    for (let i = 1; i <= Math.floor(rating); i++) {
      star += "★";
    }
    if (rating - Math.floor(rating) >= 0.5) {
      star += "½";
    }
    return star;
  }

}

