/// <reference path="../../appmodels/CourseComponent.Model/CourseSingleModel.ts" />
import { Injectable } from '@angular/core';

import { LessonModel, DraftModel } from '../../AppModels/ProfileComponent.Model/LessonModel';
import { CustomeServerCallService } from './CustomeServerCallService';
import { CustomeHttpService } from './custome-http.service';
@Injectable()
export class CarriculamCourseService {

  constructor(private customeHttpService: CustomeHttpService) {  }
    draftModel: any;
    getStats(): string
    {
        return '/assets/images/statistics.png';
    }
    getDollar(): string
    {
        return '/assets/images/dollar.png';
    }
    getNoti(): string
    {
        return '/assets/images/noti.png';
    }
    getDots(): string
    {
        return 'assets/images/dots.png';
    }

    //private customeServerCallService: CustomeServerCallService = null;
    //constructor(customeServerCallService: CustomeServerCallService) {
    //    this.customeServerCallService = customeServerCallService;
    //}
    activeLessonList: any[] = [];
    getactiveLessonList(userId, customeServerCallService)
    {
        return customeServerCallService.createGeneralGetRequestArgForAttributeRoute(userId, 'api/Lessons/GetByUserId');

    }
    getAllCariculam(userId, customeServerCallService)
    {
        return customeServerCallService.createGeneralGetRequestArgForAttributeRoute(userId, 'api/Cariculams/GetAllcarriculamByUserId');

    }
    getCourseById(courseId) {
      return this.customeHttpService.createGeneralGetRequestArgForAttributeRoute(courseId, 'api/Courses/GetCourseById');


    }
    saveCourse(obj, customeServerCallService) {
        return customeServerCallService.createGeneralRequest(obj, 'api/Courses');

    }
    updateCourse(obj, customeServerCallService) {
        return customeServerCallService.createGeneralRequest(obj, 'api/Courses/update');

    }


}

