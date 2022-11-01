import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  list = [
    {
      'id': 1,
      'img': "bf",
      'projectName': 'Learn Figma',
      'projectGiver': 'Christopher Morgan',
    },

    {
      'id': 2,
      'img': "af",
      'projectName': 'Learn',
      'projectGiver': 'Christopher',
    },
    {
      'id': 2,
      'img': "af",
      'projectName': 'Learn',
      'projectGiver': 'Christopher',
    },
    {
      'id': 2,
      'img': "af",
      'projectName': 'Learn',
      'projectGiver': 'Christopher',
    },
    {
      'id': 2,
      'img': "af",
      'projectName': 'Learn',
      'projectGiver': 'Christopher',
    },
    {
      'id': 2,
      'img': "af",
      'projectName': 'Learn',
      'projectGiver': 'Christopher',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
