import { Component, Input } from '@angular/core';
import { ProductsModel } from 'src/Models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  public product : ProductsModel

  public constructor(private productsService : ProductsService){}


  public async deleteProd(){
    try{
      
      if(!window.confirm("Are you sure?")) return;
      await this.productsService.delteProduct(this.product.productId)
      alert("deleted successfully")  

    }catch(err:any){
      console.log(err)
    } 
  }

}
