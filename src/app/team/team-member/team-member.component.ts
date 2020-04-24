import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../_shared/models/team.model';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {
  @Input() teamMember: Team;
  constructor() { }

  ngOnInit() {
  }

}
