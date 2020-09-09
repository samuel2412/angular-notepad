import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appElevation]'
})
export class ElevationDirective {
  @HostBinding('class.shadow-lg') isMouseover:boolean = false;
  
  @HostListener('mouseover') onMouseover () {
    this.isMouseover = true
  }
  @HostListener('mouseout') onMouseout () {
    this.isMouseover = false
  }
}
