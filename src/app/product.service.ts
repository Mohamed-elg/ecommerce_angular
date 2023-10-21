import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'assets/products_list.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.products)
    );
  }

  getProductByReference(reference: string): Observable<Product | undefined> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        const products = data.products as Product[];
        return products.find(product => product.reference === reference);
      })
    );
  }  

}