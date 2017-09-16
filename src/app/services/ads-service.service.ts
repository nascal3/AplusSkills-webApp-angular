import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConstantsService } from './constants.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AdsServiceService {

  apiUrl: string;
  constructor(
    public http: Http,
    public con: ConstantsService
  ) {
    this.apiUrl = this.con.mainAPIUrl();
  }

  fetchAds() {
    return this.http.get(this.apiUrl + 'adverts.json').map(res => res.json());
  }

  fetchRelated() {
    return this.http.get(this.apiUrl + 'relatedservice.json').map(res => res.json());
  }

}
