import { CustomeHttpService } from './../Common/custome-http.service';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { debug } from 'util';
import { Router, RouterModule } from '@angular/router';
import { routing } from '../../app.routing';
import { LoadingService } from '../Common/loading.service';

declare var alertify: any;
declare var $;
@Injectable()
export class LessonSharedService {

  private subject = new BehaviorSubject({});
  public lesson$: Observable<any> = this.subject.asObservable();
  private ShowLessonSubject = new BehaviorSubject(false);
  private ShowCancelSubject = new BehaviorSubject(false);
  public ShowLesson$: Observable<boolean> = this.ShowLessonSubject.asObservable();
  public  ShowCancel$: Observable<boolean> = this.ShowCancelSubject.asObservable();
  lesson: any= {};
  closeModalFunc() {
   // $.getScript('assets/bootstrap.js');
   $('#savelessonsmodal').modal('hide');
}
  constructor(private customeHttpService: CustomeHttpService, 
    private loadingService:LoadingService,
    private router: Router) {

   }
  saveCurrentLesson(lesson: any) {
    this.subject.next(lesson);
    this.lesson$.subscribe(a => this.lesson = a);
  }
  public ToggelLessonButton(val) {
      this.ShowLessonSubject.next(val);
    }
    public ToggleCancelButton(val)
    {
     this.ShowCancelSubject.next(val);
    }

    GetLessonById(id) {
     // ToDo: getlessonById
    // after getting response as res this.subject.next(res);
    }
  saveLesson() {
    if (this.lesson.LessonName === '' || this.lesson.LessonName == null) 
    {
      alertify.alert('Incubator Says', 'Lesson Name is Required for submission');
      return true;
    }
    this.loadingService.toggleLoader(true);
    this.customeHttpService.createPostRequestforContent(this.lesson, 'api/LessonsNew').subscribe(res => {
        // tslint:disable-next-line:no-debugger
        res = res.json();
        console.log("Resp" + res);
        this.closeModalFunc();
        this.loadingService.toggleLoader(false);
        alertify.alert('Incubator Says', 'Lesson Saved In Draft Successfully');
        this.router.navigateByUrl('/DashboardComponent');
      }, err => {
        this.loadingService.toggleLoader(false);
      });
  }
  AddToStaging(lesson) {
       return this.customeHttpService.createPostRequestforContent(lesson, 'api/LessonsNew/Addtostaging')
        .do(res => res.json());
      }
 
}
