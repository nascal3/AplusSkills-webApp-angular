import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-service-page',
  templateUrl: './single-service-page.component.html',
  styleUrls: ['./single-service-page.component.css']
})
export class SingleServicePageComponent implements OnInit {

  offer = false;
  review = true;

  constructor() { }

  ngOnInit() {
  }

  showOffer() {
    this.review === false ? this.offer = false : this.review = true;
    this.review = true;
  }

   showReviews() {
      this.review = false;
      this.offer === false ? this.offer = true : this.review = false;
  }
}
