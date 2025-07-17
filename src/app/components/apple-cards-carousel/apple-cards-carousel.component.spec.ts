import { TestBed } from '@angular/core/testing';
import { AppleCardsCarouselComponent } from './apple-cards-carousel.component';

describe('AppleCardsCarouselComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleCardsCarouselComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AppleCardsCarouselComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
