import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityBasedProjectsComponent } from './priority-based-projects.component';

describe('PriorityBasedProjectsComponent', () => {
  let component: PriorityBasedProjectsComponent;
  let fixture: ComponentFixture<PriorityBasedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityBasedProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorityBasedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
