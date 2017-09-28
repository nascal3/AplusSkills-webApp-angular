import { Component, OnInit, Input } from '@angular/core';
import { AddNewServiceService } from '../../services/add-new-service.service';
import { ModalServiceService } from '../../services/modal-service.service';

@Component({
  selector: 'app-create-service-content',
  templateUrl: './create-service-content.component.html',
  styleUrls: ['./create-service-content.component.css']
})
export class CreateServiceContentComponent implements OnInit {
  @Input() TargetInput;

  filename: string;
  showSpinner = true;
  showIcon = false;
  openModal: boolean;
  placeHolder = 'Insert 3 categories';
  placeHolder2 = 'Insert 5 related categories';

  items;
  relatedCat;

  constructor(
    private addService: AddNewServiceService,
    private modalService: ModalServiceService

  ) {
  }

  ngOnInit() {
  }

  openUploadModal() {
      this.openModal = true;
      // console.log(this.openModal);
  }

  closeUploadModal(event) {
    this.openModal = event;
    // console.log(this.openModal);
  }



}
