import { Injectable } from '@angular/core';
import { CustomeHttpService } from '../Common/custome-http.service';
import { Http } from '@angular/http';
import { ApplicationConfiguration } from '../../RootObjects/application.Configuration';


@Injectable()
export class CourseServiceNew {
  private applicationConfiguration: ApplicationConfiguration = new ApplicationConfiguration();
  constructor(private http: Http, private customeHttpService: CustomeHttpService) {

    }
    SaveCourse(obj){
      return this.customeHttpService.createGeneralRequest(obj, 'api/Courses');
    }
    updateCourse(obj){
      return this.customeHttpService.createGeneralRequest(obj, 'api/Courses/Update');
    }
    getCourseById(courseId) {
      //const headers = new Headers({
      //  'Content-Type': 'application/json; charset=utf-8'
      //});
      //if (courseId == null)
      //    return this.http.get(this.applicationConfiguration.WEBAPIURL + 'api/Courses/GetCourseById');
      //else
      //    return this.http.get(this.applicationConfiguration.WEBAPIURL + 'api/Courses/GetCourseById' + '/' + courseId);
        return this.customeHttpService.createGeneralGetRequestArgForAttributeRoute(courseId, 'api/Courses/GetCourseById');

    }

    updateCourseById(courseId)
    {
      return this.customeHttpService.createGeneralRequest(courseId, 'api/Courses/Update');
    }
}
