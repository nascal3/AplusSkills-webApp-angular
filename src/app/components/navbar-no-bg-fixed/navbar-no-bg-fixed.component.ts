import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from '../../services/search.service';

@Component({
  selector: 'app-navbar-no-bg-fixed',
  templateUrl: './navbar-no-bg-fixed.component.html',
  styleUrls: ['./navbar-no-bg-fixed.component.css']
})
export class NavbarNoBgFixedComponent implements OnInit {
  @Output() searchText = new EventEmitter<string>();

  constructor(
    public searchSrv: SearchServiceService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  // Get phrase from search input field
  searchPhrase(phrase) {
     // Send search term to search page
    this.searchSrv.setSearchPhrase(phrase);
    this.searchText.emit(phrase);
    this.router.navigate(['search']);

  }

}
