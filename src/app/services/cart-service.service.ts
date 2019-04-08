import { Injectable,EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject,Subject } from 'rxjs'


export interface CartItem {
	id: number,
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
  		_cart.map(arr =>{
  			if(arr.id == item._id){
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
