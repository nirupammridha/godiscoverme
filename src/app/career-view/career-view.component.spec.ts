import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerViewComponent } from './career-view.component';

describe('CareerViewComponent', () => {
  let component: CareerViewComponent;
  let fixture: ComponentFixture<CareerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
