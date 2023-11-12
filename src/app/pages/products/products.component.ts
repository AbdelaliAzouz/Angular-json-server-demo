import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];
  public keyword:string = "";

  constructor(private http: HttpClient, private productService: ProductService){
  }

  handleCheck(product:Product) {
    // product.checked = !product.checked 
    this.productService.handleCheck(product)
                    .subscribe({
                      next: updatedProduct => product.checked=!product.checked
                    })
  }
  
  //La méthode get permet de retourner un objet de type Observable
  ngOnInit() {
    this.getProducts()    
  }

  public getProducts(){
    this.productService.getProducts(1,3)
    .subscribe({
      next: data => this.products = data,
      error: err => console.error(err)
    })

  }

  public handleDelete(product:Product){
    if(confirm("Are you sure you want to delete this product"))
    this.productService.deleteProduct(product)
    .subscribe({
      next: data => {
        // this.getProducts()
        //ou
        this.products=this.products.filter(p => p.id != product.id)
      } 
    })
  }

  public searchProduct(){
    this.productService.searchProduct(this.keyword)
    .subscribe({
      next : data => this.products=data
    })
  }


}
