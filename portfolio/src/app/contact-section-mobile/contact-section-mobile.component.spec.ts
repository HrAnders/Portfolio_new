import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSectionMobileComponent } from './contact-section-mobile.component';

describe('ContactSectionMobileComponent', () => {
  let component: ContactSectionMobileComponent;
  let fixture: ComponentFixture<ContactSectionMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSectionMobileComponent]
    });
    fixture = TestBed.createComponent(ContactSectionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
