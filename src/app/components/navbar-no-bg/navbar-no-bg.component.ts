import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar-no-bg',
  templateUrl: './navbar-no-bg.component.html',
  styleUrls: ['./navbar-no-bg.component.css']
})
export class NavbarNoBgComponent implements OnInit {
  @Output() searchText = new EventEmitter<string>();

  constructor(
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  // Get phrase from search input field
  searchPhrase(phrase) {
     // Send search term to search page
    this.searchText.emit(phrase);
    this.router.navigate(['search']);

  }

}
