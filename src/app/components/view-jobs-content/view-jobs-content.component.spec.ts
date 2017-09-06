import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobsContentComponent } from './view-jobs-content.component';

describe('ViewJobsContentComponent', () => {
  let component: ViewJobsContentComponent;
  let fixture: ComponentFixture<ViewJobsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
