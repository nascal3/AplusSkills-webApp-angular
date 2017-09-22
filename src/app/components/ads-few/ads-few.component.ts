import { Component, OnInit } from '@angular/core';
import { AdsServiceService } from '../../services/ads-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ads-few',
  templateUrl: './ads-few.component.html',
  styleUrls: ['./ads-few.component.css']
})
export class AdsFewComponent implements OnInit {

  ads;
  sliceTitle = 18;
  sliceCharacters = 102;
  itemsToShow = 1;
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
