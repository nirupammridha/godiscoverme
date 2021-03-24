import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplythisJobComponent } from './applythis-job.component';

describe('ApplythisJobComponent', () => {
  let component: ApplythisJobComponent;
  let fixture: ComponentFixture<ApplythisJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplythisJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplythisJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
