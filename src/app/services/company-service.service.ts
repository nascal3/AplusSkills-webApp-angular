import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable()
export class CompanyServiceService {

  apiURL: string;

  constructor(
    public http: HttpClient,
    public conService: ConstantsService
  ) {
    this.apiURL = conService.URL;
  }

  getValues() {
    return this.http.get(this.apiURL + 'companypage.json');
  }

}
