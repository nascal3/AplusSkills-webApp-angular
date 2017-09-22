import { Component, OnInit } from '@angular/core';
import { AdsServiceService } from '../../services/ads-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-related-service',
  templateUrl: './related-service.component.html',
  styleUrls: ['./related-service.component.css']
})
export class RelatedServiceComponent implements OnInit {

  services;
  sliceCharacters = 102;
  itemsToShow = 1;
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
      this.numberOfAds = this.services.length;
      this.getRandomInt(0, (this.numberOfAds - this.itemsToShow));
      // console.log(this.numberOfAds - 3);
    });
  }

  // Generate random number
  getRandomInt(min: number, max: number) {
        this.firstSliceVal =  Math.floor(Math.random() * (max - min + 1)) + min;
        this.secondSliceVal = this.firstSliceVal + this.itemsToShow;
        // console.log(this.firstSliceVal + '-' + this.secondSliceVal);
  }

}
