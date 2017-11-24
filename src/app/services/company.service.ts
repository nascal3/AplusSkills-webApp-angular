import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable()
export class CompanyServiceService {

  apiURL: string;
  url: string;

  constructor(
    public http: HttpClient,
    public conService: ConstantsService
  ) {
    this.apiURL = conService.URL;
  }



  getValues(id) {
    // this.url = 'users?id=17b5b119-5e94-49f1-b6fe-9e56b8f3b3d2&expand=services'
    this.url = 'companypage.json'
    return this.http.get(this.apiURL + this.url);
  }

}
