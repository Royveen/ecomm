import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routerComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ProductAddCartComponent } from './components/product-add-cart/product-add-cart.component';
import { ImageInformationComponent } from './components/image-information/image-information.component';
import { LoginComponent } from './components/login/login.component';
import {
  InputBoxComponent,
  CoreButtonComponent,
  CoreCheckboxComponent,
  CoreDatepickerComponent,
  CoreSelectComponent,
  CoreModalComponent,
} from './global/global.components';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    CoreButtonComponent,
    CoreCheckboxComponent,
    CoreDatepickerComponent,
    CoreSelectComponent,
    CoreModalComponent,
    NavbarComponent,
    CarouselComponent,
    ProductAddCartComponent,
    ImageInformationComponent,
    LoginComponent,
    routerComponents,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    OwlModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
