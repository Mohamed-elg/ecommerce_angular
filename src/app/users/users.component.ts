import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users : Observable<any> | undefined;

  constructor(private UService : UserService){}

  ngOnInit():void{
    this.showUsers();
  }

  showUsers():void{
    this.users = this.UService.getUsers();
  }

}
