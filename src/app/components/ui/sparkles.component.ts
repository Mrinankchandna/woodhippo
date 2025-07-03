import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sparkles',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #sparklesCanvas [id]="id" [class]="className"></canvas>`,
  styles: [`
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
  `]
})
export class SparklesComponent implements OnInit, OnDestroy {
  @Input() id = 'sparkles';
  @Input() background = 'transparent';
  @Input() minSize = 0.6;
  @Input() maxSize = 1.4;
  @Input() particleDensity = 100;
  @Input() className = 'w-full h-full';
  @Input() particleColor = '#FFFFFF';
  
  @ViewChild('sparklesCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId!: number;
  private resizeListener?: () => void;

  ngOnInit() {
    setTimeout(() => {
      this.initCanvas();
      this.createParticles();
      this.animate();
    }, 100);
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  private initCanvas() {
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');
    if (!context) return;
    this.ctx = context;
    
    this.resizeListener = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth || window.innerWidth;
      canvas.height = parent.offsetHeight || window.innerHeight;
      canvas.style.width = canvas.width + 'px';
      canvas.style.height = canvas.height + 'px';
    };
    
    this.resizeListener();
    window.addEventListener('resize', this.resizeListener);
  }

  private createParticles() {
    const canvas = this.canvas.nativeElement;
    const numParticles = Math.max(50, Math.floor((canvas.width * canvas.height) / 8000 * this.particleDensity));
    
    for (let i = 0; i < numParticles; i++) {
      this.particles.push(new Particle(canvas.width, canvas.height, this.minSize, this.maxSize));
    }
  }

  private animate() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    
    this.particles.forEach(particle => {
      particle.update();
      particle.draw(this.ctx, this.particleColor);
    });
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeDirection: number;

  constructor(canvasWidth: number, canvasHeight: number, minSize: number, maxSize: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * (maxSize - minSize) + minSize;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = 0.3 + Math.random() * 0.7;
    this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity += this.fadeDirection * 0.01;
    
    if (this.opacity <= 0 || this.opacity >= 1) {
      this.fadeDirection *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}