import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from '../../services/search.service';

@Component({
  selector: 'app-navbar-no-bg',
  templateUrl: './navbar-no-bg.component.html',
  styleUrls: ['./navbar-no-bg.component.css']
})
export class NavbarNoBgComponent implements OnInit {
  @Output() searchText = new EventEmitter<string>();

  options = {
    closeOnCLick: true,
    animation: 'arrowalt'
  }

  constructor(
    public searchSrv: SearchServiceService,
    public router: Router
  ) {  }

  ngOnInit() {
  }

  private menuItemsArray: any[] = [
       {"title":"Dashboard","link":"dashboard"},
       {"title":"Mobile Bill","link":"#"},
 ];

  public onMenuClose(){
    console.log("menu closed");
  }
  public onMenuOpen(){
    console.log("menu Opened");
  }
  private onItemSelect(item:any){
    this.router.navigate([item.link]);
    console.log(item);
  }

  // Get phrase from search input field
  searchPhrase(phrase) {
     // Send search term to search page
    this.searchSrv.setSearchPhrase(phrase);
    this.searchText.emit(phrase);
    this.router.navigate(['search']);

  }

}
