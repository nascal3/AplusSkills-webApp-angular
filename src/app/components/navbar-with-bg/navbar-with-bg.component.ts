import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from '../../services/search.service';

@Component({
  selector: 'app-navbar-with-bg',
  templateUrl: './navbar-with-bg.component.html',
  styleUrls: ['./navbar-with-bg.component.css']
})
export class NavbarWithBgComponent implements OnInit {
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
