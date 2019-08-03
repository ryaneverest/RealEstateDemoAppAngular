import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TeamService } from 'src/app/service/team-services.service';
import { DataService } from 'src/app/service/data.service';
declare var $: any;

@Component({
  selector: 'app-team-home',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  services: any[] = [];
  serviceForm: FormGroup;
  showForm = false;
  editMode = false;

  constructor(private servicesCrudService: TeamService,
    private dataService: DataService) {}

  ngOnInit() {
    this.getServices();
    this.serviceForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      jobTitle: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      team: new FormControl('', [Validators.required]),
    });


  }
  displayForm() {
    this.showForm = !this.showForm;
  }

  getServices() {
    this.servicesCrudService.getServices().subscribe(result => {
     this.services = result;
     this.dataService.memberList =  this.services;
  });
}
  addService() {
    const payload = this.serviceForm.value;
    payload.id = this.services.length + 1;
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
