import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { OrderService } from '../order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders : Observable<any> | undefined;

  constructor(private OService : OrderService){}

  ngOnInit():void{
    this.showOrders();
  }

  showOrders():void{
    this.orders = this.OService.getOrders();
  }
}
