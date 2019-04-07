import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'sub-products',
  templateUrl: './sub-products.component.html',
  styleUrls: ['./sub-products.component.scss']
})

export class SubProductsComponent implements OnInit {

	brands:any[] ;
	brand :any;
	items:any[];
    message='';

	constructor(private cs:CategoryService , private route : ActivatedRoute) {}

	ngOnInit() {
		this.brand = this.route.snapshot.params.brand;
		this.getAllCategories();

		this.route.params.subscribe(param => {
			this.getItemsByCategory(param.brand);
		});
 	}

	getAllCategories(){
		this.cs.getAllCategories().subscribe(response=>this.brands=response,
			error=>this.message=error);
	}

	getItemsByCategory(brand){
		this.cs.getAllItemsByCategory(brand).subscribe(response=>this.items=response,
			error=>this.message=error);
	}

}
