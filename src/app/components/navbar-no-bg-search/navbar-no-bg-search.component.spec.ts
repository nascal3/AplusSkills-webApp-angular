import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNoBgSearchComponent } from './navbar-no-bg-search.component';

describe('NavbarNoBgSearchComponent', () => {
  let component: NavbarNoBgSearchComponent;
  let fixture: ComponentFixture<NavbarNoBgSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarNoBgSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNoBgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
