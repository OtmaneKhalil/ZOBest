import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }

  produits = [
    {
      id: 1,
      name: "iphone 13 pro max",
      price: 10000,
      imgUrl: "../../../assets/images/header.png",
      rate: 4,
      oldPrice: 11000,
      order: 400,
      ref: "AliExpress"
    },
    {
      id: 2,
      name: "iphone 13 pro max",
      price: 12000,
      imgUrl: "../../../assets/images/header.png",
      rate: 4,
      oldPrice: 13000,
      order: 12000,
      ref: "Jumia"
    }
  ]
}
