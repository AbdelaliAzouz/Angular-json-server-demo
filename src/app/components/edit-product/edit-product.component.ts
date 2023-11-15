import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm!: FormGroup;
  selectedProduct!: Product;
  productId!: number

  constructor(private fb: FormBuilder, private productService: ProductService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    //subscribe to url param
    this.productId = this.activatedRoute.snapshot.params['id']
    this.productService.getProductById(this.productId).subscribe({
      next: product => {
        this.selectedProduct = product
        this.productForm = this.fb.group({
          id : this.fb.control(product.id),
          name : this.fb.control(product.name),
          price : this.fb.control(product.price),
          checked : this.fb.control(product.checked),
        })
      },
      error: error => console.log(error)
    })


  }


  updateProduct(){
    let product:Product = this.productForm.value
    this.productService.updateProduct(product).subscribe({
      next: data => alert(JSON.stringify(data))
    })
  }


}
