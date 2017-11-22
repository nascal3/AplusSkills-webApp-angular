import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchResultService {

  apiUrl: string;

  constructor(
    public cons: ConstantsService,
    public http: HttpClient
  ) {
     this.apiUrl = this.cons.URL;
  }

  getService(id) {
    return this.http.post(this.apiUrl + 'serviceFromSearchResult.json', {id});
  }

}
