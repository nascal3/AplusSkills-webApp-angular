import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService  } from './constants.service';
import { Router } from "@angular/router";

@Injectable()
export class SearchServiceService {

  searchResults: any;
  apiURL: string;

  constructor(
    public http: HttpClient,
    public constURL: ConstantsService,
    public router: Router
  ) {
    this.apiURL = this.constURL.URL;
  }

  getSearchResults(searchTerm) {
    return this.http.post(this.apiURL + 'searchResultsPage.json', {searchTerm});
  }

  setSearchResults(results) {
    this.searchResults = results;
    this.router.navigate([`search/${results}`]);
  }

  getSearchFilterResults(filter) {
    return this.http.post(this.apiURL + 'searchFilterResultsPage.json', {
     filter
    });
  }





}
