import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projectList: any = [];
  developerList: any = [];
  project: any = '';
  developer: any = '';
  taskList: any = [];
  task: any = '';
  taskListFilter: any = [];

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this.http
      .get('http://localhost:5000/get-developer-list')
      .subscribe((data) => (this.developerList = data));
  }

  async onSub(developersAssignProject: any) {
    const { developerName } = developersAssignProject.form.controls;
    this.developer = developerName.value;

    await this.http
      .get(
        `http://localhost:5000/get-developer-project-list/${developerName.value}`,
        {}
      )
      .subscribe((data) => ((this.projectList = data)));
  }

  async onS(searchTaskName: any) {
    const { projectName } = searchTaskName.form.controls;

    this.project = (projectName.value)
    console.log(projectName.value);
    await this.http
      .get(`http://localhost:5000/get-taskList/${projectName.value}`, {})
      .subscribe((data) => {
        let i = 0;
        this.taskList = data;
        while (i < this.taskList.length) {
          console.log(this.taskList[i].developerName, this.developer);
          if (this.taskList[i].developerName == this.developer) {
            console.log('filter');
            this.taskListFilter.push(this.taskList[i]);
          }
          i = i + 1;
        }

        console.log(this.taskListFilter);
        
      });
  }

  async onSubmit(addEstimation: any) {
    const { estimatedDays, startingDays, taskName} =
    addEstimation.form.controls;

    console.log(this.project, this.developer,taskName.value, estimatedDays.value, startingDays.value)
    await this.http
      .post('http://localhost:5000/add-estimation', {
        projectName: this.project,
        developerName: this.developer,
        taskName: taskName.value,
        estimation: estimatedDays.value,
        startingDate: startingDays.value,
      })
      .subscribe((data) => console.log(data));
  }
}
