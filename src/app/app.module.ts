import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Material seperate module
import { MaterialModule } from './material.module';

//3rd party modules
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarauselComponent } from './carausel/carausel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrandNavComponent } from './brand-nav/brand-nav.component';
import { ProductsComponent } from './products/products.component';
import { SubProductsComponent } from './sub-products/sub-products.component';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CarauselComponent,
    NavBarComponent,
    BrandNavComponent,
    ProductsComponent,
    SubProductsComponent,
    HomeComponent,
    ProductInfoComponent,
    ProductContentComponent,
    SortByPipe,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
