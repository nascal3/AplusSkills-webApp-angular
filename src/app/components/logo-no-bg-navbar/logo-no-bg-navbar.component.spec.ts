import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoNoBgNavbarComponent } from './logo-no-bg-navbar.component';

describe('LogoNoBgNavbarComponent', () => {
  let component: LogoNoBgNavbarComponent;
  let fixture: ComponentFixture<LogoNoBgNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoNoBgNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoNoBgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
