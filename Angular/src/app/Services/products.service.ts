import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Icart } from '../ViewModels/icart';
import { IProduct } from '../ViewModels/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  Productlist: IProduct[];
  @Input() reciveSelectedCatID: number = 0;
  CartID: string = "";

  //@Output() onProductedSelected: EventEmitter<Icart>;

 // CardItems!: Icart;

  // todaytime: Date = new Date();
  // totalprice: number = 0;
  constructor() {
   // this.onProductedSelected = new EventEmitter<Icart>();
   this.Productlist=[{
    ID:1,
  Name:"Cream OF Chicken",
  Quantity:30,
  Price:100,
  Img:"assets/Cream-of-chicken-Soup.jpg",
  CategoryID:3
  },
  {
    ID:2,
    Name:"Sea food",
    Quantity:100,
    Price:100,
    Img:"assets/Tom-yum-seafood-soup-scaled.jpg",
    CategoryID:3
  },
  {
    ID:3,
    Name:"negresco pasta",
    Quantity:60,
    Price:100,
    Img:"assets/fullsizerender11.jpg",
    CategoryID:1
  },
  {
    ID:4,
    Name:"white sauce pasta",
    Quantity:80,
    Price:100,
    Img:"assets/white-sauce-pasta-recipe-9.jpg",
    CategoryID:1
  },
  {
    ID:5,
    Name:"burger big mac",
    Quantity:40,
    Price:200,
    Img:"assets/t-mcdonalds-Big-Mac-1_1-3-product-tile-desktop.jpg",
    CategoryID:1
  },
  {
    ID:6,
    Name:"Lemon Tart",
    Quantity:3,
    Price:50,
    Img:"assets/l.jpg",
    CategoryID:4
  }, {
    ID:7,
    Name:"Chocolate Coffee Truffle",
    Quantity:30,
    Price:70,
    Img:"assets/chocolate-coffee-truffles-5-720x720.jpg",
    CategoryID:4
  },
  {
    ID:8,
    Name:"Spritz",
    Quantity:70,
    Price:70,
    Img:"assets/download.jpg",
    CategoryID:2
  },
  {
    ID:9,
    Name:"Martini",
    Quantity:60,
    Price:70,
    Img:"assets/Martini-003.jpg",
    CategoryID:2
  },
  {
    ID:10,
    Name:"Chicken Vindaloo",
    Quantity:40,
    Price:170,
    Img:"assets/Chicken Vindaloo.jpg",
    CategoryID:1
  }]
  }

  getAllProducts(): IProduct[] {
    return this.Productlist;
  }

  getProductsByCateogryID(catID: number): IProduct[] {
    if (catID == 0) {
      return this.Productlist;
    }
    else
      return this.Productlist.filter(prd => prd.CategoryID == catID);
  }

  getProductByID(prdID: number): IProduct|undefined
  {
    return this.Productlist.find(prd=>prd.ID==prdID);
  }

  addNewProduct(prd:IProduct):void
  {
    this.Productlist.push(prd);
  }

  removeProdect(proID:number):void{
    
    let RemovedProduct=this.Productlist.find(el=>el.ID==proID)
    const index=this.Productlist.indexOf(RemovedProduct!);
    this.Productlist.splice(index,1);
  }
  

   
}
