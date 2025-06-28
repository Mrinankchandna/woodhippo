import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resizable-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './resizable-navbar.component.html',
  styleUrls: ['./resizable-navbar.component.css']
})
export class ResizableNavbarComponent {
  @Input() navItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about-us' },
    { name: 'Services', link: '/services' },
    { name: 'Sectors', link: '/sectors' },
    { name: 'Careers', link: '/careers' },
    { name: 'CSR', link: '/csr' },
    { name: 'Media', link: '/media' },
    { name: 'Contact Us', link: '/contact-us' }
  ];
  
  isScrolled = false;
  isMobileMenuOpen = false;
  hoveredItem: number | null = null;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}