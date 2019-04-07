import { Injectable,EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject,Subject } from 'rxjs'


export interface CartItem {
	mobile: number,
	mobileTitle : string,
	price : number,
	quantity : number
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartarr : CartItem[] = [] ;

  cart = new BehaviorSubject<Array<CartItem>>(null);
  dataSource = this.cart.asObservable();

  constructor() {}
  
  addCartItem(item :any) {
  	let _cart = this.cart.getValue();
  	let added : boolean = false;
  	let itemToAdd; 
  	if(_cart){
  		_cart.forEach(arr =>{
  			if(arr.mobile == item.mobile){
	  			added = true;
	  			arr.quantity++;
	  		}
  		});

  		if(added) {	
  		    itemToAdd = _cart; 	
      } else{
    	  this.cartarr.push(item);
    		itemToAdd = this.cartarr;
      }
  	}else {
  		this.cartarr.push(item);
		  itemToAdd = this.cartarr;
  	}
  	this.cart.next(itemToAdd);
  }
}
