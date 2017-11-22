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

  getPro(id) {
    return this.http.post(this.apiURL + 'professionalpage.json', {id});
  }

}
