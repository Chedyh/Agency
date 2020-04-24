import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ProjectPageComponent} from './project-page/project-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'projects',
    component: ProjectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
