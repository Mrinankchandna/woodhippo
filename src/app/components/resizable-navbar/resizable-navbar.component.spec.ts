import { TestBed } from '@angular/core/testing';
import { ResizableNavbarComponent } from './resizable-navbar.component';

describe('ResizableNavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResizableNavbarComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ResizableNavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
