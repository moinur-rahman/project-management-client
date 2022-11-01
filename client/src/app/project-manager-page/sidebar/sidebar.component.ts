import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faPlus,
  faProjectDiagram,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  faHome = faHome;
  faProjectDiagram = faProjectDiagram;
  faPlus = faPlus;
  faChartSimple = faChartSimple;
  constructor() {}

  ngOnInit(): void {}

}
