import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {
  lists: any[] = [];
  constructor( private http: HttpClient) { }

  getlistingFromZipCode(){
     return this.http.get('/api/PropertyListings');
  }
}


// [
//   {
//     id: 1,
//     street: '3200 lenox rd',
//     city: 'Atlanta',
//     state: 'GA',
//     zipCode: 30324,
//     images: ['4.jpg', '1.jpg', '2.jpg', '3.jpg' ],
//     price: 180000,
//     SqFtArea: 6000,
//     lat: 34.56767,
//     long: -676.454,
//     bed: 3,
//     bath: 2.5
//   },
//   {
//     id: 2,
//     street: '123 main street',
//     city: 'Atlanta',
//     state: 'GA',
//     zipCode: 30324,
//     images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
//     price: 160000,
//     SqFtArea: 6000,
//     bed: 3,
//     bath: 3
//   },
//   {
//     id: 3,
//     street: '234 Briarcliff road',
//     city: 'Atlanta',
//     state: 'GA',
//     zipCode: 30324,
//     images: ['2.jpg', '1.jpg', '3.jpg', '4.jpg'],
//     price: 460000,
//     SqFtArea: 6000,
//     bed: 3,
//     bath: 2.5
//   },
//   {
//     id: 4,
//     street: '10 peachtree road',
//     city: 'Atlanta',
//     state: 'GA',
//     zipCode: 30324,
//     images: [ '3.jpg', '1.jpg', '2.jpg', '4.jpg'],
//     price: 100000,
//     SqFtArea: 6000,
//     bed: 1,
//     bath: 1.5
//   },
  // {
  //   id: 1,
  //   street: '3200 lenox rd',
  //   city: 'Atlanta',
  //   state: 'GA',
  //   zipCode: 30324,
  //   images: ['5.jpg', '1.jpg', '2.jpg', '3.jpg' ],
  //   price: 180000,
  //   SqFtArea: 6000,
  //   bed: 3,
  //   bath: 2.5
  // },
  // {
  //   id: 2,
  //   street: '123 main street',
  //   city: 'Atlanta',
  //   state: 'GA',
  //   zipCode: 30324,
  //   images: ['6.jpg', '2.jpg', '3.jpg', '4.jpg'],
  //   price: 160000,
  //   SqFtArea: 6000,
  //   bed: 3,
  //   bath: 3
  // },
//];
