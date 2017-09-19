import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyServiceService } from '../../services/company-service.service';
import {OwlCarousel} from 'ngx-owl-carousel';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-company-page',
  templateUrl: './view-company-page.component.html',
  styleUrls: ['./view-company-page.component.css']
})
export class ViewCompanyPageComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  lat: number;
  lng: number;
  values: any[];

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
      // console.log(this.values);
      this.getMapMarker();
    });
  }

  getMapMarker() {
    for (const v of this.values ) {
          this.lat = parseFloat(v.geo.lat);
          this.lng = parseFloat(v.geo.lng);
    }
  }
  prevPicture() {
    this.owlElement.previous([200]);
  }

  nextPicture() {
    this.owlElement.next([200]);
  }

}
