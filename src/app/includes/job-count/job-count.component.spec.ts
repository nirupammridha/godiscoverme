import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCountComponent } from './job-count.component';

describe('JobCountComponent', () => {
  let component: JobCountComponent;
  let fixture: ComponentFixture<JobCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
