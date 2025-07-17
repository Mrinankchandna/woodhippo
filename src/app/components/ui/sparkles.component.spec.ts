import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SparklesComponent } from './sparkles.component';

describe('SparklesComponent', () => {
  let component: SparklesComponent;
  let fixture: ComponentFixture<SparklesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparklesComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(SparklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default id as "sparkles"', () => {
    expect(component.id).toBe('sparkles');
  });

  it('should have default particleColor as "#FFFFFF"', () => {
    expect(component.particleColor).toBe('#FFFFFF');
  });
});
