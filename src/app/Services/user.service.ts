import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {User} from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }


register(user:User):Observable<User>{
return this.http.post<User>('http://localhost:3000/Users',user)
}
getUser():Observable<any>{
return this.http.get<any>('http://localhost:3000/Users')
}
}
