import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable()
export class ProfessionalServiceService {

  apiURL: string;
  constructor(
    public http: HttpClient,
    public constURL: ConstantsService
  ) {
    this.apiURL = this.constURL.URL;
  }

  getPro() {
    return this.http.get(this.apiURL + 'professionalpage.json');
  }

}
