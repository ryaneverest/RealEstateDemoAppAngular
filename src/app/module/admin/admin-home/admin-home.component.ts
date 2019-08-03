import { Component, OnInit } from '@angular/core';
import { ServicesCrudService } from '../../../service/our-services.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ImageSlidesComponent } from 'src/app/components/image-slides/image-slides.component';
import { TeamService } from 'src/app/service/team-services.service';
declare var $: any;

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  services: any[] = [];
  serviceForm: FormGroup;
  showForm = false;
  editMode = false;

  constructor(private servicesCrudService: TeamService, public fb: FormBuilder) {}

  ngOnInit() {
    this.getServices();
    this.serviceForm = new FormGroup({
      id: new FormControl('0'),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      jobTitle: new FormControl(''),
      status: new FormControl(''),
      team: new FormControl('')

    });


  }
  displayForm() {
    this.showForm = !this.showForm;
  }

  getServices() {
    this.servicesCrudService.getServices().subscribe(result => {
     this.services = result;
  });
}
  addService() {
    const payload = this.serviceForm.value;
    if (!this.serviceForm.valid) {
      alert('Form is not filled');
      return;
    }
    this.servicesCrudService.addServices(payload).subscribe(result => {
      if (result) {
        alert('Added');
        this.showForm = false;
      }
    });
  }
  editService() {
    const payload = this.serviceForm.value;
    this.servicesCrudService.editServices(payload).subscribe(result => {
      if (result) {
        alert('Service Edited');
        this.editMode = false;
      }
    });
  }
  public showEditForm(payload: any) {
    this.editMode = true;
    this.showForm = true;
    this.serviceForm.patchValue({
      id: payload.id,
      title: payload.title,
      description: payload.description,
      images: payload.images
    });
  }

  deleteService(id) {

    this.servicesCrudService.deleteServices(id).subscribe(result => {
      if (result) {
        this.getServices();
        alert('Deleted');
      }
    });
  }
  updateForm(value) {
  }
}
