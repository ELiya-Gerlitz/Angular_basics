import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { CategoryModel } from "src/Models/category.model";
import { ProductsModel } from "src/Models/products.model";
import { appconfig } from "src/app/utils/appConfig";

@Injectable({
    providedIn : "root"
})

export class ProductsService {
    
    public constructor(private http : HttpClient) {}

     public async getAllProducts(): Promise<ProductsModel[]> {
        const observable = this.http.get<ProductsModel[]>(appconfig.productsUrl)
        const products =  await firstValueFrom(observable)
        return products
    }


    public async getAllCategories(): Promise<CategoryModel[]> {
        const observable = this.http.get<CategoryModel[]>(appconfig.categoriesUrl)
        const categories =  await firstValueFrom(observable)
        return categories
    }

    public async addProduct(prod :ProductsModel):Promise<void>{
        const observable = this.http.post<ProductsModel>(appconfig.productsUrl, prod)
        await firstValueFrom(observable)
    }

    public async delteProduct(id : number):Promise<void>{
        const observable = this.http.delete<void>(appconfig.productsUrl + id)
        await firstValueFrom(observable)
    }

}