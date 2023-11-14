import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product> = [];

  constructor(private http: HttpClient) { }

  public getProducts(page:number=1, size:number=4){
    return this.http.get(`http://localhost:8089/products?_page=${page}&_limit=${size}`,{observe:'response'}) //La méthode get va retourner un tableau de product
  }

  public handleCheck(product:Product):Observable<Product> {
    // product.checked = !product.checked 
    return this.http.patch<Product>(`http://localhost:8089/products/${product.id}`, 
                    {checked:!product.checked})
  }

  public deleteProduct(product:Product){
    return this.http.delete<Product>(`http://localhost:8089/products/${product.id}`)
  }

  public saveProduct(product:Product){
    return this.http.post<Product>(`http://localhost:8089/products`, product)
  }

  public searchProduct(keyword:string):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}`) //La méthode get va retourner un tableau de product

  }

}
