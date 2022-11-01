import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { ProjectListComponent } from './developer-page/project-list/project-list.component';
import { DeveloperPageHeaderComponent } from './developer-page/developer-page-header/developer-page-header.component';
import { TopRightComponent } from './developer-page/top-right/top-right.component';

import { SidebarComponent } from './project-manager-page/sidebar/sidebar.component';
import { ViewDashBoardComponent } from './project-manager-page/view-dash-board/view-dash-board.component';
import { ProjectStatisticComponent } from './project-manager-page/view-dash-board/project-statistic/project-statistic.component';
import { ProjectSummaryComponent } from './project-manager-page/view-dash-board/project-summary/project-summary.component';
import { ViewCreateProjectComponent } from './project-manager-page/view-create-project/view-create-project.component';
import { FormComponent } from './project-manager-page/view-create-project/form/form.component';
import { CreateProjectListComponent } from './project-manager-page/view-create-project/create-project-list/create-project-list.component';
import { ViewAssignProjectComponent } from './project-manager-page/view-assign-project/view-assign-project.component';
import { ViewGanttChartComponent } from './project-manager-page/view-gantt-chart/view-gantt-chart.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';


// @NgModule({
//   declarations: [AppComponent, ProjectManagerPageComponent, DeveloperPageComponent, DeveloperPageComponent, ProjectListComponent, DeveloperPageHeaderComponent, TopRightComponent],

@NgModule({
  declarations: [
    AppComponent,
    DeveloperPageComponent,
    DeveloperPageComponent,
    ProjectListComponent,
    DeveloperPageHeaderComponent,
    SidebarComponent,
    ViewDashBoardComponent,
    ProjectStatisticComponent,
    ProjectSummaryComponent,
    ViewCreateProjectComponent,
    FormComponent,
    CreateProjectListComponent,
    ViewAssignProjectComponent,
    ViewGanttChartComponent,
    TopRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    GanttModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
