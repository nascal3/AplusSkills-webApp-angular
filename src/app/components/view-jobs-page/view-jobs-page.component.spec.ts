import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobsPageComponent } from './view-jobs-page.component';

describe('ViewJobsPageComponent', () => {
  let component: ViewJobsPageComponent;
  let fixture: ComponentFixture<ViewJobsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
