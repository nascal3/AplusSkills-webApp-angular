import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';
import { Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-search-results-content',
  templateUrl: './search-results-content.component.html',
  styleUrls: ['./search-results-content.component.css']
})
export class SearchResultsContentComponent implements OnInit {

  pageNum = 1;
  itemsOnPage =  4;
  trimDescription = 60;
  services: any;

  constructor(
    private searchServ: SearchServiceService
  ) {
    this.getSearchResutlts();
  }

  ngOnInit() {
  }

  getSearchResutlts() {
     this.searchServ.getSearchResults().subscribe( res => {
      this.services = res;
      // console.log(res);
    });
  }

  pageChanged(event) {
    this.pageNum = event;
  }

}
