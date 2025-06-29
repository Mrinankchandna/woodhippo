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
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.formError = true;
      return;
    }
    
    this.formSubmitted = true;
    this.formError = false;
    // In a real app, you would send the form data to a backend service here
    console.log('Form submitted:', this.contactForm);
  }
}