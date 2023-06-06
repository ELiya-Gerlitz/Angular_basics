import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CategoryModel } from 'src/Models/category.model';
import { ProductsModel } from 'src/Models/products.model';
import { ProductsService } from 'src/services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  public product = new ProductsModel()
  public categories : CategoryModel[] 

  
  public constructor(private productService : ProductsService, private router: Router){}

//  get all categories
  async ngOnInit(): Promise<void>{
    try{
      this.categories = await this.productService.getAllCategories()
    
    }catch(err: any){
      console.log(err)
    }
  }

public async send():Promise<void>{
  try{
      await this.productService.addProduct(this.product)
      alert("successfully added!")
      this.router.navigate(['/', 'home'])
  }catch(err: any){
      console.log(err)
  }
}
}