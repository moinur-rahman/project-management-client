import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignProjectComponent } from './view-assign-project.component';

describe('ViewAssignProjectComponent', () => {
  let component: ViewAssignProjectComponent;
  let fixture: ComponentFixture<ViewAssignProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssignProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAssignProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
