/// <reference path="../../assets/css/file1.ts" />
import { Component, OnInit } from '@angular/core';
import { ActiveUser } from '../Services/Common/ActiveUser';
import { CustomeServerCallService } from '../Services/Common/CustomeServerCallService';
import { CarriculamCourseService } from '../Services/Common/course.service';
import { FormEncode } from '../Services/Common/FormEncode';
import { NotificationService } from '../services/common/notification.service';
declare var $: any;
@Component({
    selector: 'library-Component',
    providers: [ActiveUser, FormEncode, CarriculamCourseService, NotificationService,
        CustomeServerCallService],
    templateUrl: './library.component.html',
    styleUrls: [
        './library.component.css'
    ]
})
export class LibraryComponent implements OnInit {
    private lessonList: any[];
    private courseList: any[];
    public curriculumList: any[];
    public ShowCoursesList = true;
    public ShowCurrentCourse = false;
    public ShowaddCourse = false;
    public LessonList: any[] = [];
    public DraftList: any[] = [];
    public StatsImage: string = null;
    public DollarImage: string = null;
    public NotiImage: string = null;
    public DotsImage: string = null;
    public IsTable7 = '';
    public IsTable8 = '';
    private UserId: any = '';
    public draftList: any[];
    public currentCourse: any;
    public ActiveCourseId: any;
    public ActiveCarriculamId: any;
    public IsAddCourse = false;
    constructor(private activeUser: ActiveUser,
      private customeServerCallService: CustomeServerCallService,
      private courseService: CarriculamCourseService,
      private notificationService: NotificationService
      ) {
        this.UserId = this.activeUser.profile.UserID;
    }
    private newCourse: any = {};
    ngOnInit(): void {
        this.lessonList = [];
        this.StatsImage = this.courseService.getStats();
        this.DollarImage = this.courseService.getDollar();
        this.NotiImage = this.courseService.getNoti();
        this.DotsImage = this.courseService.getDots();
        this.IsTable7 = 'active';
        // console.log()this.IsTable7);
        this.Initialize();
    }
    public FinancePositionNumber = 2;
    public InsuranceNumber = 1;
    changeTab(tabId) {
        if (tabId == 'IsTable7' && this.IsTable7 != 'active') {
            this.IsTable7 = 'active';
            this.IsTable8 = '';
        }
        else if (tabId == 'IsTable8' && this.IsTable8 != 'active') {
            this.IsTable8 = 'active';
            this.IsTable7 = '';
        }
    }
    credit() {
        location.href = '/CreditCard';
        // console.log()'mouseclick called');
    }
    public changeComponents(data: any): void {
      try {
        if (data == 'ShowCurrentCourse') {
          this.ShowCoursesList = false;
          this.ShowaddCourse = false;
          this.ShowCurrentCourse = true;
        }
        else if (data == 'ShowaddCourse') {
          this.ShowCoursesList = false;
          this.ShowaddCourse = true;
          this.ShowCurrentCourse = false;
        }
        else {
          this.Initialize();
          this.ShowCoursesList = true;
          this.ShowaddCourse = false;
          this.ShowCurrentCourse = false;
        }
      }
      catch (e) {
        this.notificationService.error('There is some error in processing your request !');
      }
    }
    ChangeShowCoursesList(courseId) {
      try {
        this.ActiveCourseId = courseId;
        this.changeComponents('ShowCurrentCourse');
      }
      catch (e) {
        this.notificationService.error('There is some error in processing your request !');
      }
    }
    addcourse(id) {
      try {
        this.ActiveCarriculamId = id;
        this.changeComponents('ShowaddCourse');
        // console.log()'mouseclick called');
      }
      catch (e) {
        this.notificationService.error('There is some error in processing your request !');
      }
    }
    BackToCarriculam() {
      try {
        this.IsAddCourse = false;
        // console.log()'mouseclick called');
      }
      catch (e) {
        this.notificationService.error('There is some error in processing your request !');
      }
    }
    Initialize() {
        const observable = this.courseService.getAllCariculam(this.UserId, this.customeServerCallService);
        observable.subscribe(res => this.successInitialize(res),
            err => this.errorInitialize(err));
    }
    successInitialize(responsea) {
        const response = JSON.parse(responsea._body);
        this.curriculumList = response;
        //  this.ShowCoursesList = false;
        //   this.DraftList = response.DraftList;
    }
    errorInitialize(error) {
        //alert(error);
    }
}
export class Curriculum {
    public Id: string;
    public Name: string;
    public Cources: Cource[];
}
export class Cource {
    public CourseName: string;
    public Id: string;
}



