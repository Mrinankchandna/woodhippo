import { TestBed } from '@angular/core/testing';
import { HeroParallaxComponent } from './hero-parallax.component';

describe('HeroParallaxComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroParallaxComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeroParallaxComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
