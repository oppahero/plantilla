import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[FillWithCero]',
})
export class FillWithCero  {
  constructor(private el: ElementRef) {}

  @Input() FillWithCero: number;

  @HostListener('input', ['$event.target']) onKeyUp(event) {
    let e = event;
    let aux = Number(e.value);
    
    if (aux) {
      let number = aux.toString().padStart(this.FillWithCero, '0');
      e.value = number.toString();
    }
  }

  // @HostListener('input',['$event.target'])
  // onInput(textArea: HTMLTextAreaElement): void {
  //   console.log("tengo:", textArea);
  // }

}
