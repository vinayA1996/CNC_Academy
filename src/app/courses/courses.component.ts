import { Component, OnInit } from '@angular/core';
import { COURSES } from '../model/Courses';
import { COURSE } from '../model/Course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  courses: any;

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        console.log(courses);
        this.courses = courses;
      },
    });
  }
}
