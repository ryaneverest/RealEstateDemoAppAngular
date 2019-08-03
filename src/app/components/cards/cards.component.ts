import { Component, OnInit, Input } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ListingServiceService } from '../../service/listing-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() lists: any;

  constructor() {

  }

  ngOnInit() {
  }

}
