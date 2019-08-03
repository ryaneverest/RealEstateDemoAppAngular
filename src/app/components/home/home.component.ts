import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServicesCrudService } from '../../service/our-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  services: any[] = [];

  constructor(private servicesCrudService: ServicesCrudService) { }
  ngOnInit() {
    this.servicesCrudService.getServices().subscribe(result => {
      this.services = result;
   });
  }

}
