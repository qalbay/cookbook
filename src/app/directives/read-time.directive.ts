import { Directive, Input, ElementRef, EventEmitter, Output } from '@angular/core';

export interface ReadTimeConfig {
  wordsPerMinute: number;
  pages:number
}

@Directive({
  selector: '[appReadTime]'
})
export class ReadTimeDirective {
  @Input() configuration: ReadTimeConfig = {
    wordsPerMinute: 200,
    pages:2,
  }

  @Output() readTimeCalculated = new EventEmitter<string>();

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const text = this.el.nativeElement.textContent;
    const time = this.calculateReadTime(text);
    const timeStr = this.createTimeString(time);
    this.readTimeCalculated.emit(timeStr);
  }

  calculateReadTime(text:string) {
    const wordsCount = text.split(" ").length;
    console.log(wordsCount)
    const minutes = wordsCount / this.configuration.wordsPerMinute;
    return Math.ceil(minutes);
  }

  createTimeString(timeInMinutes:any) {
    if (timeInMinutes === 1) {
      return '1 minute';
    } else if (timeInMinutes < 1) {
      return '< 1 minute';
    } else {
      return `${timeInMinutes} minutes`;
    }
  }
}
