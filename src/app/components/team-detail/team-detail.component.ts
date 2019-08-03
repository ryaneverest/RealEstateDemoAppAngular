import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TeamService } from 'src/app/service/team-services.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  services: any[] = [];
  serviceForm: FormGroup;
  showForm = false;
  editMode = false;

  constructor(private servicesCrudService: TeamService, public fb: FormBuilder) {}

  ngOnInit() {
    this.serviceForm = new FormGroup({
      id: new FormControl(),
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
        alert('Deleted');
      }
    });
  }
  updateForm(value) {
  }
}
