import { Component, OnInit,OnChanges } from '@angular/core';
import { CartService,CartItem } from '../services/cart-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {

  totalItems :number = 0;
  totalPrice :number = 0;
  cart       : any;

  constructor(private cs:CartService,private snackBar: MatSnackBar) {}

  ngOnInit() {
  	this.cs.dataSource.subscribe(resp =>{
		  let _item = 0, _price = 0;
  		if (resp){
  			resp.map((mobiles) =>{
  				_item          += mobiles.quantity;
  				_price         += (mobiles.price * mobiles.quantity); 
  				this.totalItems = _item;
  				this.totalPrice = _price;
          this.cart = { title : mobiles.mobileTitle ,
                        price : mobiles.price , 
                        qty : mobiles.quantity };
          //console.log(this.cart)
  				this.openToastMsg(mobiles.mobileTitle);
  			});
      }
  	});
  }

  openToastMsg(title){
  	this.snackBar.open(title + " is successfully added", "Got it!",{
		    duration:5000
	  });
  }
}