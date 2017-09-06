import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarWithBgComponent } from './components/navbar-with-bg/navbar-with-bg.component';
import { NavbarNoBgSearchComponent } from './components/navbar-no-bg-search/navbar-no-bg-search.component';
import { HeaderComponent } from './components/header/header.component';
import { AdsRightSidebarComponent } from './components/ads-right-sidebar/ads-right-sidebar.component';
import { LogoNoBgNavbarComponent } from './components/logo-no-bg-navbar/logo-no-bg-navbar.component';
import { ViewJobsContentComponent } from './components/view-jobs-content/view-jobs-content.component';
import { ViewJobsPageComponent } from './components/view-jobs-page/view-jobs-page.component';
import { NoBgMenuLeftsidebarComponent } from './components/no-bg-menu-leftsidebar/no-bg-menu-leftsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarWithBgComponent,
    NavbarNoBgSearchComponent,
    HeaderComponent,
    AdsRightSidebarComponent,
    LogoNoBgNavbarComponent,
    ViewJobsContentComponent,
    ViewJobsPageComponent,
    NoBgMenuLeftsidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
