import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConstantsService } from '../../services/constants.service';
import { ModalServiceService } from '../../services/modal-service.service';
import {FileHolder} from 'angular2-image-upload/lib/image-upload/image-upload.component';
import { AddNewServiceService } from '../../services/add-new-service.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.css']
})
export class UploadModalComponent implements OnInit {
  @Output() modalValue = new EventEmitter();

  showUpTab: boolean;
  showSelTab: boolean;
  active = 'tabActive';
  active2 = 'tabInactive';
  NumSelectedImg: number;
  activex: boolean;
  response;
  Imagefiles;
  selectedImages = [];
  res = [];
  apiURL: string;
  uploadURL;


  constructor(
    public modalService: ModalServiceService,
    public addService: AddNewServiceService,
    public constURL: ConstantsService
  ) {
    this.getAllImages();
    this.apiURL = this.constURL.URL;
    this.uploadURL = this.apiURL + 'fileUpload.php';
  }

  ngOnInit() {
  }

  imageFinishedUploading(file: FileHolder) {
    this.getAllImages();
    // console.log(JSON.stringify(file.serverResponse));
    this.response = file.serverResponse;
    this.res = this.response._body;
    console.log(this.response._body);
  }

  getAllImages() {
    this.addService.getImageFiles().subscribe(files => {
      this.Imagefiles = files;
    });

  }

  getImageName(imagename: string) {
    this.selectedImages.unshift(imagename);
    const i = this.selectedImages.filter( item => item === imagename).length;
    if (i >= 2) {
        this.selectedImages = this.selectedImages.filter(function(item) {
          return item !== imagename;
        });
    }
    this.NumSelectedImg = this.selectedImages.length;
    console.log(this.selectedImages);
  }

  moveImageToForm() {
    this.modalValue.emit(false);

  }

  showUploadTab() {
      this.showUpTab = false;
      this.showSelTab = false;
      this.active = 'tabActive';
      this.active2 = 'tabInactive';
  }

  showSelectTab() {
      this.showSelTab = true;
      this.showUpTab = true;
      this.active = 'tabInactive';
      this.active2 = 'tabActive';
  }

  closeModal() {
    this.modalValue.emit(false);
    this.selectedImages = [];
    this.getAllImages();
  }

}
