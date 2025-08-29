import { Component, Input, ElementRef, ViewChild, AfterViewInit, HostListener, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface ServiceCard {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-apple-cards-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './apple-cards-carousel.component.html',
  styleUrls: ['./apple-cards-carousel.component.css']
})
export class AppleCardsCarouselComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() services: ServiceCard[] = [];
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  
  activeCardIndex: number = 0;
  isDragging: boolean = false;
  startX: number = 0;
  scrollLeft: number = 0;
  private readonly GAP = 20;
  private eventListeners: (() => void)[] = [];
  
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.carouselContainer) {
        this.initCarousel();
      }
    }, 0);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['services'] && this.carouselContainer) {
      setTimeout(() => this.initCarousel(), 0);
    }
  }
  
  initCarousel() {
    if (!this.carouselContainer || !this.carouselContainer.nativeElement) return;
    
    // Clean up existing listeners
    this.cleanupEventListeners();
    
    const container = this.carouselContainer.nativeElement;
    const mouseDownHandler = (e: MouseEvent) => this.startDragging(e);
    const mouseMoveHandler = (e: MouseEvent) => this.drag(e);
    const mouseUpHandler = () => this.stopDragging();
    const mouseLeaveHandler = () => this.stopDragging();
    
    container.addEventListener('mousedown', mouseDownHandler);
    container.addEventListener('mousemove', mouseMoveHandler);
    container.addEventListener('mouseup', mouseUpHandler);
    container.addEventListener('mouseleave', mouseLeaveHandler);
    
    // Store cleanup functions
    this.eventListeners.push(
      () => container.removeEventListener('mousedown', mouseDownHandler),
      () => container.removeEventListener('mousemove', mouseMoveHandler),
      () => container.removeEventListener('mouseup', mouseUpHandler),
      () => container.removeEventListener('mouseleave', mouseLeaveHandler)
    );
    
    // Add touch support
    const touchStartHandler = (e: TouchEvent) => {
      const touch = e.touches[0];
      this.startDragging({ pageX: touch.pageX });
    };
    
    const touchMoveHandler = (e: TouchEvent) => {
      const touch = e.touches[0];
      this.drag({ pageX: touch.pageX, preventDefault: () => e.preventDefault() });
    };
    
    const touchEndHandler = () => this.stopDragging();
    
    container.addEventListener('touchstart', touchStartHandler);
    container.addEventListener('touchmove', touchMoveHandler);
    container.addEventListener('touchend', touchEndHandler);
    
    this.eventListeners.push(
      () => container.removeEventListener('touchstart', touchStartHandler),
      () => container.removeEventListener('touchmove', touchMoveHandler),
      () => container.removeEventListener('touchend', touchEndHandler)
    );
  }
  
  private cleanupEventListeners() {
    this.eventListeners.forEach(cleanup => cleanup());
    this.eventListeners = [];
  }
  
  ngOnDestroy() {
    this.cleanupEventListeners();
  }
  
  startDragging(e: MouseEvent | { pageX: number }) {
    if (!this.carouselContainer?.nativeElement) return;
    this.isDragging = true;
    this.startX = e.pageX - this.carouselContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.carouselContainer.nativeElement.scrollLeft;
  }
  
  drag(e: MouseEvent | { pageX: number; preventDefault?: () => void }) {
    if (!this.isDragging || !this.carouselContainer?.nativeElement) return;
    e.preventDefault?.();
    const x = e.pageX - this.carouselContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.carouselContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
  
  stopDragging() {
    this.isDragging = false;
  }
  
  scrollToCard(index: number) {
    if (!this.carouselContainer || !this.carouselContainer.nativeElement) return;
    
    this.activeCardIndex = index;
    const cards = this.carouselContainer.nativeElement.querySelectorAll('.service-card');
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth;
    this.carouselContainer.nativeElement.scrollLeft = index * (cardWidth + this.GAP);
  }
  
  @HostListener('window:resize')
  onResize() {
    this.scrollToCard(this.activeCardIndex);
  }
}