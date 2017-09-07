import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerrightSidebarAdsComponent } from './lowerright-sidebar-ads.component';

describe('LowerrightSidebarAdsComponent', () => {
  let component: LowerrightSidebarAdsComponent;
  let fixture: ComponentFixture<LowerrightSidebarAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerrightSidebarAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerrightSidebarAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
