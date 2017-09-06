import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWithBgComponent } from './navbar-with-bg.component';

describe('NavbarWithBgComponent', () => {
  let component: NavbarWithBgComponent;
  let fixture: ComponentFixture<NavbarWithBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarWithBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarWithBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
