import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'case-study';
  currentSort = 'inc';
  sortBy  = {
  	inc : {
  		title : 'Price Up',
  		sortBy : 'inc'
  	},
  	dec : {
  		title: 'Price Down',
  		sortBy : 'dec'
  	}
  }

  sortByButton(val){
  	this.currentSort = val;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
