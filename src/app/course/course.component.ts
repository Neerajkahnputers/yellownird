/// <reference path="../appmodels/CourseComponent.Model/CourseSingleModel.ts" />
/// <reference path="../services/common/course.service.ts" />


import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActiveModel } from '../appmodels/CourseComponent.Model/CourseSingleModel';
import { CarriculamCourseService } from '../services/common/course.service';
import { DraftModel } from '../AppModels/ProfileComponent.Model/LessonModel';
import { ActiveUser } from '../Services/common/ActiveUser';
import { FormEncode } from '../Services/common/FormEncode';
import { CustomeServerCallService } from '../Services/common/CustomeServerCallService';
import { NotificationService } from '../services/common/notification.service';
declare var $: any;
@Component
    (
    {
        providers: [ActiveUser, FormEncode, CarriculamCourseService,
            CustomeServerCallService, NotificationService],
        selector: 'course-Detail',
        templateUrl: './course.component.html'
    }
    )
export class CourseComponent {
    activeLessonList: any[];
    changeTextArea() {
        if ($('#btnchange').val() == 'Edit') {

            $('#comment').prop('disabled', false);
            $('#btnchange').val('Save');
        }
        else {
            //ToDo do the save part

            $('#comment').prop('disabled', true);
            $('#btnchange').val('Edit');
        }


    }
    public courseService: CarriculamCourseService = null;
    constructor(activeUser: ActiveUser,
        customeServerCallService: CustomeServerCallService,
        courseService: CarriculamCourseService,
       private notificationService: NotificationService
    ) {

        this.activeUser = activeUser;
        this.courseService = courseService;
        this.customeServerCallService = customeServerCallService;
        this.UserId = this.activeUser.profile.UserID;
    }

    public LessonList: any[] = [];
    public DraftList: any[] = [];
    private activeUser: ActiveUser;
    public StatsImage: string = null;
    public DollarImage: string = null;
    public NotiImage: string = null;
    public DotsImage: string = null;
    public IsTable7 = '';
    public IsTable8 = '';
    private UserId: any = '';
    public draftList: any[];
    private customeServerCallService: CustomeServerCallService;
    public acti = true;
    public draf = true;
    public newl = true;
    public addtostaging = false;
    public dele = false;
    public arch = false;
    // for Adding Lesson
    public Shownewlesson = false;
    //
    @Input('ActiveCourseId') ActiveCourseId: any;
    public currentCourse: any = {};

    @Output() BackToCources: EventEmitter<any> = new EventEmitter<any>();

    GetCourseDetail(id) {

        const observable = this.courseService.getCourseById(id);
        observable.subscribe(res => this.successGetCourseDetail(res),
            err => this.errorIGetCourseDetail(err));
    }

    successGetCourseDetail(responsea) {

        const response = JSON.parse(responsea._body);

        this.currentCourse = response;

        // this.ShowCoursesList = false;

    }
    errorIGetCourseDetail(error) {
        alert(error);
    }
    ngOnInit(): void {
        this.StatsImage = this.courseService.getStats();
        this.DollarImage = this.courseService.getDollar();
        this.NotiImage = this.courseService.getNoti();
        this.DotsImage = this.courseService.getDots();


        this.IsTable7 = 'active';
        // console.log()this.IsTable7);
        this.GetCourseDetail(this.ActiveCourseId);

    }
    showAddLesson() {
        this.Shownewlesson = true;

    }
    staging()
    {

        this.acti = false;
        this.draf = false;
        this.newl = false;
        this.addtostaging = true;
        this.dele = true;
        this.arch = true;
    }
    stagingcomplete()
    {
        alert('Staging Complete');
    }
    backtocourses() {
      try {
        this.BackToCources.emit('ShowCoursesList');
        // console.log()'mouseclick called');
      }
      catch (e) {
        this.notificationService.error('There is some error in processing your request !');
      }
      }

    archive()
    {

            this.acti = true;
            this.draf = true;
            this.newl = true;
            this.addtostaging = false;
            this.dele = false;
            this.arch = false;
            this.IsTable7 = 'active';
            this.IsTable8 = '';



    }

    public changeComponentsCourse(data: boolean): void {
        alert(data);
        this.Shownewlesson = data;


    }
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

}
