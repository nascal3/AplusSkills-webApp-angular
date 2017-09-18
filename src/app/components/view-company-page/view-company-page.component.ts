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
  @ViewChild('owlElement') owlElement: OwlCarousel
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
      console.log(values);
    });
  }

  prevPicture() {
    this.owlElement.previous([200]);
  }

  nextPicture() {
    this.owlElement.next([200]);
  }

}
