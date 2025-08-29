import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesCarouselComponent } from '../../components/services-carousel/services-carousel.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroComponent,
    ServicesCarouselComponent,
    GalleryComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services = [
    {
      category: 'Corporate',
      title: 'Office Staffing',
      description: 'Professional administrative staff, receptionists, data entry operators, and support personnel for corporate offices.',
      imageUrl: 'assets/woodhippo  photoes/IMG-20250703-WA0017.jpg'
    },
    {
      category: 'Healthcare',
      title: 'Hospital Workforce',
      description: 'Trained hospital support staff, patient care assistants, cleaning personnel, and administrative support for healthcare facilities.',
      imageUrl: 'assets/woodhippo  photoes/IMG-20250703-WA0018.jpg'
    },
    {
      category: 'Hospitality',
      title: 'Restaurant Staff',
      description: 'Experienced waiters, kitchen helpers, cleaning staff, and service personnel for restaurants and food establishments.',
      imageUrl: 'assets/woodhippo  photoes/IMG-20250703-WA0020.jpg'
    },
    {
      category: 'Retail',
      title: 'Mall & Retail Support',
      description: 'Customer service representatives, security personnel, cleaning staff, and maintenance workers for shopping malls and retail outlets.',
      imageUrl: 'assets/woodhippo  photoes/IMG-20250703-WA0025.jpg'
    },
    {
      category: 'Industrial',
      title: 'Factory Labor',
      description: 'Skilled and semi-skilled workers for manufacturing units, production lines, quality control, and industrial operations.',
      imageUrl: 'assets/woodhippo  photoes/IMG-20250703-WA0026.jpg'
    },
    {
      category: 'General',
      title: 'Contract Services',
      description: 'Comprehensive contractor services including project-based staffing, temporary workforce, and specialized manpower solutions.',
      imageUrl: 'assets/woodhippo  photoes/IMG-20250703-WA0028.jpg'
    }
  ];

  ngOnInit() {
    // Component initialized
  }
}
