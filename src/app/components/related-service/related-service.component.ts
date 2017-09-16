import { Component, OnInit } from '@angular/core';
import { AdsServiceService } from '../../services/ads-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-related-service',
  templateUrl: './related-service.component.html',
  styleUrls: ['./related-service.component.css']
})
export class RelatedServiceComponent implements OnInit {

  services: any[];
  sliceCharacters = 102;
  numberOfAds: number;

  // Number of ads to show slice filter
  firstSliceVal: number;
  secondSliceVal: number;

  constructor(
    public adsService: AdsServiceService
  ) {
    this.getRelated();
  }

  ngOnInit() {
  }

  getRelated() {
    this.adsService.fetchRelated().subscribe(services => {
      this.services = services;
      this.numberOfAds = services.length;
      this.getRandomInt(0, (this.numberOfAds - 1));
      // console.log(this.numberOfAds - 3);
    });
  }

  // Generate random number
  getRandomInt(min: number, max: number) {
        this.firstSliceVal =  Math.floor(Math.random() * (max - min + 1)) + min;
        this.secondSliceVal = this.firstSliceVal + 1;
        // console.log(this.firstSliceVal + '-' + this.secondSliceVal);
  }

}
