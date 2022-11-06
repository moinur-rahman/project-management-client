import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-edit-ratio',
  templateUrl: './view-edit-ratio.component.html',
  styleUrls: ['./view-edit-ratio.component.css'],
})
export class ViewEditRatioComponent implements OnInit {
  developerList: any = [];
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this.http
      .get('http://localhost:5000/get-developer-list')
      .subscribe((data) => (this.developerList = data));
  }
  async onSubmit(addRatio: any) {
    const { developerName, ratio } = addRatio.form.controls;

    await this.http
      .post('http://localhost:5000/edit-ratio', {
        developerName: developerName.value,
        ratio: ratio.value,
      })
      .subscribe(() => {
        this.developerList.filter(
          (data: any) => data.developerName == developerName.value
        )[0].ratio = ratio.value;
      });
  }
}
