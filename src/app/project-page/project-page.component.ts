import { Component, OnInit } from '@angular/core';
import {Project} from '../_shared/models/project.model';
import {ProjectService} from '../_shared/services/project.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projects: Project[] = [];
  private subscriber: Subscription;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.subscriber = this.projectService
      .getProjectUpdateListener()
      .subscribe((projectData: {projects: Project[], projectCount: number}) => {
        this.projects = projectData.projects;
      });
    this.projectService.getProjects();
  }

}
