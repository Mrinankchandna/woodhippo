import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };
  
  formSubmitted = false;
  formError = false;
  errorMessage = '';
  
  submitForm() {
    // Reset error state
    this.formError = false;
    
    // Trim whitespace and validate
    const name = this.contactForm.name.trim();
    const email = this.contactForm.email.trim();
    const message = this.contactForm.message.trim();
    
    if (!name || !email || !message) {
      this.formError = true;
      this.errorMessage = 'All fields are required.';
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.formError = true;
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }
    
    this.formSubmitted = true;
    // In a real app, you would send the form data to a backend service here
  }
}