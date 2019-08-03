import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  listingForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.listingForm = this.fb.group({
      id: '1',
      address: this.fb.group({
        street: '3200 lenox rd',
        city: 'Atlanta',
        state: 'GA',
        zipCode: '30324',
      }),
      images: '4.jpg,1.jpg,2.jpg,3.jpg',
      price: '180000',
      SqFtArea: '6000',
      lat: '34.56767',
      long: '-67.454',
      bed: '3',
      bath: '2.5'

    })
  }

  AddListing() {
    let model = this.listingForm.value;

  }
}
