import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsRightSidebarComponent } from './ads-right-sidebar.component';

describe('AdsRightSidebarComponent', () => {
  let component: AdsRightSidebarComponent;
  let fixture: ComponentFixture<AdsRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
