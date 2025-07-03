import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  testimonials = [
    {
      quote: "WoodHippo transformed our manufacturing operations with skilled workers who understand industrial safety and quality standards.",
      name: "Rajesh Kumar",
      designation: "Production Manager, Saharanpur Industries",
      src: "assets/woodhippo  photoes/IMG-20250703-WA0017.jpg"
    },
    {
      quote: "Their fuel station staff are well-trained, punctual, and provide excellent customer service. Highly professional team.",
      name: "Priya Sharma",
      designation: "Petrol Pump Owner, Highway Plaza",
      src: "assets/woodhippo  photoes/IMG-20250703-WA0018.jpg"
    },
    {
      quote: "Exceptional cleaning services that maintain our office standards. The team is reliable and thorough in their work.",
      name: "Amit Verma",
      designation: "Facility Head, Tech Solutions Ltd",
      src: "assets/woodhippo  photoes/IMG-20250703-WA0020.jpg"
    },
    {
      quote: "WoodHippo's maintenance staff solved our equipment issues efficiently. Their technical expertise is impressive.",
      name: "Sunita Gupta",
      designation: "Operations Director, Manufacturing Hub",
      src: "assets/woodhippo  photoes/IMG-20250703-WA0025.jpg"
    },
    {
      quote: "Outstanding logistics support for our warehouse operations. They understand the demands of supply chain management.",
      name: "Vikram Singh",
      designation: "Warehouse Manager, Distribution Center",
      src: "assets/woodhippo  photoes/IMG-20250703-WA0026.jpg"
    }
  ];

  currentIndex = 0;
  autoplay = true;
  private intervalId?: number;

  ngOnInit() {
    if (this.autoplay) {
      this.intervalId = window.setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      }, 5000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }
}