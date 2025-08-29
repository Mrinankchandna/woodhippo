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
    { name: 'How It Works', link: '/how-it-works' },
    { name: 'Contact Us', link: '/contact-us' }
  ];
  
  isScrolled = false;
  isMobileMenuOpen = false;
  hoveredItem: number | null = null;
  
  private scrollTimeout?: number;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.scrollTimeout) return;
    this.scrollTimeout = window.setTimeout(() => {
      this.isScrolled = window.scrollY > 20;
      this.scrollTimeout = undefined;
    }, 16);
  }
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}