import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout-area/home/home.component';
import { DiscountComponent } from './components/shoes-area/discount/discount.component';
import { AboutComponent } from './components/home-area/about/about.component';
import { WeekdaysComponent } from './components/shoes-area/weekdays/weekdays.component';
import { VideoComponent } from './components/shoes-area/video/video.component';
import { StoriesComponent } from './components/shoes-area/stories/stories.component';
import { InputComponent } from './components/shoes-area/input/input.component';
import { ShoesListComponent } from './components/shoes-area/shoes-list/shoes-list.component';
import { AddProductComponent } from './components/shoes-area/add-product/add-product.component';
// import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { PageNotfoundComponent } from './components/layout-area/page-notfound/page-notfound.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "discounts", component : DiscountComponent},
  {path : "about", component : AboutComponent},
  {path : "shoes", component : WeekdaysComponent},
  {path : "video", component : VideoComponent},
  {path : "stories", component : StoriesComponent},
  {path : "input", component : InputComponent},
  {path : "listing", component : ShoesListComponent},
  {path : "add", component : AddProductComponent},
  {path: "", redirectTo: "/home", pathMatch: "full" }, // pathMatch: "full" --> exact empty string,
  {path : "**", component : PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
