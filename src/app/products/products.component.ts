import { Component, OnInit,OnChanges,Input} from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products : any = [];
	productInfo : any;

	@Input() sortByMethod : any = '' ;

	constructor(private is : ItemsService) { }

	ngOnInit() {
		this.getAllItems();
	}

	getAllItems(){
		this.is.getAllItems().subscribe( data =>{
			this.products = data
		});
	}
}
