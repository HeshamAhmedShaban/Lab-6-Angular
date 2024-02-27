import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AddProduct } from '../../Models/add-product';
import { AddProductService } from '../../Services/add-product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit{

  productsJsonData:any[]=[]
  product:AddProduct={} as AddProduct;
  // product:AddProduct[]=[]

  updateMode: boolean = false;

constructor(private router:Router,private addProductService:AddProductService){}

  ngOnInit(): void {
  this.getProducts();
  }

  getProducts(){
    this.addProductService.gettAllProduct().subscribe({
      next:(data:any)=>{
        this.productsJsonData=data
        console.log(this.productsJsonData);

      }
    })
  }

  clearForm(){
    this.product.name='';
    this.product.price=0;
    this.product.quantity=0;
    this.product.category='';
    this.product.maxQuantity=0;
  }


    addProduct(){
      this.addProductService.createProduct(this.product).subscribe({
      next:(data:any)=>{
      this.getProducts();
      this.clearForm();
      // console.log(data);
      }
    })
    }

  updateProduct(){
    this.addProductService.updateProduct(this.product).subscribe({
      next:(data)=>{
        this.updateMode=false;
        this.getProducts();
        this.clearForm();
      }
    })
  }

  updateBtnProduct(id:string){
  let updatedProduct=this.productsJsonData.filter((item)=>item.id==id);
  this.updateMode=true;
  this.product.id=updatedProduct[0].id;
  this.product.name=updatedProduct[0].name;
  this.product.price=updatedProduct[0].price;
  this.product.quantity=updatedProduct[0].quantity;
  this.product.category=updatedProduct[0].category;
  }



  deleteProduct(id:string){
    this.addProductService.deleteProduct(id).subscribe({
      next:()=>{
        this.getProducts();
      }
    })
  }

}
