import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-services-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="services-carousel">
      <div class="carousel-header">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">Specialized workforce and maintenance services in Saharanpur</p>
      </div>
      
      <div class="cards-container">
        <div *ngFor="let service of services" class="service-card">
          <div class="card-content">
            <div class="card-category">{{ service.category }}</div>
            <h3 class="card-title">{{ service.title }}</h3>
            <p class="card-description">{{ service.description }}</p>
          </div>
          <div class="card-image" [style.backgroundImage]="'url(' + service.imageUrl + ')'"></div>
        </div>
      </div>
      
      <div class="view-all">
        <a routerLink="/services" class="btn btn-primary">View All Services</a>
      </div>
    </div>
  `,
  styles: [`
    .services-carousel {
      padding: 4rem 0;
      background-color: #121212;
      overflow: hidden;
    }
    
    .carousel-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #ffd700;
      margin-bottom: 0.5rem;
    }
    
    .section-subtitle {
      font-size: 1.1rem;
      color: #f0f0f0;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .cards-container {
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding: 2rem 0;
      gap: 20px;
      -ms-overflow-style: none;
      scrollbar-width: none;
      margin: 0 20px;
    }
    
    .cards-container::-webkit-scrollbar {
      display: none;
    }
    
    .service-card {
      flex: 0 0 auto;
      width: 300px;
      height: 400px;
      background-color: #1a1a1a;
      border-radius: 16px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(50px);
    }
    
    .service-card.animate-in {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    }
    
    .card-content {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      z-index: 1;
    }
    
    .card-category {
      font-size: 0.8rem;
      font-weight: 600;
      color: #ffd700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
    }
    
    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 1rem;
    }
    
    .card-description {
      font-size: 0.9rem;
      color: #cccccc;
      flex: 1;
    }
    
    .card-image {
      height: 200px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    .view-all {
      text-align: center;
      margin-top: 2rem;
    }
    
    .btn-primary {
      background-color: #ffd700;
      color: #121212;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }
    
    .btn-primary:hover {
      background-color: #e6c200;
      transform: translateY(-2px);
    }
    
    @media (max-width: 1024px) {
      .service-card {
        width: 320px;
        height: 420px;
      }
      
      .section-title {
        font-size: 2.2rem;
      }
    }
    
    @media (max-width: 768px) {
      .service-card {
        width: 280px;
        height: 380px;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .card-title {
        font-size: 1.3rem;
      }
    }
    
    @media (max-width: 480px) {
      .service-card {
        width: 260px;
        height: 360px;
      }
      
      .section-title {
        font-size: 1.8rem;
      }
      
      .section-subtitle {
        font-size: 1rem;
      }
      
      .card-title {
        font-size: 1.2rem;
      }
      
      .card-description {
        font-size: 0.85rem;
      }
    }
  `]
})
export class ServicesCarouselComponent implements OnInit {
  @Input() services: ServiceItem[] = [];

  ngOnInit() {
    this.observeElements();
  }

  private observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const cards = document.querySelectorAll('.service-card');
      cards.forEach(card => observer.observe(card));
    }, 100);
  }
}