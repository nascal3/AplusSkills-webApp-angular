import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdsServiceService {

  ad;
  ads;
  apiUrl: string;
  numberOfAds: number;

  // Number of ads to show slice filter
  firstSliceVal: number;
  secondSliceVal: number;

  constructor(
    public http: HttpClient,
    public con: ConstantsService
  ) {
    this.apiUrl = this.con.mainAPIUrl();
  }

  fetchAds() {
    return this.http.get(this.apiUrl + 'adverts.json');
  }

  fetchRelated() {
    return this.http.get(this.apiUrl + 'relatedservice.json');
  }

  // Generate random number
  getRandomInt1(max: number) {
    console.log(max);
      return this.firstSliceVal =  Math.floor(Math.random() * (max - 0 + 1)) + 0;
  }

  getRandomInt2( itemsToShow: number) {
      return this.secondSliceVal = this.firstSliceVal + itemsToShow;
  }


}
