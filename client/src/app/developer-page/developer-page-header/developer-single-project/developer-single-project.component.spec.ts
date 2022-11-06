import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSingleProjectComponent } from './developer-single-project.component';

describe('DeveloperSingleProjectComponent', () => {
  let component: DeveloperSingleProjectComponent;
  let fixture: ComponentFixture<DeveloperSingleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperSingleProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperSingleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
