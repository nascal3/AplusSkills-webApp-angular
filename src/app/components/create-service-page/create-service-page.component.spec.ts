import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServicePageComponent } from './create-service-page.component';

describe('CreateServicePageComponent', () => {
  let component: CreateServicePageComponent;
  let fixture: ComponentFixture<CreateServicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServicePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
