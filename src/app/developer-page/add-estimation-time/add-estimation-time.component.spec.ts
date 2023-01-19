import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstimationTimeComponent } from './add-estimation-time.component';

describe('AddEstimationTimeComponent', () => {
  let component: AddEstimationTimeComponent;
  let fixture: ComponentFixture<AddEstimationTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstimationTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEstimationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
