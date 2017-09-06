import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoBgMenuLeftsidebarComponent } from './no-bg-menu-leftsidebar.component';

describe('NoBgMenuLeftsidebarComponent', () => {
  let component: NoBgMenuLeftsidebarComponent;
  let fixture: ComponentFixture<NoBgMenuLeftsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoBgMenuLeftsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoBgMenuLeftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
