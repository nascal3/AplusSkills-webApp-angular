import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageadComponent } from './large-imagead.component';

describe('LargeImageadComponent', () => {
  let component: LargeImageadComponent;
  let fixture: ComponentFixture<LargeImageadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeImageadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeImageadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
