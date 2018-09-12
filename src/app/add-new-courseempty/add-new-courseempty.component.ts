import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CourseServiceNew } from '../Services/courses/course.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router/';
import { CustomeServerCallService } from '../services/common/CustomeServerCallService';
import { ActiveUser } from '../services/common/ActiveUser';
import { CarriculamCourseService } from '../services/common/course.service';
import { FormEncode } from '../services/common/FormEncode';
import { NotificationService } from '../services/common/notification.service';
declare var $: any;
declare var alertify: any;
@Component({
  selector: 'app-add-new-courseempty',
  providers: [ActiveUser, FormEncode, CarriculamCourseService, NotificationService,
    ],
  templateUrl: './add-new-courseempty.component.html',
  styleUrls: ['./add-new-courseempty.component.css']
})
export class AddNewCourseemptyComponent implements OnInit {
  public SaveorEdit = 'Save';
  public showLessonDiv = false;
  @Input('ActiveCarriculamId') ActiveCarriculamId: any;
  public currentCourse: any = {};
  private UserId: any = '';
  public newCourse: any ;
 public disableForm = false;
  constructor(private courseServiceNew: CourseServiceNew, private router: Router,
    private route: ActivatedRoute,
    private activeUser: ActiveUser, private notificationService: NotificationService
  )
  {  this.carriculamId = this.route.snapshot.params['id'];
  this.newCourse = {
    CourseName: '',
    CourseContent: '',
    UserId : this.activeUser.profile.UserID,
    CarriculamId : this.carriculamId
  };
  }
  private carriculamId: any;
  ngOnInit() {
    // this.route.params.subscribe(a => {
    //   this.carriculamId = a['id'];
    // });
  }
  backtocources() {
    this.router.navigateByUrl('/Library');
  }



  SaveCourse() {

    if (this.newCourse.CourseName == '' || this.newCourse.CourseName == null )
    {
      alertify.alert('Incubator Says', 'Course Name cannot be empty');
      return true;

    }
    if (this.newCourse.CourseContent == '' || this.newCourse.CourseContent == null)
    {
      alertify.alert('Incubator Says', 'Course Content cannot be empty');
      return true;
    }
    //this.courseServiceNew.SaveCourse(this.newCourse);

    try {
      if (this.SaveorEdit == 'Edit') {
        if (this.disableForm){
          this.disableForm = false;
          this.SaveorEdit = 'Save';
          return;
        }
      } else {
        if (typeof(this.newCourse.Id ) != 'undefined')
        {

        this.courseServiceNew.getCourseById(this.newCourse.Id)
        .map(a => a.json())
        .subscribe(a => {
              if (a != null){
                  a.CourseName = this.newCourse.CourseName;
                  a.CourseContent = this.newCourse.CourseContent;
                  this.courseServiceNew.updateCourse(this.newCourse)
                  .subscribe(res => {

                  this.disableForm = true;
                  this.SaveorEdit = 'Edit';

                }, err => {  });
              }
              else{
                this.newCourse.UserID = this.activeUser.profile.UserID;
                this.newCourse.CarriculamId = this.carriculamId;
                this.courseServiceNew.SaveCourse(this.newCourse)
                .subscribe(res => {
                this.newCourse = res.json();
                this.disableForm = true;
                this.showLessonDiv = true;
                this.SaveorEdit = 'Edit';
              }, err => {  });
              }
            });
        }
        else{
            this.newCourse.UserID = this.activeUser.profile.UserID;
            this.newCourse.CarriculamId = this.carriculamId;

            this.courseServiceNew.SaveCourse(this.newCourse)
            .subscribe(res => {
            this.showLessonDiv = true;
            this.newCourse = res.json();
            this.disableForm = true;
            this.SaveorEdit = 'Edit';
          }, err => {  });
        }
      }
    }
    catch (e) {
      this.notificationService.error('There is some error in processing your request !');
    }
  }


  showAddLesson() {
  }
}
