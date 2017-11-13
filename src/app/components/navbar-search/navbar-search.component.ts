import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.css']
})
export class NavbarSearchComponent implements OnInit {
  @Output() searchPhrase = new EventEmitter<string>();
  searchTerm: string;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  keyDownFunction(event) {
    if(event.keyCode === 13) {
      // sent search term to nav bar on enter key press
      if (this.searchTerm) {
        this.searchPhrase.emit(this.searchTerm);
      }
    }
  }

}
