import { Component, OnInit } from '@angular/core';
import { ProfessionalServiceService } from '../../services/professional.service';
import {OwlCarousel} from 'ngx-owl-carousel';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-professional-page',
  templateUrl: './view-professional-page.component.html',
  styleUrls: ['./view-professional-page.component.css']
})
export class ViewProfessionalPageComponent implements OnInit {

  sliceAboutWords = 268;
  sliceBioWords = 92;
  records;
  constructor(
    public prof: ProfessionalServiceService
  ) {
    this.getInfo();
  }

  ngOnInit() {
  }

  getInfo() {
    this.prof.getPro().subscribe(rec => {
      this.records = rec;
      console.log(rec);
    });
  }

}
