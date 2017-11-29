import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchResultService {

  apiUrl: string;
  url: string;

  constructor(
    public cons: ConstantsService,
    public http: HttpClient
  ) {
     this.apiUrl = this.cons.URL;
  }

  getService(id) {
    this.url = 'services/19387848?expand=reviews';
    // this.url = 'serviceFromSearchResult.json';
    return this.http.get(this.apiUrl + this.url);
  }

}
