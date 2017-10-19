import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CompanyServiceService } from '../../services/company-service.service';
import {OwlCarousel} from 'ngx-owl-carousel';
import { Observable } from 'rxjs/Observable';
import {Image, ImageModalEvent} from 'angular-modal-gallery/dist';

@Component({
  selector: 'app-view-company-page',
  templateUrl: './view-company-page.component.html',
  styleUrls: ['./view-company-page.component.css']
})
export class ViewCompanyPageComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;

  openModalWindow = false;
  imagePointer = 0;
  lat: number;
  lng: number;
  values;
  images: Array<Image>;



  constructor(
    public comServe: CompanyServiceService
  ) {
    this.getCompany();
  }

  ngOnInit() {
  }

  getCompany() {
    this.comServe.getValues().subscribe(values => {
      this.values = values;
      this.getMapMarker();
      // console.log(this.values[1]);
    });
  }

  getMapMarker() {
    for (const v of this.values ) {
      this.lat = parseFloat(v.geo.lat);
      this.lng = parseFloat(v.geo.lng);

      let arra = [];
      let imagex = {};
      let key = ['img'];
      let i=0;v
      for (i; i<v.compics.length; i++) {
       imagex['img'] = v.compics[i];
       arra.push(imagex);
      }

      this.images = v.compics;
      console.log(arra);
      console.log(imagex);
    }
  }

  // Make compics object array



  openImageModal(image: Image) {
    this.imagePointer = this.images.indexOf(image);
    console.log(this.imagePointer);
    this.openModalWindow = true;
  }

  onCloseImageModal(event: ImageModalEvent) {
    this.openModalWindow = false;
  }

  prevPicture() {
    this.owlElement.previous([200]);
  }

  nextPicture() {
    this.owlElement.next([200]);
  }
}
