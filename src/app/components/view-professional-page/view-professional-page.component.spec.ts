import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfessionalPageComponent } from './view-professional-page.component';

describe('ViewProfessionalPageComponent', () => {
  let component: ViewProfessionalPageComponent;
  let fixture: ComponentFixture<ViewProfessionalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfessionalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfessionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
