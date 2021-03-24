import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// User interface
// export class Job {
//   title: String;
//   location: String;
//   job_type: String;
//   category: String;
//   description: String;
//   compensation_from: String;
//   compensation_to: String;
//   currency: String;
//   frequency: String;
//   compensation_show: String;
//   additional_info: String;
//   company_name: String;
//   company_url: String;
//   upload_file: String;
//   contact_email: String
// }

@Injectable({
  providedIn: 'root'
})
export class JobService {
  apiBaseUrl = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  // User registration
  jobpost(formData: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}api/job/jobpost`, formData);
  }
  // get country
  getCountry(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}api/job/get-country`);
  }
  // get country
  getCategory(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}api/job/get-category`);
  }
}
