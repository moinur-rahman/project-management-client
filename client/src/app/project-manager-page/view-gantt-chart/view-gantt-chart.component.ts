import { Component, OnInit } from '@angular/core';
import { projectNewData } from './data';
@Component({
  selector: 'app-view-gantt-chart',
  templateUrl: './view-gantt-chart.component.html',
  styleUrls: ['./view-gantt-chart.component.css'],
})
export class ViewGanttChartComponent implements OnInit {
  public data: object[] = projectNewData;
  public timelineView: object = { timelineViewMode: 'Week' }; //Default one.
  public columnSettings: object[] = [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'StartDate', format: 'dd-MMM-yy' },
    { field: 'Duration', textAlign: 'Right' },
  ];
  public taskSettings: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
    dependency: 'Predecessor',
  };
  constructor() {}

  ngOnInit(): void {}
}
