import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
      // URL = 'http://upload.aplusskill.com/';
      URL = 'http://upload.dev/';
  constructor() {  }

  mainAPIUrl() {
    return this.URL;
  }

}
