import { Component, OnInit } from '@angular/core';
import {Project} from '../_shared/models/project.model';
import {ProjectService} from '../_shared/services/project.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-projects-done',
  templateUrl: './projects-done.component.html',
  styleUrls: ['./projects-done.component.css']
})
export class ProjectsDoneComponent implements OnInit {
  projects: Project[] = [];
  totalProjects: number;
  private subscriber: Subscription;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.subscriber = this.projectService
      .getProjectUpdateListener()
      .subscribe((projectData: {projects: Project[], projectCount: number}) => {
        this.projects = projectData.projects;
        this.totalProjects = projectData.projectCount;
      });
    this.projectService.getProjects();
  }

}
