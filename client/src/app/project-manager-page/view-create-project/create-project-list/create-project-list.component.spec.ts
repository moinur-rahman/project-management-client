import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectListComponent } from './create-project-list.component';

describe('CreateProjectListComponent', () => {
  let component: CreateProjectListComponent;
  let fixture: ComponentFixture<CreateProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
