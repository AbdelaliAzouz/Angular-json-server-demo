 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];
  public keyword: string = "";
  totalPages: number=0
  currentPage: number = 1;
  pageSize: number = 3;

  constructor(private http: HttpClient, private productService: ProductService, private router: Router) {
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
    this.productService.getProducts(this.keyword,this.currentPage,this.pageSize)
    .subscribe({
      next: (response) => {
        this.products = response.body as Product[]
        let totalProducts:number= parseInt(response.headers.get('x-total-count')!)
        this.totalPages = Math.floor(totalProducts/this.pageSize)
        if(totalProducts % this.pageSize != 0){
          this.totalPages++
        }
        console.log(this.totalPages)
      },
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

  // router!: Router;
  public handleEdit(product:Product){
    this.router.navigateByUrl(`/edit-product/${product.id}`)
  }

  goToPage(selectedPage:number){
    this.currentPage = selectedPage
    this.getProducts()
  }

}
