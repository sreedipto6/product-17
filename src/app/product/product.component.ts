import { CommonModule } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productid!: number;
  iseditproduct: boolean = false;

  constructor(private productservice : ProductServiceService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productservice.getUser().subscribe(Response =>{
      this.products=Response;
      console.log("product response",Response);
    })
  }

  products: {
    id: string,
    product_id: number;
    product_name: string;
    product_description: string;
    product_category: string;
    product_price: string;
  }[] = [
    // {
    //   product_id: 1,
    //   product_name: 'AAA',
    //   product_description: 'sreedipto',
    //   product_category: 'dfg',
    //   product_price: '78',
    // },
  ];

  productfrom = new FormGroup({
    product_name: new FormControl(),
    product_description: new FormControl(),
    product_category: new FormControl(),
    product_price: new FormControl(),
  });

  productsubmit() {
    if (this.iseditproduct == true) {
      const productval = this.productfrom.value;
      const inputproduct = {
        product_id: this.products.length + 1,
        product_name: productval.product_name,
        product_description: productval.product_description,
        product_category: productval.product_category,
        product_price: productval.product_price,
      };
      //this.products[this.productindex] = inputproduct;
      this.productservice.updateUser(inputproduct,this.productid).subscribe(Response =>{
        this.productfrom.reset();
        setTimeout(() => {
          this.ngOnInit();
        }, 1000);
        this.productfrom.reset();
      })
     // this.productfrom.reset();

    } else {
      const productval = this.productfrom.value;
      const inputproduct = {
        product_id: this.products.length + 1,
        product_name: productval.product_name,
        product_description: productval.product_description,
        product_category: productval.product_category,
        product_price: productval.product_price,
      };
      this.productservice.saveUser(inputproduct).subscribe(Response =>{
        // this.products=Response;
        console.log("product response",Response);
        this.productfrom.reset();
        setTimeout(() => {
          this.ngOnInit();
        }, 1000); // 3000ms = 3 seconds
        this.productfrom.reset();
      })
     // this.products.push(inputproduct);

      
    }
  }

  resetForm() {
    this.productfrom.reset();
  }

  editproduct(editpro: any, productid: any) {
    this.productid = productid;
    this.iseditproduct = true;
    const payload = {
      product_name: editpro.product_name,
      product_description: editpro.product_description,
      product_category: editpro.product_category,
      product_price: editpro.product_price,
    };
    this.productfrom.setValue(payload);
  }

  delproduct(product_id: any) {
    // this.products = this.products.filter(
    //   (product) => product.product_id != product_id
    // );

    this.productservice.deleteUser(product_id).subscribe(Response => {

      setTimeout(() => {
        this.ngOnInit();
      }, 1000);
    });
  }
}
