import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { ProjectManagerPageComponent } from './project-manager-page/project-manager-page.component';

const routes: Routes = [
  {
    path: 'project-manager',
    component: ProjectManagerPageComponent,
  },
  {
    path: 'developer',
    component: DeveloperPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
