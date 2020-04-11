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
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
