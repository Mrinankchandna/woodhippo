import { ElementRef, Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  @Input() excludeElements: ElementRef[] = [];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    const clickedExcluded = this.excludeElements.some(el => el.nativeElement.contains(target));
    
    if (!clickedInside && !clickedExcluded) {
      this.clickOutside.emit();
    }
  }
}