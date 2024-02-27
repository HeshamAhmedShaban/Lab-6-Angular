export interface Iproduct {
  ID: number;
  Name: string;
  Quantity: number;
  Price: number;
  Img: string;
  CategoryID: string;
  Material:string;
  isPurched:boolean;
  CredetCardNumber: string;
  purchasedDate:Date;
  productInCard:number;
}
