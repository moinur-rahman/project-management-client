import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGanttChartComponent } from './view-gantt-chart.component';

describe('ViewGanttChartComponent', () => {
  let component: ViewGanttChartComponent;
  let fixture: ComponentFixture<ViewGanttChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGanttChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGanttChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
