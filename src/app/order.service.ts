import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = 'assets/orders.json'

  constructor(private http: HttpClient) { }

  getOrders() : Observable<Order[]>{
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.orders)
    );
  }
  
}
