import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ModalServiceService {

  inputId: string;
  uploadURL: string;
  apiURL: string;
  uploadsFilePath = 'assets/uploads/';

  constructor(
    public constURL: ConstantsService,
    public http: HttpClient
  ) {
    this.apiURL = this.constURL.URL;
    this.uploadURL = this.apiURL + 'fileUpload.php';
  }

  getImageFiles() {
    return this.http.get(this.apiURL + 'getFilesFromDirectory.php');
  }

  getInputId(input) {
    this.inputId = input;
    // console.log(this.inputId);
  }

  modalClose() {

  }

}
