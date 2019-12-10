import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  createUID() {
    let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let randAlpha1 = Math.ceil(Math.random() * 25);
    let randAlpha2 = Math.ceil(Math.random() * 25);
    let randAlpha3 = Math.ceil(Math.random() * 25);
    let randAlpha4 = Math.ceil(Math.random() * 25);
    let randomNum1 = Math.ceil(Math.random() * 9);
    let randomNum2 = Math.ceil(Math.random() * 9);
    let randomNum3 = Math.ceil(Math.random() * 9);
    let randomNum4 = Math.ceil(Math.random() * 9);


    let uid = alpha[randAlpha1] + alpha[randAlpha2] + alpha[randAlpha3] + alpha[randAlpha4] + num[randomNum1] + num[randomNum2] + num[randomNum3] + num[randomNum4];
    return uid; 
  }
  create(product) {
    return this.db.list('/products').push(product);
  }
  getAll() {
    return this.db.list('/products').valueChanges();
  }
  get(productId) {
    return this.db.object('/products' + productId);
  }
}
