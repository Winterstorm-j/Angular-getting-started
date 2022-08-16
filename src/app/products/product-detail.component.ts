import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {


  pageTitle: string = "Product Detail";
  products: IProduct[] = [];
  product: any;
  Detailsub!: Subscription;
  errorMessage: string = "";

  constructor(private route: ActivatedRoute, 
              private router: Router 
              ) { };

  onBack(): void{
    this.router.navigate(['/products']);
  }
  

  ngOnInit(): void { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`
    // this.product = this.route.snapshot.paramMap;
    
    console.log(this.product)
    //this.productService.getProducts().subscribe({
  //     next: products => {
  //       // this.products = products;
  //       this.product = this.products.find((item, routeId = id) => item.productId === routeId);
  //       // console.log(`Chosen product: ${this.product.productName}`)
  //      },
  //     error: err => this.errorMessage = err
  //   });
   };


  // ngOnDestroy(): void{
  //   this.Detailsub.unsubscribe()
  // }
}

