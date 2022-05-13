import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {

  private elemref:ElementRef;
  constructor(elemref:ElementRef) {
    this.elemref=elemref;
    elemref.nativeElement.style.border="2px blue solid";
    elemref.nativeElement.style.boxshadow="10px 10px 5px lightblue";

    

   }

   @HostListener("mouseenter") Onmouseenter(){
    this.elemref.nativeElement.style.border="5px red solid";

   }

   @HostListener("mouseout") Onmouseleave(){

    this.elemref.nativeElement.style.border="1px blue solid";

  }

}
