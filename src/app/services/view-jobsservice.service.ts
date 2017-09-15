import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';
import { ConstantsService } from './constants.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ViewJobsserviceService {
  URL: string;

  constructor(
    public http: Http,
    public constUrl: ConstantsService
  ) {
    this.URL = constUrl.mainAPIUrl();
    this.getJobRequests();
  }

  getJobRequests() {
    return  this.http.get(this.URL + 'servicesofferd.json').map(res => res.json());
  }

}
