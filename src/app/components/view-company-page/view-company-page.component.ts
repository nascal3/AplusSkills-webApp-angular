import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../../services/company-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-company-page',
  templateUrl: './view-company-page.component.html',
  styleUrls: ['./view-company-page.component.css']
})
export class ViewCompanyPageComponent implements OnInit {

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

}
