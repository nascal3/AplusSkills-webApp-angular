import { Component, OnInit, ElementRef } from '@angular/core';
import { AddNewServiceService } from '../../services/add-new-service.service';
import { ModalServiceService } from '../../services/modal-service.service';

@Component({
  selector: 'app-create-service-content',
  templateUrl: './create-service-content.component.html',
  styleUrls: ['./create-service-content.component.css']
})
export class CreateServiceContentComponent implements OnInit {
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
    private elem: ElementRef,
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

  uploadImage() {
    this.showSpinner = false;
    this.showIcon = true;
    const files = this.elem.nativeElement.querySelector('#selectfile').files;
    const formData = new FormData();
    const file = files[0];
    formData.append('selectfile', file, file.name);
    this.addService.uploadFile(formData).subscribe(res => {
      this.showSpinner = true;
      this.showIcon = false;
      this.filename = res._body;
      console.log(res);
    });
  }

  changeListner() {
        const files = this.elem.nativeElement.querySelector('#selectfile').files;
        const file = files[0];
        this.filename = file.name;
        console.log(file.name);
    }

}
