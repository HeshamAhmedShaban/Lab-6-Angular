import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Models/iproduct';
import {  CommonModule, NgStyle } from '@angular/common';
import { ProductCardPipe } from '../../Pipes/product-card.pipe';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgStyle,ProductCardPipe,CommonModule,FormsModule,RouterModule,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

oneProduct!:Iproduct
  constructor(private productService:ProductsService,private route:ActivatedRoute) {
  }

  ngOnInit(): void {
  let id= Number(this.route.snapshot.paramMap.get('id'))
  this.oneProduct=this.productService.getProductById(id)! ;
  }

}
