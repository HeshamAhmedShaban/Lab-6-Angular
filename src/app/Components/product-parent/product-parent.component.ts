import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule, NgStyle } from '@angular/common';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-product-parent',
  standalone: true,
  imports: [FormsModule,ProductListComponent,CommonModule,NgStyle],
  templateUrl: './product-parent.component.html',
  styleUrl: './product-parent.component.scss'
})
export class ProductParentComponent {
  filterProducts:string="All";
  filterProductsInput:string="";
  FilterProducts:string="All";

  cart:Iproduct[]=[];
  filterProductsService:string="All";

  getItemToCart(product:Iproduct){
    const selected = this.cart.find(item => item.ID === product.ID);
    if(selected){
      selected.productInCard = selected.productInCard + 1;
    }else{
      product.productInCard = 1;
      this.cart.push(product);
    }
  }

  totalPrice(){
    return this.cart.reduce((sum,product)=>sum + (product.Price * product.productInCard),0)
  }
}
