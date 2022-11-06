import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-projects-list',
  templateUrl: './all-projects-list.component.html',
  styleUrls: ['./all-projects-list.component.css']
})
export class AllProjectsListComponent implements OnInit {

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
