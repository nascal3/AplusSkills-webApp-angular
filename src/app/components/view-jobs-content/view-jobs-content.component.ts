import { Component, OnInit } from '@angular/core';
import { ViewJobsserviceService } from '../../services/view-jobs.service';
import {Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-jobs-content',
  templateUrl: './view-jobs-content.component.html',
  styleUrls: ['./view-jobs-content.component.css']
})
export class ViewJobsContentComponent implements OnInit {
  pageNum = 1;
  itemsOnPage =  4;
  readMore = true;
  viewMoreTxt = 'View More';
  sliceCharacters = 280;
  jobReqs;

  constructor(
    public viewJobsReq: ViewJobsserviceService,
    public router: Router
  ) {
    this.getjobs();
  }

  ngOnInit() {
  }

  getjobs () {
    this.viewJobsReq.getJobRequests().subscribe(res => {
      this.jobReqs = res;
      // console.log(this.jobReqs);
    });
  }

  showMore() {
    this.readMore = ! this.readMore;
    this.readMore ? this.viewMoreTxt = 'View More' :  this.viewMoreTxt = 'View Less';
  }

  goToPage(role , id: string) {
    //got To Company or professional page depending on what value "role" has
    role === 30 ? this.router.navigate(['company/'+id]) : this.router.navigate(['professional/'+id]);
    // alert(role +' '+ id);
  }

  pageChanged(event) {
    this.pageNum = event;
  }

}
