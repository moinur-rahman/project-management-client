import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreateProjectComponent } from './view-create-project.component';

describe('ViewCreateProjectComponent', () => {
  let component: ViewCreateProjectComponent;
  let fixture: ComponentFixture<ViewCreateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCreateProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
