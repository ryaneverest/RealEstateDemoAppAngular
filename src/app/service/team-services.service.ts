import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service } from '../model/services.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
 baseUrl = 'http://localhost:3000/teamMember/';
  constructor(private router: Router, private http: HttpClient) { }

  getServices(): Observable<Service[]> {
   return this.http.get<Service[]>(this.baseUrl);
  }
  addServices(model: Service): Observable<Service> {
    return this.http.post<Service>(this.baseUrl, model);
  }
  editServices(model: Service): Observable<Service> {
    return this.http.put<Service>(this.baseUrl + model.id, model);
  }
  deleteServices(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }

}
