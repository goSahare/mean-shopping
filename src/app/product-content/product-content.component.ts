import { Component, OnInit,OnChanges,Input,Output,EventEmitter } from '@angular/core';

@Component({
	selector: 'product-content',
	templateUrl: './product-content.component.html',
	styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent implements OnInit,OnChanges {
	selectedTab :number;
	@Input()  productInfo : any = [];
	@Output() contentBtnClick = new EventEmitter();

	constructor() { }

	ngOnChanges(...args: any[]) {
		//this.selectedTab = args[0].sideNavClick.currentValue;
	}

	ngOnInit(){

	}

	btnClick(data){
		this.selectedTab = data.index;
		this.contentBtnClick.emit(data.index);
	}
}
