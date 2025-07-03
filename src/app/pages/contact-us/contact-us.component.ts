import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };
  
  formSubmitted = false;
  formError = false;
  
  submitForm() {
    // Reset error state
    this.formError = false;
    
    // Trim whitespace and validate
    const name = this.contactForm.name.trim();
    const email = this.contactForm.email.trim();
    const message = this.contactForm.message.trim();
    
    if (!name || !email || !message) {
      this.formError = true;
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.formError = true;
      return;
    }
    
    this.formSubmitted = true;
    // In a real app, you would send the form data to a backend service here
    console.log('Form submitted:', { name, email, message });
  }
}