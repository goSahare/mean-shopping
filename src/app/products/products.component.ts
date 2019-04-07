import { Component, OnInit,OnChanges,Input} from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CartService, CartItem } from '../services/cart-service.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products : any = [];
	productInfo : any;

	@Input() sortByMethod : any = 'dec' ;

	constructor(private is : ItemsService, private cs : CartService) { }

	ngOnInit() {
		this.getAllItems();
	}

	getAllItems(){
		this.is.getAllItems().subscribe( data =>{
			console.log(data)
			this.products = data
		});
	}

	addToClick(val){
		var item = {
			mobile : val.price,
			mobileTitle : val.title.slice(0,10),
			price : val.price,
			quantity : 1
		};
		this.cs.addCartItem(item);
	}

}
