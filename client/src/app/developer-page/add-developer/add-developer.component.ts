import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css'],
})
export class AddDeveloperComponent implements OnInit {
  developerList: any = [];
  constructor(private http: HttpClient) {}

  async ngOnInit(){
    await this.http
      .get('http://localhost:5000/get-developer-list')
      .subscribe((data) => (this.developerList = data));
  }

  async onSubmit(createDeveloper: any) {
    const { developerName } = createDeveloper.form.controls;

    await this.http
      .post('http://localhost:5000/create-developer', {
        developerName: developerName.value,
      })
      .subscribe((data) => this.developerList.push(data));
  }
}
