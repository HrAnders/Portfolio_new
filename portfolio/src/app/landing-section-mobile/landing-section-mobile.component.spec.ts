import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSectionMobileComponent } from './landing-section-mobile.component';

describe('LandingSectionMobileComponent', () => {
  let component: LandingSectionMobileComponent;
  let fixture: ComponentFixture<LandingSectionMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingSectionMobileComponent]
    });
    fixture = TestBed.createComponent(LandingSectionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
