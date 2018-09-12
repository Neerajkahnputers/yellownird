
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CarriculamCourseService } from '../Services/Common/course.service';
import { CourseServiceNew } from '../Services/courses/course.service';


@Injectable()
export class CourcesResolver implements Resolve<any> {

  constructor(private courseService: CourseServiceNew) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      return this.courseService.getCourseById(route.params['id']);
  }
}
