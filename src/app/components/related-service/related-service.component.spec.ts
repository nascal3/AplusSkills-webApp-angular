import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedServiceComponent } from './related-service.component';

describe('RelatedServiceComponent', () => {
  let component: RelatedServiceComponent;
  let fixture: ComponentFixture<RelatedServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
