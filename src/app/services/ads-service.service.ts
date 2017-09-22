import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable()
export class AdsServiceService {

  apiUrl: string;
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

}
