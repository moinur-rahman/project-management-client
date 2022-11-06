import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperAllProjectsComponent } from './developer-all-projects.component';

describe('DeveloperAllProjectsComponent', () => {
  let component: DeveloperAllProjectsComponent;
  let fixture: ComponentFixture<DeveloperAllProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperAllProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperAllProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
