import { Component, OnInit } from '@angular/core';
import { AdsServiceService } from '../../services/ads-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ads-few',
  templateUrl: './ads-few.component.html',
  styleUrls: ['./ads-few.component.css']
})
export class AdsFewComponent implements OnInit {

  ads: any[];
  sliceTitle = 18;
  sliceCharacters = 102;
  itemsToShow = 1;
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
      // console.log(this.itemsToShow);
    });
  }

  // Generate random number
  getRandomInt(min: number, max: number) {
        this.firstSliceVal =  Math.floor(Math.random() * (max - min + 1)) + min;
        this.secondSliceVal = this.firstSliceVal + this.itemsToShow;
        // console.log(this.firstSliceVal + '-' + this.secondSliceVal);
  }

}
