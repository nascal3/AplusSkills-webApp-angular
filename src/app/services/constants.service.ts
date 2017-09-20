import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  URL = 'http://upload.aplusskill.com/';
  constructor() {  }

  mainAPIUrl() {
    return this.URL;
  }

}
