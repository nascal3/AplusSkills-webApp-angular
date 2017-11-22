import {Component, Input, OnInit} from '@angular/core';
import { SearchServiceService } from '../../services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  filterResults: any;
  searchTerm: string;

  constructor(
    private searchSrv: SearchServiceService
  ) {
    this.getSearchTerm(this.searchTerm);
  }

  ngOnInit() {

  }

  getFilterResults(event) {
      this.filterResults = event;
  }

  getSearchTerm(term) {
      this.searchTerm = this.searchSrv.searchPhrase;
  }

}
