import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter-leftsidebar',
  templateUrl: './search-filter-leftsidebar.component.html',
  styleUrls: ['./search-filter-leftsidebar.component.css']
})
export class SearchFilterLeftsidebarComponent implements OnInit {

  priceRange: number[] = [20000, 80000];
  distanceRange: number[] = [10, 40];
  starsCount: number;
  location: string;
  category: string;
  offer: boolean;
  morning: string;
  afternoon: string;
  evening: string;

  priceRangeConfig: any = {
  behaviour: 'drag',
  connect: true,
  step: 10000,
  margin: 10000,
  range: {min: 0, max: 100000},
  start: [0, 100000]
  };

  distanceRangeConfig: any = {
  behaviour: 'drag',
  connect: true,
  step: 5,
  margin: 5,
  range: {min: 0, max: 50},
  start: [0, 50]
  };

  scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };

  constructor() { }

  ngOnInit() {
  }

}
