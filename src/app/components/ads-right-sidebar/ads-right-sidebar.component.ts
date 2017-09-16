import { Component, OnInit } from '@angular/core';
import { AdsServiceService } from '../../services/ads-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ads-right-sidebar',
  templateUrl: './ads-right-sidebar.component.html',
  styleUrls: ['./ads-right-sidebar.component.css']
})
export class AdsRightSidebarComponent implements OnInit {

  ads: any[];
  services: any[];
  sliceCharacters = 102;

  constructor(
    public adsService: AdsServiceService
  ) {
    this.getAds();
    this.getRelated();
  }

  ngOnInit() {
  }

  getAds() {
    this.adsService.fetchAds().subscribe(adverts => {
      this.ads = adverts;
      // console.log(adverts);
    });
  }

  getRelated() {
    this.adsService.fetchRelated().subscribe(services => {
      this.services = services;
      // console.log(services);
    });
  }

}
