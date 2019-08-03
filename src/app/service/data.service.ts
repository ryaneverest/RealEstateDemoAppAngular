import { Injectable } from '@angular/core';
import { Member } from '../model/member.model';


@Injectable()
export class DataService {
public memberList: Member[];
  constructor() { }

}
