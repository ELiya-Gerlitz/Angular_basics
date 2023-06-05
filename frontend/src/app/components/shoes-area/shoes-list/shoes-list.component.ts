import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/Models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent implements OnInit{

  public products : ProductsModel[]

public constructor(private shoeService : ProductsService){}

  async ngOnInit(): Promise<void> {
    try{
      
      this.products = await this.shoeService.getAllProducts()

    }catch(err:any){
      console.log(err)
    }

  }



}
