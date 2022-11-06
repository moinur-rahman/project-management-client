import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-assign-project',
  templateUrl: './view-assign-project.component.html',
  styleUrls: ['./view-assign-project.component.css'],
})
export class ViewAssignProjectComponent implements OnInit {
  projectList: any = [];
  developerList: any = [];
  taskList: any = [];
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this.http
      .get('http://localhost:5000/get-project-list')
      .subscribe((data) => (this.projectList = data));

    await this.http
      .get('http://localhost:5000/get-developer-list')
      .subscribe((data) => (this.developerList = data));

    await this.http
      .get('http://localhost:5000/get-task-list')
      .subscribe((data) => (this.taskList = data));
  }

  async onSubmit(assignProject: any) {
    const { projectName, developerName, task } = assignProject.form.controls;

    await this.http
      .post('http://localhost:5000/assign-project', {
        developerName: developerName.value,
        projectName: projectName.value,
        taskName: task.value,
      })
      .subscribe(() =>
        this.taskList.push({
          developerName: developerName.value,
          projectName: projectName.value,
          taskName: task.value,
        })
      );
  }
}
