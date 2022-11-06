import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faPlus,
  faProjectDiagram,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-developer-sidenav-bar',
  templateUrl: './developer-sidenav-bar.component.html',
  styleUrls: ['./developer-sidenav-bar.component.css']
})
export class DeveloperSidenavBarComponent implements OnInit {
  faHome = faHome;
  faProjectDiagram = faProjectDiagram;
  faPlus = faPlus;
  faChartSimple = faChartSimple;
  constructor() { }

  ngOnInit(): void {
  }

}
