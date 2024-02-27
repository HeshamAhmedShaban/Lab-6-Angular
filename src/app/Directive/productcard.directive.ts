import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductcard]',
  standalone: true
})
export class ProductcardDirective {

  constructor(private domElementDiv:ElementRef) {
      this.domElementDiv.nativeElement.style.borderRadius = '30px';
  }

  private borderShadowChabge(value:string){
    this.domElementDiv.nativeElement.style.boxShadow =value;
    }

  @HostListener('mouseenter') onMouseEnter() {
    this.borderShadowChabge('5px 5px 20px 20px rgba(0, 0, 0, 0.3)')
  }

  @HostListener('mouseleave') onMouseLeave() {
this.borderShadowChabge('0px 0px 4px 4px rgba(0, 0, 0, 0.2)')
  }

}
