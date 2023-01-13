import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { projectNewData } from './data';
@Component({
  selector: 'app-view-gantt-chart',
  templateUrl: './view-gantt-chart.component.html',
  styleUrls: ['./view-gantt-chart.component.css'],
})
export class ViewGanttChartComponent implements OnInit {
  public data: any = [];
  public timelineView: object = { timelineViewMode: 'Week' }; //Default one.
  public columnSettings: object[] = [
    { field: 'TaskID', headerText: 'Project ID' },
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
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/get-sorted-list').subscribe((data) => {
      this.data = data;
    });
  }
}
