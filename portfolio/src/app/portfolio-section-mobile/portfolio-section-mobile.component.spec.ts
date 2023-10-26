import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionMobileComponent } from './portfolio-section-mobile.component';

describe('PortfolioSectionMobileComponent', () => {
  let component: PortfolioSectionMobileComponent;
  let fixture: ComponentFixture<PortfolioSectionMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioSectionMobileComponent]
    });
    fixture = TestBed.createComponent(PortfolioSectionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
