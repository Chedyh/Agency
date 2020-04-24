import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ProjectPageComponent} from './project-page/project-page.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'projects',
    component: ProjectPageComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
