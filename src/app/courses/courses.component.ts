import { Component } from '@angular/core';
import { COURSES } from '../model/Courses';
import { COURSE } from '../model/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses: COURSE[] = COURSES;
}
