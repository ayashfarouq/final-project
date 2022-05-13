import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { ProductsService } from 'src/app/Services/products.service';
import { Icart } from 'src/app/ViewModels/icart';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { IStore } from 'src/app/ViewModels/istore';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit , OnChanges {
  ClientName:string;
  creditcart:string;
 // ProductList:IProduct[];
 // category:ICategory[];
  isShown:boolean=true;
  isdShown:boolean=false;
  StoreInfo:IStore;
  newProductList:IProduct[];
  // **************************************
  
  prdListOfCat:IProduct[]=[];
  @Input() receivedSelCatID:number=0;
  orderTotalPrice:number=0;
  @Output() onTotalPriceChanged: EventEmitter<number>;

  // **********************************************
  Productcart: IProduct[]=[];
  
   CartID:string="";
   
 @Output() onProductedSelected:EventEmitter<Icart> ;
 
 CardItems!:Icart ;
   
  constructor(private proService:ProductsService,private cartService : CartServiceService, private router: Router) { 
  
    this.onTotalPriceChanged= new EventEmitter<number>();
    this.onProductedSelected=new EventEmitter<Icart>();

    this.StoreInfo={
      Name:"aya",
      Branches:["cairo","alex","minia"],
      Logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIFtYOdNpXQxkSD1z7Ckat31oZngHul07uxYe42Fi4dz7rZjKqMIjuMXRfgWqYn_eaSI&usqp=CAU"
    }
    

   
    this.newProductList=[];
    this.ClientName="";
    this.creditcart="1234567891234567";
    

  }

  
  ngOnChanges(changes: SimpleChanges): void {
 
    this.prdListOfCat=this.proService.getProductsByCateogryID(this.receivedSelCatID);

    // if (this.receivedSelCatID==0)
    // {
    //   this.prdListOfCat=this.ProductList;
    // }
    // else
    //   this.prdListOfCat=this.ProductList.filter(prd=> prd.CategoryID==this.receivedSelCatID);
 }

  ngOnInit(): void {
    this.prdListOfCat=this.proService.getProductsByCateogryID(this.receivedSelCatID);

  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
 

  productsTrackBy(index: number, item: IProduct)
  {
    return item.ID;
  }

  updateOrderTotalPrice(itemsCount:number, price:number)
  {
    this.orderTotalPrice+= (itemsCount*price);
    //Emit Event
    this.onTotalPriceChanged.emit(this.orderTotalPrice);
  }


  OpenpProductDetails(prodID:number){
    this.router.navigate(['/Product',prodID]);
  }
 


  toggle()
  {
    this.isShown= !this.isShown;
    this.isdShown=!this.isdShown;
  }

 
  ShowProducts(id:number)
  {
  // this.newProductList= this.ProductList.filter(el=>el.CategoryID==id);
  }

  // productsTrackBy(index: number, item: IProduct)
  // {
  //   return item.ID;
  // }

  // updateOrderTotalPrice(itemsCount:number, price:number)
  // {
  //   this.orderTotalPrice+= (itemsCount*price);
  //   //Emit Event
  //   this.onTotalPriceChanged.emit(this.orderTotalPrice);

  
  // }

  // addProductToCard(id:number,countItems:number){
  //   let selectedProduct = this.proService.getByID(id);
  //   this.CardItems = 
  //   {
  //     Name: selectedProduct!.Name,
  //     ID: selectedProduct!.ID,
  //     CountItems: countItems,
  //     Price: selectedProduct!.Price,
  //     TotalPricce: countItems * selectedProduct!.Price,
  //     Img: selectedProduct!.Img
  //   }
  //   this.onProductedSelected.emit(this.CardItems);

  // }

  // ProDetails(PID:number)
  // {
  //  this.router.navigate(['/Details',PID]);

  // } 

  // getProByCatagoryID(CatID: number): IProduct[] 
  // {
  //   // if (CatID== 0) {
  //   //   return this.ProductList;
  //   // }
  //   // else { 
  //   //   return (this.ProductList.filter((element) => CatID == element.CategoryID));
  //   // }
    

  // }

}
