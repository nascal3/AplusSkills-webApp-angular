import { Component, OnInit } from '@angular/core';
import { ProfessionalServiceService } from '../../services/professional.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-professional-page',
  templateUrl: './view-professional-page.component.html',
  styleUrls: ['./view-professional-page.component.css']
})
export class ViewProfessionalPageComponent implements OnInit {

  sliceAboutWords = 268;
  sliceBioWords = 92;
  id: string;
  records;
  constructor(
    public prof: ProfessionalServiceService,
    public route: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getInfo();
  }

  getInfo() {
    this.prof.getPro(this.id).subscribe(rec => {
      this.records = rec;
      // console.log(rec);
    });
  }

}
