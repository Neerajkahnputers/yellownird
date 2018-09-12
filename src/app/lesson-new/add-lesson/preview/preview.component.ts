import { LessonSharedService } from './../../../Services/lesson/lesson-shared.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponentService } from '../../../Services/shared-service/app-component.service';
import { ActiveUser } from '../../../Services/Common/ActiveUser';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProfileService } from '../../../Services/profile.service';
import { CustomeServerCallService } from '../../../Services/common/CustomeServerCallService';
import { DomSanitizer } from '@angular/platform-browser';
import {TemplateNewComponent} from '../template-new/template-new.component';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  providers: [ActiveUser, ProfileService, CustomeServerCallService]
})
export class PreviewComponent implements OnInit, AfterViewInit {
  photoURL() {
    return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.profile.ProfileImage);
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
      ProfileImagePath: this.profileimage
    };
}

  ngAfterViewInit(): void {
    this.photoUrl = this.sharedService.photoURL(this.activeUser.initialize().UserID);
  }
  public activeUser: ActiveUser;
  constructor(private lessonSharedService: LessonSharedService,
    private sanitizer: DomSanitizer,
    private profileService: ProfileService,
    private sharedService: AppComponentService, activeUser: ActiveUser )
  {
    this.activeUser = activeUser;

  }
  public lesson: any = {};
  public currentSegmentIndex= 0;
  public indexToGo= 0;
  public currentcomment: string;
  public commentlist = [];
  public photoUrl;
  public UserId: any= '';
  public profile: any = {};
  public firstname: string;
  public lastname: string;
  public profileimage;
  public post:boolean = false;
  ngOnInit() {
    this.lessonSharedService.lesson$.subscribe(
      a => {
        this.lesson = a;
      });   
      this.UserId = this.activeUser.initialize().UserID;
      this.photoUrl = this.sharedService.photoURL(this.activeUser.profile.UserID);
    this.Initialize();
  }
  ngDoCheck(): void {
    this.lessonSharedService.saveCurrentLesson(this.lesson);
  }
  incrementIndex(){
    if ((this.currentSegmentIndex + 1) < (this.lesson.Segments.length))
    this.currentSegmentIndex ++;
  }
  goToIndex(index){
    if (index == 0)
    return;
    if (index > this.lesson.Segments.length)
    return;
    this.currentSegmentIndex = index - 1;
  }
  decrementIndex(){
    if (this.currentSegmentIndex > 0)
       this.currentSegmentIndex --;
  }
 
  postcurrentcomment(currentcomment)
  {
    this.commentlist.push(currentcomment);
    this.currentcomment = '';
    // console.log()this.commentlist);
  }

}

