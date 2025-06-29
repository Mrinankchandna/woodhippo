import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesCarouselComponent } from '../../components/services-carousel/services-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    RouterLink,
    ServicesCarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services = [
    {
      category: 'Core Service',
      title: 'Factory Labour Supply',
      description: 'Specialized workforce for factories, manufacturing units, and industrial sites in Saharanpur.',
      imageUrl: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: 'Staffing',
      title: 'Petrol Pump Staff',
      description: 'Trained personnel for petrol pumps including attendants and support staff in Saharanpur.',
      imageUrl: 'https://images.unsplash.com/photo-1565665681743-6ff01c5181f3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: 'Maintenance',
      title: 'Cleaning Services',
      description: 'Professional cleaning for offices, factories, petrol pumps, and commercial buildings.',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: 'Support',
      title: 'General Maintenance',
      description: 'Skilled maintenance staff for repairs, upkeep, and facility management services.',
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop'
    },
    {
      category: 'Specialized',
      title: 'Warehouse Staff',
      description: 'Experienced personnel for inventory management, loading/unloading, and warehouse operations.',
      imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: 'Events',
      title: 'Event Staff',
      description: 'Temporary staff for events, exhibitions, and special occasions in Saharanpur.',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  ngOnInit() {
    console.log('Home component services:', this.services);
  }
}