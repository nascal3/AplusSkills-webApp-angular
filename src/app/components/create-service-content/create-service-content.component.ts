import { Component, OnInit } from '@angular/core';
import { AddNewServiceService } from '../../services/add-new-service.service';
import { ModalServiceService } from '../../services/modal-service.service';
import { ConstantsService } from '../../services/constants.service';
import { NewService } from '../../model/NewService';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router } from '@angular/router';

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
  uploadsFilePath: string;

  openModal: boolean;
  placeHolder = 'Press enter after each category';
  placeHolder2 = 'Press enter after each category';
  selectedImages = [];

  showFeatureThumb = false;
  featureImg;
  servImgs = [];

  service: NewService = {
    name: '',
    items: [],
    offer: false,
    price: null,
    description: '',
    fImg: '',
    relatedCat: [],
    sImgs: []
  };

  constructor(
    private addService: AddNewServiceService,
    private modalService: ModalServiceService,
    public constURL: ConstantsService,
    public flashMessage: FlashMessagesService,
    public router: Router
  ) {
    this.apiURL = this.constURL.URL;
    this.uploadsFilePath = this.modalService.uploadsFilePath;
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

  onSubmit({value, valid}: {value: NewService, valid: boolean}) {
      if (valid) {
        if ( value.items.length < 1 || value.relatedCat.length < 1 ) {
             // Stop form from premature posting
        }else if (this.featureImg === '' || this.featureImg == null) {
             // Stop form from posting if feature image is missing
             console.log('feature image missing');
             console.log(this.featureImg);
            this.flashMessage.show('ERROR! Please provide feature image!', {classes: ['alert', 'alert-danger'], timeout: 5000 });
        }else if (this.servImgs.length < 1 ) {
            // Stop form from posting if services images are missing
           this.flashMessage.show('ERROR! Please provide service images!', {classes: ['alert', 'alert-danger'], timeout: 5000});
        }else {
          value.fImg = this.featureImg;
          value.sImgs = this.servImgs;
          this.addService.createNewService(value).subscribe(res => {
            console.log(res);
          });
          console.log(value);
          this.flashMessage.show('New service successfully created.', {classes: ['alert', 'alert-success'], timeout: 5000});
          this.router.navigate(['createservice']);

        }
      }else {
        this.flashMessage.show('ERROR! Please fill form befor submitting it', {classes: ['alert', 'alert-danger'], timeout: 5000});
        // console.log(valid);
      }
  }

}
