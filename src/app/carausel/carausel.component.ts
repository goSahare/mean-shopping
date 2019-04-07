import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'carausel',
	templateUrl: './carausel.component.html',
	styleUrls: ['./carausel.component.scss']
})
export class CarauselComponent implements OnInit {

	constructor() {
  	}


	imageBase : string = '/assets/images/slider/slide_';
	showNavigationArrows = false;
  	showNavigationIndicators = false;

	images = '1234'.split('').map((x, i) => {
		const num = i;
		return {
			url: `/assets/images/slider/slide_${num}.png`,
			title: `${num}`
		};
	});

	ngOnInit() {
	}

}
