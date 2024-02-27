import { Component } from '@angular/core';
import { Store } from '../../Models/store';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  Name ="Hesham"

  store1:Store=new Store("Adidas",["cairo","alex","giza"],'assets/images/logo.webp');

  product1:Iproduct={
    ID:1,
    Name:"shoes",
    Quantity:10,
    Price:100,
    Img:"assets/images/adidas.jpeg",
    CategoryID:"1",
    Material:"cotton",
    isPurched:false
  }

}
