export interface Product{
    id : number
    name : string
    price : number
    imageurl : string
    description : string
  }
export interface CartItem extends Product{
    quantity : number;
  }