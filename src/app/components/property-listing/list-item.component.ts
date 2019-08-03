import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { ListingServiceService } from '../../service/listing-service.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  lists: any;
   userInput: string;
  // marker = [{ lat: 34.678634456021264, lng: -83.46017155665186, draggable: true },
  // { lat: 34.70573404733071, lng: -84.16329655665186, draggable: true },
  // { lat: 34.39808647495746, lng: -85.21798405665186, draggable: true },
  // { lat: 34.543003496714405, lng: -84.05343327540186, draggable: true },
  // { lat: 34.107498760715934, lng: -84.22921452540186, draggable: true },
  // { lat: 34.2892337072772, lng: -83.26241765040186, draggable: true },
  // { lat: 34.57919341496496, lng: -81.43868718165186, draggable: true }];

  constructor(private router: ActivatedRoute, private listingService: ListingServiceService) {
    this.userInput = this.router.snapshot.params.id;
  }

  ngOnInit() {
    this.listingService.getlistingFromZipCode().subscribe(result => {
      this.lists = result;
    });
  }
  getMarkersList(markers) {
    console.log('Markers Added; ', markers);
    console.log('Markers Json; ', JSON.stringify(markers));
  }


}
