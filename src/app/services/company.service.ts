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

  getValues(id) {
    return this.http.post(this.apiURL + 'companypage.json', {id});
  }

}
