import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent} from './app.component';
import { SubProductsComponent } from './sub-products/sub-products.component';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';

const routes: Routes = [
	{ path : 'sub-products' , 		component : SubProductsComponent },
	{ path : 'sub-products/:brand', component : SubProductsComponent },
	{ path : 'product-info' , 		component : ProductInfoComponent },
	{ path : 'product-info/:id' , 	component : ProductInfoComponent },
	{ path : 'home', 				component : HomeComponent },
	{ path : '', 					component : HomeComponent, pathMatch: 'full' },
	{ path:	 '**',	redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
