import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable()
export class ViewJobsserviceService {
  URL: string;

  constructor(
    public http: HttpClient,
    public constUrl: ConstantsService
  ) {
    this.URL = constUrl.mainAPIUrl();
    this.getJobRequests();
  }

  getJobRequests() {
    return  this.http.get(this.URL + 'servicesofferd.json');
  }

}
