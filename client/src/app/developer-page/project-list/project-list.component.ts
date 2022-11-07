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
  developerList: any = [];
  developerProjectList: any = [];
  selectedDeveloper: any;

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this.http
      .get('http://localhost:5000/get-developer-list')
      .subscribe((data) => (this.developerList = data));
  }

  async onDeveloperSubmit(developersAssignProject: any) {
    const { developerName } = developersAssignProject.form.controls;
    this.selectedDeveloper = developerName.value;
    await this.http
      .post('http://localhost:5000/get-developer-project', {
        developerName: developerName.value,
      })
      .subscribe((data) => (this.developerProjectList = data));
  }
  async onEstimateSubmit(addEstimation: any) {
    const { estimation, startingDate, projectName } =
      addEstimation.form.controls;
    console.log(estimation.value);
    console.log(startingDate.value);
    console.log(projectName.value);
    console.log(this.selectedDeveloper);

    await this.http
      .post('http://localhost:5000/add-estimation', {
        projectName: projectName.value,
        developerName: this.selectedDeveloper,
        estimation: estimation.value,
        startingDate: startingDate.value,
      })
      .subscribe((data) => console.log(data));
  }
}
