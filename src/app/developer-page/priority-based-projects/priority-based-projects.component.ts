import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-priority-based-projects',
  templateUrl: './priority-based-projects.component.html',
  styleUrls: ['./priority-based-projects.component.css']
})
export class PriorityBasedProjectsComponent implements OnInit {
  developerList: any = [];
  projectList: any = [];
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    await this.http
      .get('http://localhost:5000/get-developer-list')
      .subscribe((data) => (this.developerList = data));
  }

  async onSub(developersAssignProject: any) {
    const { developerName } = developersAssignProject.form.controls;
    //this.developer = developerName.value;

    await this.http
      .get(
        `http://localhost:5000/get-project-list/${developerName.value}`,
        {}
      )
      .subscribe((data) => ((this.projectList = (data))));
  }

}
