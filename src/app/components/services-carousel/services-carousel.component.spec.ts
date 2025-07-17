import { TestBed } from '@angular/core/testing';
import { ServicesCarouselComponent } from './services-carousel.component';

describe('ServicesCarouselComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCarouselComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ServicesCarouselComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
