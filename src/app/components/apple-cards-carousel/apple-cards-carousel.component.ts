import { Component, Input, ElementRef, ViewChild, AfterViewInit, HostListener, OnChanges, SimpleChanges } from '@angular/core';
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
export class AppleCardsCarouselComponent implements AfterViewInit, OnChanges {
  @Input() services: ServiceCard[] = [];
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  
  activeCardIndex: number = 0;
  isDragging = false;
  startX = 0;
  scrollLeft = 0;
  
  ngAfterViewInit() {
    console.log('Services in carousel:', this.services);
    setTimeout(() => {
      if (this.carouselContainer) {
        this.initCarousel();
      }
    }, 0);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('Services changed:', this.services);
    if (changes['services'] && this.carouselContainer) {
      setTimeout(() => this.initCarousel(), 0);
    }
  }
  
  initCarousel() {
    if (!this.carouselContainer || !this.carouselContainer.nativeElement) return;
    
    const container = this.carouselContainer.nativeElement;
    container.addEventListener('mousedown', (e: MouseEvent) => this.startDragging(e));
    container.addEventListener('mousemove', (e: MouseEvent) => this.drag(e));
    container.addEventListener('mouseup', () => this.stopDragging());
    container.addEventListener('mouseleave', () => this.stopDragging());
    
    // Add touch support
    container.addEventListener('touchstart', (e: TouchEvent) => {
      const touch = e.touches[0];
      this.startDragging({ pageX: touch.pageX } as MouseEvent);
    });
    
    container.addEventListener('touchmove', (e: TouchEvent) => {
      const touch = e.touches[0];
      this.drag({ pageX: touch.pageX, preventDefault: () => e.preventDefault() } as any);
    });
    
    container.addEventListener('touchend', () => this.stopDragging());
  }
  
  startDragging(e: MouseEvent) {
    this.isDragging = true;
    this.startX = e.pageX - this.carouselContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.carouselContainer.nativeElement.scrollLeft;
  }
  
  drag(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
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
    const gap = 20; // Same as the gap in CSS
    this.carouselContainer.nativeElement.scrollLeft = index * (cardWidth + gap);
  }
  
  @HostListener('window:resize')
  onResize() {
    this.scrollToCard(this.activeCardIndex);
  }
}