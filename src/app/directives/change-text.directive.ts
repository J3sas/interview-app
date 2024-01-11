import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener , ChangeDetectorRef, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective implements OnInit {
  
 
  constructor(private el: ElementRef, private renderer: Renderer2,  private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
  }

  @HostListener('click')
  public updateText(): void {
    this.updateElementText(this.generateRandomWords());
  }

  private generateRandomWords(): string {
    // Replace this logic with your own to generate random words
    const words = ['Angular', 'Directive', 'Random', 'Words', 'Change', 'Text'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  private updateElementText(randomWords: string): void {
    // Update the element's text content using Renderer2
    this.renderer.setProperty(this.el.nativeElement, 'innerText', randomWords);
  }
}
