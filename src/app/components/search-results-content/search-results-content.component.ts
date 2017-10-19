import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';
import { NouisliderComponent } from 'ng2-nouislider';
import { Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-search-results-content',
  templateUrl: './search-results-content.component.html',
  styleUrls: ['./search-results-content.component.css']
})
export class SearchResultsContentComponent implements OnInit {

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

  getSearchResutlts() {
     this.searchServ.getSearchResults().subscribe( res => {
     this.services = res;
     this.numOfServices = this.services.length;
     // console.log(res);
    });
  }

  pageChanged(event) {
    this.pageNum = event;
  }

}
