import { Injectable } from '@angular/core';

@Injectable()
export class ModalServiceService {

  modalState;

  constructor() { }

  modalOpen() {
    this.modalState = true;
    console.log(this.modalState);
  }

  modalClose() {
    this.modalState = false;
    console.log(this.modalState);
  }

}
