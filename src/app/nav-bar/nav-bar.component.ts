import { Component, OnInit,ViewChild } from '@angular/core';
import { CartService } from '../services/cart-service.service'

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	cartList = [];

  constructor(private cs:CartService) {
   
  }

  ngOnInit() {
  	
  }

  ngOnChanges() {
  	
  	
  }

}
