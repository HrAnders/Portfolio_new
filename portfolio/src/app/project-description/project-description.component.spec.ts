import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDescriptionComponent } from './project-description.component';

describe('ProjectDescriptionComponent', () => {
  let component: ProjectDescriptionComponent;
  let fixture: ComponentFixture<ProjectDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDescriptionComponent]
    });
    fixture = TestBed.createComponent(ProjectDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
