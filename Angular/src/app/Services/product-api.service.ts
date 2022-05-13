import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../ViewModels/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  constructor(private httpclient:HttpClient) { }
gtallpro():Observable<IProduct[]>
{
 return this.httpclient.get<IProduct[]>('http://localhost:3000/Products')

}
getallbycat(catid:number):Observable<IProduct[]>
{

  return this.httpclient.get<IProduct[]>
  (`http://localhost:3000/Products?cateogryid=${catid}`)
}
getprobyid(proid:number)
{

}
addpro(newpro:IProduct)
{

}
updata(proid:number,newpro:IProduct)
{

}
deletpro(proid:number)
{

}

}
