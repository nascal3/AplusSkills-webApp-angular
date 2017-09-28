import { Component, OnInit } from '@angular/core';
import { AddNewServiceService } from '../../services/add-new-service.service';
import { ModalServiceService } from '../../services/modal-service.service';
import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-create-service-content',
  templateUrl: './create-service-content.component.html',
  styleUrls: ['./create-service-content.component.css']
})
export class CreateServiceContentComponent implements OnInit {

  items;
  relatedCat;
  feature = 'FeatureImage';
  servImg = 'serviceImages';
  apiURL: string;
  uploadsPath: string;

  openModal: boolean;
  placeHolder = 'Press enter after each category';
  placeHolder2 = 'Press enter after each category';
  selectedImages = [];

  showFeatureThumb = false;
  featureImg;
  servImgs = [];

  constructor(
    private addService: AddNewServiceService,
    private modalService: ModalServiceService,
    public constURL: ConstantsService
  ) {
    this.apiURL = this.constURL.URL;
    this.uploadsPath = this.modalService.uploadsFilePath;
  }

  ngOnInit() {
  }

  openUploadModal(inputID) {
      this.openModal = true;
      this.modalService.getInputId(inputID);
      // console.log(inputID);
  }

  closeUploadModal(event) {
    this.openModal = event;
    // console.log(this.openModal);
  }

  getImagesFromModal(event) {
    this.selectedImages = event;
    // console.log(this.selectedImages);
  }

  inputRequesting(event) {
    if (event === 'FeatureImage') {
        this.showFeatureThumb = true;
        this.featureImg = this.selectedImages[0];
    }else if (event === 'serviceImages') {
        this.servImgs = this.selectedImages;
    }

  }

}
