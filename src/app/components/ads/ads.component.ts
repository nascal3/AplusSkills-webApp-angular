import { Component, OnInit } from '@angular/core';
import { AdsServiceService } from '../../services/ads.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  ads;
  sliceTitle = 18;
  sliceCharacters = 102;
  itemsToShow = 3;
  max: number;

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
      this.max = this.ads.length -  this.itemsToShow ;

      this.firstSliceVal =  this.adsService.getRandomInt1(this.max);
      this.secondSliceVal = this.adsService.getRandomInt2(this.itemsToShow);
    });
  }

}
