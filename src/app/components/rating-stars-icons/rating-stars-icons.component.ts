import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars-icons',
  templateUrl: './rating-stars-icons.component.html',
  styleUrls: ['./rating-stars-icons.component.css']
})
export class RatingStarsIconsComponent implements OnInit {

  @Input('service') service;

  constructor() { }

  ngOnInit() {
  }

}
