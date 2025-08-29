import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  searchTerm = '';
  activeCategory = 'All Services';

  services = [
    { title: 'Office Staffing', category: 'Professional', description: 'Professional administrative staff, receptionists, data entry operators, and support personnel for corporate offices.', features: ['Professional', 'Verified'], emoji: '🏢' },
    { title: 'Hospital Workforce', category: 'Healthcare', description: 'Trained hospital support staff, patient care assistants, cleaning personnel, and administrative support.', features: ['Healthcare Trained', 'Compassionate'], emoji: '🏥' },
    { title: 'Restaurant Staff', category: 'Retail', description: 'Experienced waiters, kitchen helpers, cleaning staff, and service personnel for food establishments.', features: ['Food Safety', 'Customer Service'], emoji: '🍽️' },
    { title: 'Mall & Retail Support', category: 'Retail', description: 'Customer service representatives, security personnel, cleaning staff, and maintenance workers for retail outlets.', features: ['Customer Focus', 'Retail Experience'], emoji: '🛍️' },
    { title: 'Factory Labor', category: 'Industrial', description: 'Skilled and semi-skilled workers for manufacturing units, production lines, and industrial operations.', features: ['Safety Trained', 'Quality Focused'], emoji: '🏭' },
    { title: 'Fuel Station Staff', category: 'Industrial', description: 'Trained attendants, cashiers, and supervisors for petrol pumps and service stations.', features: ['Customer Service', 'Safety Certified'], emoji: '⛽' },
    { title: 'Professional Cleaning', category: 'Facility Management', description: 'Comprehensive cleaning services for offices, factories, and commercial establishments.', features: ['Eco-Friendly', 'Flexible Schedule'], emoji: '🧹' },
    { title: 'Maintenance & Repair', category: 'Technical', description: 'Skilled technicians for equipment maintenance, electrical work, and facility upkeep.', features: ['24/7 Support', 'Certified Technicians'], emoji: '🔧' },
    { title: 'Warehouse Operations', category: 'Logistics', description: 'Inventory management, loading/unloading teams, and logistics coordination staff.', features: ['Inventory Control', 'Safety Protocols'], emoji: '📦' },
    { title: 'Event & Hospitality', category: 'Professional', description: 'Professional staff for events, customer service, and hospitality support.', features: ['Event Management', 'Customer Focus'], emoji: '🎉' }
  ];

  categories = ['All Services', 'Industrial', 'Retail', 'Facility Management', 'Technical', 'Logistics', 'Professional', 'Healthcare'];

  get filteredServices() {
    return this.services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesCategory = this.activeCategory === 'All Services' || service.category === this.activeCategory;

      return matchesSearch && matchesCategory;
    });
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }
}
