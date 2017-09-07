import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompanyPageComponent } from './view-company-page.component';

describe('ViewCompanyPageComponent', () => {
  let component: ViewCompanyPageComponent;
  let fixture: ComponentFixture<ViewCompanyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCompanyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
