import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';



@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit{

	clickedButton    = 0;
	product          : any ;
	productContent   : any ;
	constructor(private is : ItemsService, private router : ActivatedRoute,
				private location : Location) { }

	rowClick(btn){
		this.clickedButton = btn;
	}

	ngOnInit() {
		this.product = this.router.snapshot.params.id;

		if (this.product)
			this.is.getItemsById(this.product).subscribe( resp => {
				this.productContent = resp;
				console.log(this.productContent)
			});
	}

	changedHandler(index){
		this.clickedButton = index;
	}

	goBack(){
		this.location.back();
	}

}
