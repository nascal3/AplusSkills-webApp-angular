import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  RouterModule, Routes  } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarWithBgComponent } from './components/navbar-with-bg/navbar-with-bg.component';
import { NavbarNoBgSearchComponent } from './components/navbar-no-bg-search/navbar-no-bg-search.component';
import { HeaderComponent } from './components/header/header.component';
import { AdsRightSidebarComponent } from './components/ads-right-sidebar/ads-right-sidebar.component';
import { ViewJobsContentComponent } from './components/view-jobs-content/view-jobs-content.component';
import { ViewJobsPageComponent } from './components/view-jobs-page/view-jobs-page.component';
import { NoBgMenuLeftsidebarComponent } from './components/no-bg-menu-leftsidebar/no-bg-menu-leftsidebar.component';
import { CreateServicePageComponent } from './components/create-service-page/create-service-page.component';
import { CreateServiceContentComponent } from './components/create-service-content/create-service-content.component';
import { ViewProfessionalPageComponent } from './components/view-professional-page/view-professional-page.component';

const appRoutes: Routes = [
  {path: '', component: ViewJobsPageComponent },
  {path: 'createservice', component: CreateServicePageComponent},
  {path: 'professional', component: ViewProfessionalPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarWithBgComponent,
    NavbarNoBgSearchComponent,
    HeaderComponent,
    AdsRightSidebarComponent,
    ViewJobsContentComponent,
    ViewJobsPageComponent,
    NoBgMenuLeftsidebarComponent,
    CreateServicePageComponent,
    CreateServiceContentComponent,
    ViewProfessionalPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
