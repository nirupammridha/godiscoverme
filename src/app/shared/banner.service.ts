import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  apiBaseUrl = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

   // get country
   getBanner(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}api/banner/get-banner`);
  }
}
