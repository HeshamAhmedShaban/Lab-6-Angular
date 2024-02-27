import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


user:BehaviorSubject<boolean>
  constructor(private http:HttpClient) {
    this.user = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  get isUserLogged(){
    return localStorage.getItem('userToken') ? true : false;
  }

  login(user:any): Observable<any>{
    let token:string = user.email
    localStorage.setItem('userToken',token);
    this.user.next(true);
    return this.http.post(`http://localhost:3000/Login`,user)
  }

  logout(){
    localStorage.removeItem('userToken');
    this.user.next(false);
  }

  getUserState():Observable<boolean>{
    return this.user.asObservable();
  }


}
