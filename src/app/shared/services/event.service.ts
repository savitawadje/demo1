import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getEvent } from '../utilities/constant';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getEventList():Observable<any>{
  return this.http.get(environment.BASE_URL+""+getEvent);
  }
}
