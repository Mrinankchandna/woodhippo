import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroParallaxComponent } from '../ui/hero-parallax.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, HeroParallaxComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // Optimized image loading with error handling
  private readonly imagePath = 'assets/woodhippo  photoes/';
  
  products = [
    { title: 'Industrial Labour Supply', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0032.jpg' },
    { title: 'Fuel Station Attendants', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0018.jpg' },
    { title: 'Commercial Cleaning', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0019.jpg' },
    { title: 'Facility Maintenance', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0020.jpg' },
    { title: 'Logistics & Warehousing', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0021.jpg' },
    { title: 'Event Management Staff', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0022.jpg' },
    { title: 'Quality Assurance', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0023.jpg' },
    { title: 'Skills Development', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0024.jpg' },
    { title: 'Customer Service', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0025.jpg' },
    { title: 'Technical Support', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0026.jpg' },
    { title: 'Project Management', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0027.jpg' },
    { title: 'Operations Excellence', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0028.jpg' },
    { title: 'Service Delivery', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0029.jpg' },
    { title: 'Team Leadership', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0030.jpg' },
    { title: 'Business Solutions', link: '/services', thumbnail: this.imagePath + 'IMG-20250703-WA0031.jpg' }
  ];
}