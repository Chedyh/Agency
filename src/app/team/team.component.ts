import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Team} from '../_shared/models/team.model';
import {TeamService} from "../_shared/services/team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team: Team[] = [];
  private subscriber: Subscription;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.subscriber = this.teamService
      .getTeamUpdateListener()
      .subscribe((teamData: Team[]) => {
        this.team = teamData;
        console.log(this.team);
      });
    this.teamService.getTeam();
  }


}
