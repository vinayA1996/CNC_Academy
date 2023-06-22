import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseUrl: string = 'https://cnc-academy2.onrender.com/course';
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get(`${this.baseUrl}/get`);
  }
}
