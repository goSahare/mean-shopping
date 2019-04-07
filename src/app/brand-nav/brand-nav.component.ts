import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'brand-nav',
  templateUrl: './brand-nav.component.html',
  styleUrls: ['./brand-nav.component.scss']
})
export class BrandNavComponent implements OnInit {

	brands : any[] ;
	errMsg : string;	
				
	constructor(private cs : CategoryService) {}

	ngOnInit() {
		this.cs.getAllCategories().subscribe(resp => this.brands = resp,
			err => this.errMsg = err);
	}
}
