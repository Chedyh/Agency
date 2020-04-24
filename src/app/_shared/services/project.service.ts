import {Injectable} from '@angular/core';
import {Project} from '../models/project.model';
import {Subject} from 'rxjs';

@Injectable()
export class ProjectService {
  private projects: Project[] = [
    {
      name: 'hair-brush',
      date: new Date(2012, 0, 1),
      isVideo: true,
      imagePath: '../../../assets/projects/images/thumbnail1.png',
      videoPath: 'https://www.youtube.com/watch?v=YSW3KMozn9k'
    },
    {
      name: 'hair-brush',
      date: new Date(2012, 0, 1),
      isVideo: false,
      imagePath: '../../../assets/projects/images/thumbnail4.png',
      videoPath: 'https://www.youtube.com/watch?v=YSW3KMozn9k'
    },
    {
      name: 'hair-brush',
      date: new Date(2012, 0, 1),
      isVideo: true,
      imagePath: '../../../assets/projects/images/thumbnail3.png',
      videoPath: 'https://www.youtube.com/watch?v=YSW3KMozn9k'
    },
    {
      name: 'hair-brush',
      date: new Date(2012, 0, 1),
      isVideo: false,
      imagePath: '../../../assets/projects/images/thumbnail2.png',
      videoPath: 'https://www.youtube.com/watch?v=YSW3KMozn9k'
    },
    {
      name: 'hair-brush',
      date: new Date(2012, 0, 1),
      isVideo: false,
      imagePath: '../../../assets/projects/images/thumbnail5.png',
      videoPath: 'https://www.youtube.com/watch?v=YSW3KMozn9k'
    }
  ];
  private projectsUpdated = new Subject<{projects: Project[], projectCount: number}>();

  public getProjects() {
    this.projectsUpdated.next({projects: [...this.projects], projectCount: this.projects.length});
  }

  public getProjectUpdateListener() {
    return this.projectsUpdated.asObservable();
  }

  public addProject(project: Project) {
    this.projects.push(project);
    this.projectsUpdated.next({projects: [...this.projects], projectCount: this.projects.length});
  }
}
