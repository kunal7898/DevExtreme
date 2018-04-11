import { Directive,HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFormat]'
})
export class FormatDirective {
 @Input('format') Format:string;
  constructor(private eleRef:ElementRef) { }

  @HostListener('blur') onblur(){
   let value :string=  this.eleRef.nativeElement.value;
   if(this.Format=="upper")
    this.eleRef.nativeElement.value =  value.toUpperCase();
  }


}
