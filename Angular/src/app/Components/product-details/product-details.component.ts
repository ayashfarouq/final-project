import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private prdid:number=0;
  currproduct:IProduct | undefined=undefined;
  constructor(private activatedRout:ActivatedRoute ,
     private proservice:ProductsService,
     private location : Location) { }

  ngOnInit(): void {
   this.prdid=Number( this.activatedRout.snapshot.paramMap.get("pid"));
   this.currproduct=this.proservice.getProductByID(this.prdid);
  }

  goback(){
    this.location.back();
  }

}
