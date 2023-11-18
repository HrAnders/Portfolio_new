import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayMobileComponent } from './overlay-mobile.component';

describe('OverlayMobileComponent', () => {
  let component: OverlayMobileComponent;
  let fixture: ComponentFixture<OverlayMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayMobileComponent]
    });
    fixture = TestBed.createComponent(OverlayMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
