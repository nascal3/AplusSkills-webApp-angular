import { Component, OnInit } from '@angular/core';
import {FileHolder} from 'angular2-image-upload/lib/image-upload/image-upload.component';

@Component({
  selector: 'app-create-service-content',
  templateUrl: './create-service-content.component.html',
  styleUrls: ['./create-service-content.component.css']
})
export class CreateServiceContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imageFinishedUploading(file: FileHolder) {
  console.log(JSON.stringify(file.serverResponse));
}

}
