import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  slides = [
    { title: "Industrial Services", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0017.jpg" },
    { title: "Fuel Station Staff", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0018.jpg" },
    { title: "Commercial Cleaning", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0019.jpg" },
    { title: "Office Support", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0020.jpg" },
    { title: "Manufacturing", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0021.jpg" },
    { title: "Logistics Support", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0022.jpg" },
    { title: "Quality Control", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0023.jpg" },
    { title: "Technical Services", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0024.jpg" },
    { title: "Customer Service", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0025.jpg" },
    { title: "Maintenance", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0026.jpg" },
    { title: "Security Services", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0027.jpg" },
    { title: "Event Management", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0028.jpg" },
    { title: "Hospitality", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0029.jpg" },
    { title: "Retail Support", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0030.jpg" },
    { title: "Healthcare Support", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0031.jpg" },
    { title: "Construction", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0032.jpg" },
    { title: "Transportation", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0033.jpg" },
    { title: "Warehouse Operations", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0034.jpg" },
    { title: "Food Service", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0035.jpg" },
    { title: "Administrative", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0036.jpg" },
    { title: "Sales Support", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0037.jpg" },
    { title: "Training Services", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0038.jpg" },
    { title: "Consulting", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0039.jpg" },
    { title: "Project Management", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0040.jpg" },
    { title: "Operations", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0041.jpg" },
    { title: "Facility Management", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0042.jpg" },
    { title: "Supply Chain", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0043.jpg" },
    { title: "Quality Assurance", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0044.jpg" },
    { title: "Business Solutions", button: "Learn More", src: "assets/woodhippo  photoes/IMG-20250703-WA0045.jpg" }
  ];

  current = 0;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {}

  ngOnDestroy() {}

  handlePreviousClick() {
    const previous = this.current - 1;
    this.current = previous < 0 ? this.slides.length - 1 : previous;
  }

  handleNextClick() {
    const next = this.current + 1;
    this.current = next === this.slides.length ? 0 : next;
  }

  handleSlideClick(index: number) {
    if (this.current !== index) {
      this.current = index;
    }
  }

  onMouseMove(event: MouseEvent, slideElement: HTMLElement) {
    const r = slideElement.getBoundingClientRect();
    const x = event.clientX - (r.left + Math.floor(r.width / 2));
    const y = event.clientY - (r.top + Math.floor(r.height / 2));
    slideElement.style.setProperty('--x', `${x}px`);
    slideElement.style.setProperty('--y', `${y}px`);
  }

  onMouseLeave(slideElement: HTMLElement) {
    slideElement.style.setProperty('--x', '0px');
    slideElement.style.setProperty('--y', '0px');
  }
}
