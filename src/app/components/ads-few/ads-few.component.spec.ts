import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsFewComponent } from './ads-few.component';

describe('AdsFewComponent', () => {
  let component: AdsFewComponent;
  let fixture: ComponentFixture<AdsFewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsFewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsFewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
