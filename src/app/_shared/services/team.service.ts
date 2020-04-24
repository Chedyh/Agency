import {Injectable} from '@angular/core';
import {Team} from '../models/team.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamMembers: Team[] = [
    {
      firstName: 'Shadi',
      lastName: 'Hammami',
      imagePath: '../../../assets/team/shadi.jpg',
      profession: 'Co-founder',
      description: 'He is the bestest Boyfriend in Za World',
      facebookLink: 'https://www.facebook.com/chedy.hm',
      linkedinLink: 'https://www.linkedin.com/in/chedy-hammami-a5a653143/',
      portfolioLink: ''
    },
    {
      firstName: 'Nour',
      lastName: 'Karoui',
      imagePath: '../../../assets/team/nour.png',
      profession: 'Co-founder',
      description: 'I am za bestest of the queens in Za World',
      facebookLink: 'https://www.facebook.com/nour.karoui.5832',
      linkedinLink: 'https://www.linkedin.com/in/nour-karoui-2957b61a0/',
      portfolioLink: ''
    }
  ];
  private teamUpdated = new Subject<Team[]>();

  public getTeam() {
    this.teamUpdated.next([...this.teamMembers]);
  }

  public getTeamUpdateListener() {
    return this.teamUpdated.asObservable();
  }

  public addTeamMember(teamMember: Team) {
    this.teamMembers.push(teamMember);
    this.teamUpdated.next([...this.teamMembers]);
  }
}
