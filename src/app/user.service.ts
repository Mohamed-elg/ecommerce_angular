import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'assets/user_list.json'

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.users)
    );
  }
}
