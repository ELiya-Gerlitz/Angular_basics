import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/layout-area/home/home.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { AsideComponent } from './components/layout-area/aside/aside.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { DiscountComponent } from './components/shoes-area/discount/discount.component';
import { AboutComponent } from './components/home-area/about/about.component';
import { WeekdaysComponent } from './components/shoes-area/weekdays/weekdays.component';
import { VideoComponent } from './components/shoes-area/video/video.component';
import { StoriesComponent } from './components/shoes-area/stories/stories.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/shoes-area/input/input.component';
import { ShoesListComponent } from './components/shoes-area/shoes-list/shoes-list.component';
import { HttpClientModule } from "@angular/common/http";
import { AddProductComponent } from './components/shoes-area/add-product/add-product.component';
import { ProductCardComponent } from './components/shoes-area/product-card/product-card.component';
import { PageNotfoundComponent } from './components/layout-area/page-notfound/page-notfound.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  
    HomeComponent,
       HeaderComponent,
       FooterComponent,
       AsideComponent,
       LayoutComponent,
       AboutComponent,
       WeekdaysComponent,
       VideoComponent,
       StoriesComponent,
       DiscountComponent,
       InputComponent,
       ShoesListComponent,
       AddProductComponent,
       ProductCardComponent,
       PageNotfoundComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [LayoutComponent],
  exports :[]
})
export class AppModule { }
