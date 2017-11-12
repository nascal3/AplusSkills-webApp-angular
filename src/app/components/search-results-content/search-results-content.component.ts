import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-search-results-content',
  templateUrl: './search-results-content.component.html',
  styleUrls: ['./search-results-content.component.css']
})
export class SearchResultsContentComponent implements OnInit, OnChanges {
  @Input('filterResults') filterResults;
  @Input('searchTerm') searchTerm: string;

  pageNum = 1;
  itemsOnPage =  12;
  trimDescription = 60;
  services: any;
  numOfServices: number;

  constructor(
    private searchSrv: SearchServiceService
  ) {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.filterResults) {
      this.services = changes.filterResults.currentValue;
    } else if (changes.searchTerm) {
      this.getSearchResults();
    }
  }

  getSearchResults() {
    this.searchSrv.getSearchResults(this.searchTerm).subscribe( res => {
      this.services = res;
      this.numOfServices = this.services.length;
      console.log(res);
    });

  }

  pageChanged(event) {
    this.pageNum = event;
  }

}
