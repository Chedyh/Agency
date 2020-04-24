import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../_shared/models/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  constructor() { }

  ngOnInit() {
    console.log('this is my project ' + this.project);
  }

}
