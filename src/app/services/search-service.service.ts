import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService  } from './constants.service';

@Injectable()
export class SearchServiceService {

  apiURL: string;
  constructor(
    public http: HttpClient,
    public constURL: ConstantsService
  ) {
    this.apiURL = this.constURL.URL;
  }

  getSearchResults() {
    return this.http.get(this.apiURL + 'searchResultsPage.json');
  }

  getSearchFilterResults() {
    // return this.http.post(this.apiURL + 'searchFilterResultsPage.json', {
    //   params
    // });
  }



}
