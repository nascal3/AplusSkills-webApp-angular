import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { NewService } from '../model/NewService';

@Injectable()
export class AddNewServiceService {

  apiURL: string;
  addServiceURL = 'addService.php';

  constructor(
    private http: HttpClient,
    public consServ: ConstantsService
  ) {
    this.apiURL = this.consServ.URL;
  }

  createNewService(values: NewService) {
     return this.http.post(this.apiURL + this.addServiceURL, {values});
  }



}
