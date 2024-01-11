import { Directive, HostListener, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appValidations]'
})
export class ValidationsDirective {
  
  @Input() selectedColumn: string = '';
  constructor(private el: ElementRef) {}
  @HostListener('input', ['$event']) onInput(event: Event): void {
    const inputValue = this.el.nativeElement.value;
    let sanitizedValue = '';

    if (this.selectedColumn === 'id') {
      // Allow only numbers for 'id' column
      sanitizedValue = inputValue.replace(/[^0-9]/g, '');
    } else {
      // Allow only letters for other columns
      sanitizedValue = inputValue.replace(/[^a-zA-Z]/g, '');
    }

    this.el.nativeElement.value = sanitizedValue;
  }

}
