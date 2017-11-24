import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { CompanyServiceService } from '../../services/company.service';
import {OwlCarousel} from 'ngx-owl-carousel';
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
  id: number;
  lat: number;
  lng: number;
  values;
  images: Array<Image>;



  constructor(
    public route: ActivatedRoute,
    public comServe: CompanyServiceService,
    public router: Router
  ) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getCompany();
  }

  getCompany() {
    this.comServe.getValues(this.id).subscribe(values => {
      this.values = values;
      this.getMapMarker();
      // console.log(this.values[1]);
    }, err =>{
      this.router.navigate(['error']);
      console.error(err);
    });
  }

  getMapMarker() {
    for (const v of this.values ) {
      this.lat = parseFloat(v.geo.lat);
      this.lng = parseFloat(v.geo.lng);

      const arra = [];
      const imagex = {};
      const key = ['img'];
      let i = 0;
      for (i; i < v.compics.length; i++) {
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
