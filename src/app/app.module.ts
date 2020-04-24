import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { ClientsComponent } from './clients/clients.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ProjectsDoneComponent } from './projects-done/projects-done.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { ProjectItemComponent } from './projects-done/project-item/project-item.component';
import { ClientItemComponent } from './clients/client-item/client-item.component';
import { TeamMemberComponent } from './team/team-member/team-member.component';
import { HowDoesItWorkStepComponent } from './how-it-works/how-does-it-work-step/how-does-it-work-step.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import {ProjectService} from './_shared/services/project.service';
import {TeamService} from "./_shared/services/team.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MainComponent,
    FooterComponent,
    VideoComponent,
    ClientsComponent,
    HowItWorksComponent,
    ProjectsDoneComponent,
    PricingComponent,
    TeamComponent,
    ProjectItemComponent,
    ClientItemComponent,
    TeamMemberComponent,
    HowDoesItWorkStepComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
