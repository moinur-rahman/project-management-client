import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditRatioComponent } from './view-edit-ratio.component';

describe('ViewEditRatioComponent', () => {
  let component: ViewEditRatioComponent;
  let fixture: ComponentFixture<ViewEditRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEditRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
