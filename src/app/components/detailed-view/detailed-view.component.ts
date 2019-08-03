import { Component, OnInit } from '@angular/core';
import { ListingServiceService } from 'src/app/service/listing-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../model/listing.model';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  currentListingId: number;
  currentListing: Listing;
  constructor(public listingServiceService: ListingServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.currentListingId = this.activatedRoute.snapshot.params.id;
    this.currentListing = this.listingServiceService.lists.find(x => x.id == this.currentListingId);
    if (!this.currentListing) { this.router.navigate(['list']) }
  }

  ngOnInit() {
  }

}
