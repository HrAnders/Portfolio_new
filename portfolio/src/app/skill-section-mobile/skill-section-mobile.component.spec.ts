import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSectionMobileComponent } from './skill-section-mobile.component';

describe('SkillSectionMobileComponent', () => {
  let component: SkillSectionMobileComponent;
  let fixture: ComponentFixture<SkillSectionMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillSectionMobileComponent]
    });
    fixture = TestBed.createComponent(SkillSectionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
