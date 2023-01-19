import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDashBoardComponent } from './view-dash-board.component';

describe('ViewDashBoardComponent', () => {
  let component: ViewDashBoardComponent;
  let fixture: ComponentFixture<ViewDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
