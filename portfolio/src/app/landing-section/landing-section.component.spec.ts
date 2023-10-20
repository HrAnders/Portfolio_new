import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSectionComponent } from './landing-section.component';

describe('LandingSectionComponent', () => {
  let component: LandingSectionComponent;
  let fixture: ComponentFixture<LandingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingSectionComponent]
    });
    fixture = TestBed.createComponent(LandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
