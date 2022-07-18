import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input() target = '';

  @HostListener('click')

  clicked() {
    console.log(this.target)
    const targetElement = document.querySelector(this.target);
    console.log(targetElement)
    targetElement?.scrollIntoView({ behavior: 'smooth', inline: "start" });
  }

  constructor() {
  }

}
