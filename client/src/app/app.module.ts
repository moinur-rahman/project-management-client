import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectManagerPageComponent } from './project-manager-page/project-manager-page.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { ProjectListComponent } from './developer-page/project-list/project-list.component';
import { DeveloperPageHeaderComponent } from './developer-page/developer-page-header/developer-page-header.component';

@NgModule({
  declarations: [AppComponent, ProjectManagerPageComponent, DeveloperPageComponent, DeveloperPageComponent, ProjectListComponent, DeveloperPageHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
