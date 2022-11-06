import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-create-project',
  templateUrl: './view-create-project.component.html',
  styleUrls: ['./view-create-project.component.css'],
})
export class ViewCreateProjectComponent implements OnInit {
  projectList: any = [];
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this.http
      .get('http://localhost:5000/get-project-list')
      .subscribe((data) => (this.projectList = data));
  }

  async onSubmit(createProject: any) {
    const { projectName, projectDescription, projectPriority, endingDate } =
      createProject.form.controls;

    await this.http
      .post('http://localhost:5000/create-project', {
        projectName: projectName.value,
        projectDescription: projectDescription.value,
        projectPriority: projectPriority.value,
        startingDate: endingDate.value,
      })
      .subscribe((data) => this.projectList.push(data));
  }
}
