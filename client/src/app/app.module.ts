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
import { ViewCreateProjectComponent } from './project-manager-page/view-create-project/view-create-project.component';
import { ViewAssignProjectComponent } from './project-manager-page/view-assign-project/view-assign-project.component';
import { ViewGanttChartComponent } from './project-manager-page/view-gantt-chart/view-gantt-chart.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewEditRatioComponent } from './project-manager-page/view-edit-ratio/view-edit-ratio.component';
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
    ViewCreateProjectComponent,
    ViewAssignProjectComponent,
    ViewGanttChartComponent,
    TopRightComponent,
    ViewEditRatioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    GanttModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
