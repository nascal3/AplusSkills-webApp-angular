import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingStarsIconsComponent } from './rating-stars-icons.component';

describe('RatingStarsIconsComponent', () => {
  let component: RatingStarsIconsComponent;
  let fixture: ComponentFixture<RatingStarsIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingStarsIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingStarsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
