import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormMobileComponent } from './contact-form-mobile.component';

describe('ContactFormMobileComponent', () => {
  let component: ContactFormMobileComponent;
  let fixture: ComponentFixture<ContactFormMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormMobileComponent]
    });
    fixture = TestBed.createComponent(ContactFormMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
