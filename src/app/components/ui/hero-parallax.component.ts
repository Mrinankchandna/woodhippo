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
  private positions = [
    { x: 5, y: 20 }, { x: 75, y: 20 }, { x: 5, y: 45 }, { x: 75, y: 45 },
    { x: 5, y: 70 }, { x: 75, y: 70 }, { x: 40, y: 10 }, { x: 40, y: 85 }
  ];

  getRandomPosition(index: number, axis: 'x' | 'y'): number {
    return this.positions[index % this.positions.length][axis];
  }

  getSparklePosition(index: number, axis: 'x' | 'y'): number {
    const sparklePositions = [
      { x: 10, y: 15 }, { x: 25, y: 25 }, { x: 40, y: 10 }, { x: 60, y: 30 }, { x: 75, y: 20 },
      { x: 90, y: 40 }, { x: 15, y: 50 }, { x: 35, y: 60 }, { x: 55, y: 45 }, { x: 80, y: 65 },
      { x: 5, y: 75 }, { x: 30, y: 85 }, { x: 50, y: 70 }, { x: 70, y: 90 }, { x: 85, y: 80 },
      { x: 20, y: 35 }, { x: 45, y: 55 }, { x: 65, y: 25 }, { x: 12, y: 65 }, { x: 88, y: 15 },
      { x: 33, y: 40 }, { x: 58, y: 80 }, { x: 77, y: 35 }, { x: 8, y: 90 }, { x: 92, y: 60 },
      { x: 28, y: 20 }, { x: 48, y: 75 }, { x: 68, y: 50 }, { x: 18, y: 85 }, { x: 82, y: 45 },
      { x: 14, y: 12 }, { x: 38, y: 28 }, { x: 62, y: 18 }, { x: 86, y: 32 }, { x: 22, y: 58 },
      { x: 46, y: 38 }, { x: 74, y: 62 }, { x: 6, y: 48 }, { x: 94, y: 78 }, { x: 26, y: 92 },
      { x: 52, y: 8 }, { x: 78, y: 52 }, { x: 16, y: 72 }, { x: 42, y: 88 }, { x: 66, y: 42 },
      { x: 84, y: 28 }, { x: 36, y: 68 }, { x: 58, y: 22 }, { x: 72, y: 78 }, { x: 24, y: 48 }
    ];
    return sparklePositions[index % sparklePositions.length][axis];
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }

  setActivePreview(industry: string) {
    this.activePreview = industry;
  }

  ngOnInit() {
    // Throttle scroll events for better performance
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

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private handleScroll() {
    if (!this.parallaxContainer?.nativeElement) return;
    
    const scrollY = window.scrollY;
    const cards = this.parallaxContainer.nativeElement.querySelectorAll('.floating-card');
    
    cards.forEach((card: HTMLElement, index: number) => {
      const speed = 0.3 + (index % 3) * 0.2;
      const xDirection = index % 3 === 0 ? 1 : index % 3 === 1 ? -1 : 0;
      const yDirection = index % 2 === 0 ? -1 : 1;
      
      const translateX = scrollY * speed * xDirection * 0.3;
      const translateY = scrollY * speed * yDirection * 0.2;
      
      card.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
  }
}