import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProduct } from '../Models/add-product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  Myheader={}

  constructor(private http: HttpClient) {
  this.Myheader={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })}
  }

  createProduct(product:AddProduct):Observable<AddProduct>{
  return this.http.post<AddProduct>('http://localhost:3000/Pruducts',JSON.stringify(product),this.Myheader);
  }
  // createProduct(product:AddProduct):Observable<AddProduct>{
  //   return this.http.post<AddProduct>('http://localhost:3000/Pruducts',product);
  //   }

  deleteProduct(id: string):Observable<AddProduct>{
    return this.http.delete<AddProduct>(`http://localhost:3000/Pruducts/${id}`,this.Myheader);
  }
  // deleteProduct(id: string):Observable<AddProduct>{
  //   return this.http.delete<AddProduct>(`http://localhost:3000/products/${id}`);
  // }

  updateProduct(product:any):Observable<AddProduct>{
    return this.http.put<any>('http://localhost:3000/Pruducts/'+product.id,JSON.stringify(product),this.Myheader);
  }
  // updateProduct(product:any):Observable<any>{
  //   return this.http.put<any>('http://localhost:3000/products/'+product.id,product);
  // }

  gettAllProduct():Observable<AddProduct>{
    return this.http.get<AddProduct>(`http://localhost:3000/Pruducts`);
  }
}
