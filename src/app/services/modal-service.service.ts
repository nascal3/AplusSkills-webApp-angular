import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

@Injectable()
export class ModalServiceService {

  inputId: string;
  uploadURL: string;
  apiURL: string;
  uploadsFilePath = 'assets/uploads/';

  constructor(
    public constURL: ConstantsService
  ) {
    this.apiURL = this.constURL.URL;
    this.uploadURL = this.apiURL + 'fileUpload.php';
  }

  getInputId(input) {
    this.inputId = input;
    // console.log(this.inputId);
  }

  modalClose() {

  }

}
