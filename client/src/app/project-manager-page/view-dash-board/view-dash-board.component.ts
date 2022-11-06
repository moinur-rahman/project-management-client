import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-dash-board',
  templateUrl: './view-dash-board.component.html',
  styleUrls: ['./view-dash-board.component.css'],
})
export class ViewDashBoardComponent implements OnInit {
  summary: any = [];
  totalProjects: any = 0;
  ongoing: any = 0;
  constructor(private http: HttpClient) {}

  countOngoing(data: any) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].subtasks.length != 0) this.ongoing++;
    }
  }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/get-sorted-list').subscribe((data) => {
      this.summary = data;
      this.totalProjects = this.summary.length;
      this.countOngoing(data)
    });
  }
}
