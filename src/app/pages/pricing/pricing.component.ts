import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="pricing-page">
      <div class="hero-section">
        <div class="container">
          <h1>Transparent Pricing</h1>
          <p>No hidden fees. Clear rates for all workforce solutions.</p>
        </div>
      </div>

      <div class="container">
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="card-header">
              <h3>Office Staffing</h3>
              <div class="price">₹15,000-25,000<span>/month</span></div>
            </div>
            <ul class="features">
              <li>✓ Administrative staff</li>
              <li>✓ Receptionists</li>
              <li>✓ Data entry operators</li>
              <li>✓ Background verification</li>
            </ul>
            <a routerLink="/contact-us" class="btn btn-primary">Get Quote</a>
          </div>

          <div class="pricing-card featured">
            <div class="popular-badge">Most Popular</div>
            <div class="card-header">
              <h3>Factory Labor</h3>
              <div class="price">₹12,000-20,000<span>/month</span></div>
            </div>
            <ul class="features">
              <li>✓ Skilled workers</li>
              <li>✓ Production line staff</li>
              <li>✓ Quality control</li>
              <li>✓ Safety training included</li>
            </ul>
            <a routerLink="/contact-us" class="btn btn-primary">Get Quote</a>
          </div>

          <div class="pricing-card">
            <div class="card-header">
              <h3>Custom Solutions</h3>
              <div class="price">Contact<span>/quote</span></div>
            </div>
            <ul class="features">
              <li>✓ Bulk hiring</li>
              <li>✓ Project-based</li>
              <li>✓ Multiple locations</li>
              <li>✓ Dedicated support</li>
            </ul>
            <a routerLink="/contact-us" class="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pricing-page { color: #f0f0f0; }
    .hero-section { background: linear-gradient(135deg, #0a0a0a 0%, #121212 50%, #1a1a1a 100%); padding: 8rem 0 4rem; text-align: center; }
    .hero-section h1 { font-size: 3rem; color: #ffd700; margin-bottom: 1rem; font-weight: 800; }
    .hero-section p { font-size: 1.2rem; color: #cccccc; }
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 4rem 0; }
    .pricing-card { background: linear-gradient(145deg, #1a1a1a, #0f0f0f); border: 1px solid rgba(255, 215, 0, 0.1); border-radius: 16px; padding: 2rem; position: relative; transition: all 0.3s ease; }
    .pricing-card:hover { transform: translateY(-8px); border-color: rgba(255, 215, 0, 0.3); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); }
    .pricing-card.featured { border-color: #ffd700; transform: scale(1.05); }
    .popular-badge { position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: #ffd700; color: #121212; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; }
    .card-header h3 { font-size: 1.5rem; color: #ffd700; margin-bottom: 1rem; }
    .price { font-size: 2rem; font-weight: 700; color: #ffffff; margin-bottom: 2rem; }
    .price span { font-size: 1rem; color: #cccccc; font-weight: 400; }
    .features { list-style: none; padding: 0; margin-bottom: 2rem; }
    .features li { padding: 0.5rem 0; color: #cccccc; }
  `]
})
export class PricingComponent {}