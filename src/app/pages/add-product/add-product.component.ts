import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService){}

  ngOnInit(){
    this.productForm = this.fb.group({
      name : this.fb.control('', Validators.required),
      price : this.fb.control(''),
      checked : this.fb.control(false)
    })
  }
  
  saveProduct(){
    let product = this.productForm.value;
    this.productService.saveProduct(product)
      .subscribe({
        next : data => alert(JSON.stringify(data)),
        error : err => console.log(err)
      })
  }


}
