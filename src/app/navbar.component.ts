import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about-us' },
    { label: 'Contact', href: '/contact-us' },
  ];
  
  primaryCTA = { label: 'Get Started', href: '/contact-us' };
  secondaryCTA = { label: 'Call Now', href: 'tel:9411080804' };

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
