import { Component, OnInit } from '@angular/core';
import { AdsServiceService } from '../../services/ads-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  ads: any[];
  sliceCharacters = 102;
  itemsToShow = 3;
  numberOfAds: number;

  // Number of ads to show slice filter
  firstSliceVal: number;
  secondSliceVal: number;

  constructor(
    public adsService: AdsServiceService
  ) {
    this.getAds();
  }

  ngOnInit() {
  }

  getAds() {
    this.adsService.fetchAds().subscribe(adverts => {
      this.ads = adverts;
      this.numberOfAds = adverts.length;
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
