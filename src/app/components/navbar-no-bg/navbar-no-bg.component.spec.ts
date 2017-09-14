import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNoBgComponent } from './navbar-no-bg.component';

describe('NavbarNoBgComponent', () => {
  let component: NavbarNoBgComponent;
  let fixture: ComponentFixture<NavbarNoBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarNoBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNoBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
