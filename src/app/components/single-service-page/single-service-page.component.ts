import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../../services/search-result.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-service-page',
  templateUrl: './single-service-page.component.html',
  styleUrls: ['./single-service-page.component.css']
})
export class SingleServicePageComponent implements OnInit {

  pageNum = 1;
  itemsOnPage = 1;
  textTrim = 300;
  offer = false;
  review = true;
  id: string;
  service: any;

  constructor(
    public searchRes: SearchResultService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getResSrv();
  }

  showOffer() {
    this.review === false ? this.offer = false : this.review = true;
    this.review = true;
  }

   showReviews() {
      this.review = false;
      this.offer === false ? this.offer = true : this.review = false;
  }

  getResSrv() {
    this.searchRes.getService(this.id).subscribe( res => {
      this.service = res;
      console.log(res);
    });
  }

   pageChanged(event) {
    this.pageNum = event;
  }

}
