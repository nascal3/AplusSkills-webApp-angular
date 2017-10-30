import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';
import { Observer} from 'rxjs/Observer';
import {isUndefined} from "util";

@Component({
  selector: 'app-search-results-content',
  templateUrl: './search-results-content.component.html',
  styleUrls: ['./search-results-content.component.css']
})
export class SearchResultsContentComponent implements OnInit, OnChanges {
  @Input('filterResults') filterResults;

  pageNum = 1;
  itemsOnPage =  12;
  trimDescription = 60;
  services: any;
  numOfServices: number;

  constructor(
    private searchServ: SearchServiceService
  ) {
     this.getSearchResutlts();
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.services = changes.filterResults.currentValue;
    // this.numOfServices = this.services.length;
    console.log(changes.filterResults.currentValue);
  }

  getSearchResutlts() {
     this.searchServ.getSearchResults().subscribe( res => {
     this.services = res;
     this.numOfServices = this.services.length;
     console.log(res);
    });
  }

  pageChanged(event) {
    this.pageNum = event;
  }

}
