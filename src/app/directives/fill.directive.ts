import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[FillWithCero]',
})
export class FillWithCeroDirective  {
  constructor(private el: ElementRef) {}

  @Input() FillWithCero: number

  @HostListener('input', ['$event.target']) onKeyUp(event) {
    const e = event
    const aux = Number(e.value)
    
    if (aux) {
      const number = aux.toString().padStart(this.FillWithCero, '0')
      e.value = number.toString()
    }
  }

  // @HostListener('input',['$event.target'])
  // onInput(textArea: HTMLTextAreaElement): void {
  //   console.log("tengo:", textArea);
  // }

}
