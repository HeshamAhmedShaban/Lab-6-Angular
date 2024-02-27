import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Iproduct[]=[]

  constructor() {
    this.products=[{
      ID: 1,
      Name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      Price :109.95,
      Quantity: 0,
      Img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      CategoryID:"men's clothing" ,
      Material: "men's clothing",
      isPurched:false,
      CredetCardNumber:"12349678912",
      purchasedDate:new Date (),
      productInCard:1
    },
    {
      ID: 2,
      Name: 'Mens Casual Premium Slim Fit T-Shirts',
      Price: 30000,
      Quantity: 1,
      Img:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      CategoryID: "men's clothing",
      Material: "men's clothing",
      isPurched:false,
      CredetCardNumber: "17345678912",
      purchasedDate:new Date (),
      productInCard:1
    },
    {
      ID: 3,
      Name: 'Mens Cotton Jacket',
      Price: 14000,
      Quantity: 10,
      Img:
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      CategoryID: "men's clothing",
      Material: "men's clothing",
      isPurched:false,
      CredetCardNumber:"18345678913",
      purchasedDate:new Date (),
      productInCard:1
    },
    {
      ID: 4,
      Name: 'Mens Casual Slim Fit',
      Price: 1500,
      Quantity: 2,
      Img:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      CategoryID: "men's clothing",
      Material: "men's clothing",
      isPurched:false,
      CredetCardNumber:"19345678923",
      purchasedDate:new Date (),
      productInCard:1
    },
    {
      ID: 5,
      Name: "John Hardy Women's Legends Naga",
      Price: 1500,
      Quantity: 2,
      Img:
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      CategoryID: 'jewelery',
      Material: 'jewelery',
      isPurched:false,
      CredetCardNumber:"10345678123",
      purchasedDate:new Date (),
      productInCard:1
    },
    {
      ID: 6,
      Name: 'Solid Gold Petite Micropave',
      Price: 1000,
      Quantity: 10,
      Img:
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      CategoryID: 'jewelery',
      Material: 'jewelery',
      isPurched:false,
      CredetCardNumber:"13345679123",
      purchasedDate:new Date (),
      productInCard:1
    },
    {
      ID: 7,
      Name: 'White Gold Plated Princess',
      Price: 13000,
      Quantity: 0,
      Img:
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      CategoryID: 'jewelery' ,
      Material: 'jewelery',
      isPurched:false,
      CredetCardNumber:"14345689123",
      purchasedDate:new Date (),
      productInCard:1
    },
    {
      ID: 8,
      Name: 'WD 4TB Gaming Drive Works with Playstation',
      Price: 36999,
      Quantity: 4,
      Img:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      CategoryID: 'electronics',
      Material: 'electronics',
      isPurched:false,
      CredetCardNumber:"15345789111",
      purchasedDate:new Date (),
      productInCard:1
    },
    {
      ID: 9,
      Name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080)",
      Price: 36999,
      Quantity: 3,
      Img:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      CategoryID: 'electronics',
      Material: 'electronics',
      isPurched:false,
      CredetCardNumber:"16346789123",
      purchasedDate:new Date (),
      productInCard:1
    }];
  }

  getAllProducts():Iproduct[]{
    return this.products;
  }

  getProductsByCategory(CategoryID:string){
    return this.products.filter((product)=>product.CategoryID === CategoryID);
  }

  getProductById(id:number):Iproduct | undefined {
    return this.products.find((product) => product.ID === id);
  }
}

