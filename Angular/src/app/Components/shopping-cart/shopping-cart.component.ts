import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/ViewModels/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
 // todaydate:Date=new Date();
  catList: ICategory[];
  receivedOrderTotalPrice:number=0;
  selectedCatID:number=0;
  
//  receivedOrderTotalPrice:number=0;

  @ViewChild('clientName') clientNameInp!: ElementRef;
  @ViewChild(ProductsComponent) ProductsCompObj!: ProductsComponent;
  constructor() {

    this.catList=[
      {
      ID:1,
      Name:"Dishes"
    },
    {
      ID:2,
      Name:"Drinks"
    },
    {
      ID:3,
      Name:"Soup"
    },
    {
      ID:4,
      Name:"Dessert"
    }
    ];

   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.clientNameInp.nativeElement.style.backgroundColor="Lightyellow";
    this.clientNameInp.nativeElement.value="Test";

    console.log(this.ProductsCompObj.prdListOfCat);
  }

  

  updateTotalPrice(totalPrice: number)
  {
    this.receivedOrderTotalPrice=totalPrice;
  }


  


}
