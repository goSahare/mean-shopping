import { Directive, Input ,HostListener} from '@angular/core';
import { CartService, CartItem } from '../services/cart-service.service';


@Directive({
  selector: '[addToCart]'
})
export class AddToCartDirective {

  constructor(private cs: CartService) { }

  @Input() clickedItem : any;

  @HostListener('click', ['$event'])
  addToCartClick(event) {
    event.preventDefault();

 	let _val = this.clickedItem;
	let item = {
		id : _val._id,
		mobileTitle : _val.title,
		price : _val.price,
		quantity : _val.qty
	};

	this.cs.addCartItem(item);
	
    event.stopPropagation();
   
  }

}
