import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ViewJobsserviceService {

  constructor(
    public http: Http
  ) {
    this.getJobRequests();
  }

  getJobRequests() {
    return  this.http.get('http://upload.dev/servicesofferd.json').map(res => res.json());
  }

}
