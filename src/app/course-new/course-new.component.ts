import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CourseServiceNew } from '../Services/courses/course.service';
import { DraftModel } from '../AppModels/CreditCardComponent.Model/SingleModel';
import { LessonSharedService } from '../Services/lesson/lesson-shared.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ProfileService } from '../Services/profile.service';
import { ActiveUser } from '../Services/Common/ActiveUser';
import { CustomeServerCallService } from '../Services/common/CustomeServerCallService';
declare var $: any;
declare var alertify: any;
@Component({
    selector: 'app-course-new',
    templateUrl: './course-new.component.html',
    styleUrls: ['./course-new.component.css'],
    providers: [ActiveUser, ProfileService, CustomeServerCallService]
})
export class CourseNewComponent implements OnInit {
  public profile: any = {};
  public newl = true;
  public displayname= true;
  public editname = false;
  public displaycontent= true;
  public editcontent= false;
  public Shownewlesson = false;
  public selecteddrafts = [];
  public firstname;
  public lastname;
  public UserId: any= '';
    private courseDetail$: Observable<any>;
    public activeUser: ActiveUser;
    constructor(private courseServiceNew: CourseServiceNew,
        private lessonService: LessonSharedService,
        private route: ActivatedRoute, private profileService: ProfileService,
        activeUser: ActiveUser
    ) {
        this.activeUser = activeUser;
    }
    Initialize()
    {
        this.profileService.getProfileByUserId(this.UserId)
        .subscribe(res => {
          res = res.json();
          // console.log()res);
          this.profile = res;
          }
          );
          const data = {
            FirstName: this.firstname,
            LastName: this.lastname,
          };
    }
    get selectedOptions() {
    return this.selecteddrafts
              .filter(opt => opt.checked)
              .map(opt => opt.value);
  }
  changeTextArea() {
    if ($('#btnchange').val() == 'Edit') {
      //$('#comment').prop('disabled', false);
      $('#btnchange').val('Save');
      this.displaycontent = false;
      this.editcontent = true;
      this.displayname = false;
      this.editname = true;

    }
    else {
      //ToDo do the save part
     // $('#comment').prop('disabled', true);
      $('#btnchange').val('Edit');
      this.UserId = this.activeUser.initialize().UserID;
      this.route.params.subscribe(a => {
        this.courseId = a['id'];
    });
      this.courseServiceNew.updateCourse(this.courseId)
      .subscribe(a => {
          this.currentCourse = a.json();
          // console.log()this.currentCourse);
        });
      this.displaycontent = true;
      this.editcontent = false;
      this.displayname = true;
      this.editname = false;
    }
  }
    public IsTable7 = 'active';
    public IsTable8 = '';
    private currentCourse: any= {};
    private courseId: string;
    ngOnInit() {
        this.UserId = this.activeUser.initialize().UserID;
        this.Initialize();
        this.route.params.subscribe(a => {
            this.courseId = a['id'];
        });
        this.courseServiceNew.getCourseById(this.courseId)
            .subscribe(a => {
                this.currentCourse = a.json();
                // console.log()this.currentCourse);
            });
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
                addToSelectedDraft(draft)
            {

                // console.log()this.selecteddrafts);
                this.selecteddrafts.push(draft);
                // console.log()this.selecteddrafts);

            }
            selectionChange(input: HTMLInputElement, draft, i)
            {
                input.checked === true ? this.doSomethingIfTrue(draft) : this.doSomethingIfFalse(draft);
               
            }
            doSomethingIfTrue(draft)
            {
                this.selecteddrafts.push(draft);
                // console.log()this.selecteddrafts);
            }
            doSomethingIfFalse(draft)
            {

                this.selecteddrafts.splice(this.selecteddrafts.indexOf(draft), 1);
                // console.log()this.selecteddrafts);
            }
            AddtoStaging(){
                // console.log()this.selecteddrafts);
                this.lessonService.AddToStaging(this.selecteddrafts).subscribe(res =>
                    {
                       res = res.json();
                        for (const element in this.selecteddrafts)
                        {
                           // console.log()element);
                        }
                       alert(res);
                       alertify.alert('Incubator Says', 'Staging Complete! Lessons Moved From Draft To Active Lessons', function(){ window.location.reload(); });

                     }, err => {
                     });

            }
}
