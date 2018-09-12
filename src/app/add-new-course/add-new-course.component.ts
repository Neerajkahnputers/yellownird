import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomeServerCallService } from '../services/common/CustomeServerCallService';
import { ActiveUser } from '../services/common/ActiveUser';
import { CarriculamCourseService } from '../services/common/course.service';
import { FormEncode } from '../services/common/FormEncode';
import { NotificationService } from '../services/common/notification.service';
declare var $: any;
@Component
  (
  {

    selector: 'add-Course',
    templateUrl: './addnewcourse.component.html'
  }
  )
export class AddnewcourseComponent {
  private customeServerCallService: CustomeServerCallService;

  @Input('ActiveCarriculamId') ActiveCarriculamId: any;
  public currentCourse: any = {};
  private activeUser: ActiveUser;
  @Output() BackToCourcesList: EventEmitter<any> = new EventEmitter<any>();
  private UserId: any = '';
  public newCourse: any = {};
  public courseService: CarriculamCourseService = null;
  private Shownewlesson = false;
  public SaveMode = 'Save';
  constructor(activeUser: ActiveUser,
    private notificationService: NotificationService,
    customeServerCallService: CustomeServerCallService,
    courseService: CarriculamCourseService) {

    this.activeUser = activeUser;
    this.courseService = courseService;
    this.customeServerCallService = customeServerCallService;
    this.UserId = this.activeUser.profile.UserID;
  }

  backtocources() {
    try {
      this.BackToCourcesList.emit('ShowCourses');
      // console.log()'mouseclick called');
    } catch (e) {
      this.notificationService.error('There is some error in processing your request !');
    }

  }
  SaveCourse() {

    try {
      if (this.SaveMode == 'Edit') {
        const observablecourse =
          this.courseService.getCourseById(this.ActiveCarriculamId);
        observablecourse.subscribe(res => this.successGetCourse(res),
          err => this.errorSaveCourse(err));

        const observable = this.courseService.saveCourse(this.newCourse, this.customeServerCallService);
        observable.subscribe(res => this.successSaveCourse(res),
          err => this.errorSaveCourse(err));
      } else {
        this.newCourse.UserID = this.activeUser.profile.UserID;
        this.newCourse.CarriculamId = this.ActiveCarriculamId;
        const observable = this.courseService.saveCourse(this.newCourse, this.customeServerCallService);
        observable.subscribe(res => this.successSaveCourse(res),
          err => this.errorSaveCourse(err));
      }
    }
    catch (e) {
      this.notificationService.error('There is some error in processing your request !');
    }

  }

  successSaveCourse(responsea) {
    const response = JSON.parse(responsea._body);
    //this.BackToCourcesList.emit("ShowCoursesList");
    this.SaveMode = 'Edit';
    alert(this.SaveMode);
  }
  errorSaveCourse(error) {
    alert(error);
  }

  successGetCourse(responsea) {
    //var response = JSON.parse(responsea._body);
    this.newCourse = JSON.parse(responsea._body);
  }
  errorGetCourse(error) {
    alert(error);
  }

  showAddLesson() {
    this.Shownewlesson = true;
  }
}
