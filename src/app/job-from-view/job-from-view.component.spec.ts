import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFromViewComponent } from './job-from-view.component';

describe('JobFromViewComponent', () => {
  let component: JobFromViewComponent;
  let fixture: ComponentFixture<JobFromViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFromViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFromViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
