import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Page components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarWithBgComponent } from './components/navbar-with-bg/navbar-with-bg.component';
import { AdsRightSidebarComponent } from './components/ads-right-sidebar/ads-right-sidebar.component';
import { ViewJobsContentComponent } from './components/view-jobs-content/view-jobs-content.component';
import { ViewJobsPageComponent } from './components/view-jobs-page/view-jobs-page.component';
import { NoBgMenuLeftsidebarComponent } from './components/no-bg-menu-leftsidebar/no-bg-menu-leftsidebar.component';
import { CreateServicePageComponent } from './components/create-service-page/create-service-page.component';
import { CreateServiceContentComponent } from './components/create-service-content/create-service-content.component';
import { ViewProfessionalPageComponent } from './components/view-professional-page/view-professional-page.component';
import { LowerrightSidebarAdsComponent } from './components/lowerright-sidebar-ads/lowerright-sidebar-ads.component';
import { ViewCompanyPageComponent } from './components/view-company-page/view-company-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LargeImageadComponent } from './components/large-imagead/large-imagead.component';
import { NavbarProfileComponent } from './components/navbar-profile/navbar-profile.component';
import { NavbarNoBgComponent } from './components/navbar-no-bg/navbar-no-bg.component';
import { NavbarSearchComponent } from './components/navbar-search/navbar-search.component';
import { NavbarLogoComponent } from './components/navbar-logo/navbar-logo.component';

// Plugin modules
import { ImageUploadModule } from 'angular2-image-upload';

// Services
import { AddNewServiceService } from './services/add-new-service.service';


const appRoutes: Routes = [
  {path: '', component: ViewJobsPageComponent },
  {path: 'createservice', component: CreateServicePageComponent},
  {path: 'professional', component: ViewProfessionalPageComponent},
  {path: 'company', component: ViewCompanyPageComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarWithBgComponent,
    AdsRightSidebarComponent,
    ViewJobsContentComponent,
    ViewJobsPageComponent,
    NoBgMenuLeftsidebarComponent,
    CreateServicePageComponent,
    CreateServiceContentComponent,
    ViewProfessionalPageComponent,
    LowerrightSidebarAdsComponent,
    ViewCompanyPageComponent,
    PageNotFoundComponent,
    LargeImageadComponent,
    NavbarProfileComponent,
    NavbarNoBgComponent,
    NavbarSearchComponent,
    NavbarLogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ImageUploadModule.forRoot()
  ],
  providers: [
    AddNewServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
