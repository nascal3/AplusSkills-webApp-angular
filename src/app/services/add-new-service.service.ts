import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable()
export class AddNewServiceService {

  apiURL: string;

  constructor(
    private http: HttpClient,
    public consServ: ConstantsService
  ) {
    this.apiURL = this.consServ.URL;
  }

  getImageFiles() {
    return this.http.get(this.apiURL + 'getFilesFromDirectory.php');
  }

}
