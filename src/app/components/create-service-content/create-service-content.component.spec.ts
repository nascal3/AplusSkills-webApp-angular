import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceContentComponent } from './create-service-content.component';

describe('CreateServiceContentComponent', () => {
  let component: CreateServiceContentComponent;
  let fixture: ComponentFixture<CreateServiceContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServiceContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
