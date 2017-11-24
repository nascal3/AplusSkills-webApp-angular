import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable()
export class ViewJobsserviceService {
  apiURL: string;
  url: string;

  constructor(
    public http: HttpClient,
    public constUrl: ConstantsService
  ) {
    this.apiURL = constUrl.URL;
    this.getJobRequests();
  }

  getJobRequests() {
    this.url = 'job-requests?expand=reviews';
    // this.url = 'servicesofferd.json';
    return  this.http.get(this.apiURL + this.url);
  }

}
