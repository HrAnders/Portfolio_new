import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeSectionMobileComponent } from './about-me-section-mobile.component';

describe('AboutMeSectionMobileComponent', () => {
  let component: AboutMeSectionMobileComponent;
  let fixture: ComponentFixture<AboutMeSectionMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeSectionMobileComponent]
    });
    fixture = TestBed.createComponent(AboutMeSectionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
