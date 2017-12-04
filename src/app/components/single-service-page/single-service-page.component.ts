import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../../services/search-result.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-single-service-page',
  templateUrl: './single-service-page.component.html',
  styleUrls: ['./single-service-page.component.css']
})
export class SingleServicePageComponent implements OnInit {

  pageNum = 1;
  itemsOnPage = 1;
  textTrim = 275;
  offer = false;
  review = true;
  id: string;
  service = [];
  message: string;
  stuff: any;
  apiUrl: string;

  constructor(
    public searchRes: SearchResultService,
    public route: ActivatedRoute,
    public router: Router,
    public cons: ConstantsService
  ) {
    this.apiUrl = this.cons.URL;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getResSrv();
  }

  showOffer() {
    this.review === false ? this.offer = false : this.review = true;
    this.review = true;
  }

   showReviews() {
      this.review = false;
      this.offer === false ? this.offer = true : this.review = false;
  }

  getResSrv() {
    this.searchRes.getService(this.id).subscribe( res => {
      this.stuff = res;
      this.service = [this.stuff];
      console.log(this.service);
    }, err => {
        this.router.navigate(['error']);
    });
  }

  goToPage( roleID, serviceID ) {
     //got To Company or professional page depending on what value "role" has
    roleID === 30 ? this.router.navigate(['company/'+serviceID]) : this.router.navigate(['professional/'+serviceID]);
  }

   pageChanged(event) {
    this.pageNum = event;
  }

}
