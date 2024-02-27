import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule, NgStyle } from '@angular/common';
import { ProductcardDirective } from '../../Directive/productcard.directive';
import { ProductCardPipe } from '../../Pipes/product-card.pipe';
import { ProductsService } from '../../Services/products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule,NgStyle,ProductcardDirective,ProductCardPipe,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  products:Iproduct[]=[];
  filterProduct:Iproduct[]=[];
  togglePurchase(id:number){
  const product=this.products.find(product=>product.ID === id);
  if(product){
    product.isPurched=!product.isPurched;
    product.Quantity=product.Quantity -1;
  }}
    Name:string="Hesham Ahmed Shaban";

constructor(private productService:ProductsService) { }

ngOnInit(): void {
  // Get All Products
  this.products=this.productService.getAllProducts();
  this.filterProduct=this.products;
}
  // @Input() set filterProducts(value:string){  //Search By Select And option
  //   this.filterProduct = this.filterProductByCategory(value);
  // }
  // @Input() set filterProductsInput(value:string){   //Search By Input Text
  //   this.filterProduct = this.filterProductInput(value);
  // }

  // Create Custom Event
  @Output() addToCartEvent:EventEmitter<Iproduct>=new EventEmitter<Iproduct>();


  // filterProductByCategory(value:string){
  // if(value === 'All'){
  //   return this.products;
  // }else{
  //   return this.products.filter((product:Iproduct)=>product.CategoryID === value);
  // }
  // }
  // filterProductInput(value:string){
  // return this.products.filter((product:Iproduct)=>product.Name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  // }

@Input()  set filterProductsServicechild(value:string){
    this.filterProduct=this.filterService(value);
    }

  filterService(categoryId:string){
    if(categoryId === 'All'){
      return this.products;
    }else{
      return this.productService.getProductsByCategory(categoryId);
    }
  }

  addToCart(product:Iproduct){
    // Event Emit (Puplisher)
    this.addToCartEvent.emit(product);

  }
}
