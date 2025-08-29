import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

@Component({
  selector: 'app-hero-parallax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-parallax.component.html',
  styleUrls: ['./hero-parallax.component.css']
})
export class HeroParallaxComponent implements OnInit, OnDestroy {
  activePreview = 'office';
  @Input() products: Product[] = [];
  @ViewChild('parallaxContainer', { static: true }) parallaxContainer!: ElementRef;

  private scrollListener?: () => void;
  private cachedCards: HTMLElement[] = [];
  private trianglePositions: { x: number; y: number }[] = [];

  getTriangleSparklePosition(index: number, axis: 'x' | 'y'): number {
    if (this.trianglePositions.length === 0) {
      this.initializeTrianglePositions();
    }
    return this.trianglePositions[index % this.trianglePositions.length][axis];
  }

  private initializeTrianglePositions() {
    // Base line (underline effect)
    for (let i = 0; i < 15; i++) {
      this.trianglePositions.push({ x: 10 + (i * 5), y: 65 });
    }
    
    // Triangle formation
    for (let row = 1; row <= 4; row++) {
      const pointsInRow = 15 - (row * 2);
      const startX = 10 + (row * 5);
      for (let i = 0; i < pointsInRow; i++) {
        this.trianglePositions.push({ 
          x: startX + (i * 5), 
          y: 65 + (row * 8) 
        });
      }
    }
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }

  setActivePreview(industry: string) {
    this.activePreview = industry;
  }

  ngOnInit() {
    this.initializeTrianglePositions();
    setTimeout(() => this.cacheElements(), 100);
    
    let ticking = false;
    this.scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  private cacheElements() {
    if (this.parallaxContainer?.nativeElement) {
      this.cachedCards = Array.from(this.parallaxContainer.nativeElement.querySelectorAll('.floating-card'));
    }
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private handleScroll() {
    if (this.cachedCards.length === 0) return;
    
    const scrollY = window.scrollY;
    
    this.cachedCards.forEach((card: HTMLElement, index: number) => {
      const speed = 0.3 + (index % 3) * 0.2;
      const xDirection = index % 3 === 0 ? 1 : index % 3 === 1 ? -1 : 0;
      const yDirection = index % 2 === 0 ? -1 : 1;
      
      const translateX = scrollY * speed * xDirection * 0.3;
      const translateY = scrollY * speed * yDirection * 0.2;
      
      card.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    });
  }
}
