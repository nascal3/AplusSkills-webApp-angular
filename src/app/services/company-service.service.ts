import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConstantsService } from './constants.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyServiceService {

  apiURL: string;

  constructor(
    public http: Http,
    public conService: ConstantsService
  ) {
    this.apiURL = conService.mainAPIUrl();
  }

  getValues() {
    return this.http.get(this.apiURL + 'companypage.json').map(res => res.json());
  }

}
