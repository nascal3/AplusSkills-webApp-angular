import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Plugin modules
import { ImageUploadModule } from 'angular2-image-upload';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlModule } from 'ngx-owl-carousel';
import { AgmCoreModule } from '@agm/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';

// Services
import { ConstantsService } from './services/constants.service';
import { AddNewServiceService } from './services/add-new-service.service';
import { ViewJobsserviceService } from './services/view-jobsservice.service';
import { AdsServiceService } from './services/ads-service.service';
import { CompanyServiceService } from './services/company-service.service';

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
import { AdsFewComponent } from './components/ads-few/ads-few.component';
import { RatingStarsIconsComponent } from './components/rating-stars-icons/rating-stars-icons.component';
import { AdsComponent } from './components/ads/ads.component';
import { RelatedServiceComponent } from './components/related-service/related-service.component';



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
    NavbarLogoComponent,
    RatingStarsIconsComponent,
    AdsComponent,
    RelatedServiceComponent,
    AdsFewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ImageUploadModule.forRoot(),
    NgxPaginationModule,
    OwlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBx1h0CUaEu1AbHOfGhGqi2j7YX_qxm3UY'
    }),
    AngularFontAwesomeModule,
    ModalGalleryModule.forRoot()
  ],
  providers: [
    AddNewServiceService,
    ViewJobsserviceService,
    ConstantsService,
    AdsServiceService,
    CompanyServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
