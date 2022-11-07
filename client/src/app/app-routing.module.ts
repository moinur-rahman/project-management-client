import { AddEstimationTimeComponent } from './developer-page/add-estimation-time/add-estimation-time.component';
import { AllProjectsListComponent } from './developer-page/developer-all-projects/all-projects-list/all-projects-list.component';
import { AddDeveloperComponent } from './developer-page/add-developer/add-developer.component';
import { DeveloperAllProjectsComponent } from './developer-page/developer-all-projects/developer-all-projects.component';
import { ProjectListComponent } from './developer-page/project-list/project-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { ViewAssignProjectComponent } from './project-manager-page/view-assign-project/view-assign-project.component';
import { ViewCreateProjectComponent } from './project-manager-page/view-create-project/view-create-project.component';
import { ViewDashBoardComponent } from './project-manager-page/view-dash-board/view-dash-board.component';
import { ViewGanttChartComponent } from './project-manager-page/view-gantt-chart/view-gantt-chart.component';
import { ViewEditRatioComponent } from './project-manager-page/view-edit-ratio/view-edit-ratio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'project-manager/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'project-manager/dashboard',
    component: ViewDashBoardComponent,
  },
  {
    path: 'project-manager/create-project',
    component: ViewCreateProjectComponent,
  },
  {
    path: 'project-manager/assign-project',
    component: ViewAssignProjectComponent,
  },
  {
    path: 'project-manager/edit-ratio',
    component: ViewEditRatioComponent,
  },
  {
    path: 'project-manager/gantt-chart',
    component: ViewGanttChartComponent,
  },
  {
    path: 'developer/dashboard',
    component: DeveloperPageComponent,
  },
  {
    path: 'developer/all-projects',
    component: DeveloperAllProjectsComponent,
  },
  {
    path: 'developer/add-developer',
    component: AddDeveloperComponent,
  },
  {
    path: 'developer/add-estimation',
    component: AddEstimationTimeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
