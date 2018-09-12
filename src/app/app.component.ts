import { Component } from '@angular/core';
import { ActiveUser } from './Services/Common/ActiveUser';
import { Router, RouterModule } from '@angular/router';
import { AppComponentService } from './Services/shared-service/app-component.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfilesharedService } from './Services/profile/profileshared.service';
import { ProfileService } from './Services/profile.service';
import { LessonSharedService } from './Services/lesson/lesson-shared.service';
import { CustomeServerCallService } from '../app/Services/common/CustomeServerCallService';
import { LoadingService } from './Services/Common/loading.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppComponentService, ProfilesharedService, ProfileService, LoadingService]
})
export class AppComponent {
    photoURL() {
        return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.profile.ProfileImage);
      }
    public showCancelButton = false;
    public showLessonButton = false;
    private activeUser: ActiveUser;
    title = 'Financial education made easy.';

    library() {
        location.href = '/Library';
        // console.log()'mouseclick called');
    }
    public loading = false;
    ShowSideBar = false;
    public hideme = true;
    public hideme2 = true;
    public hideme3 = true;
    public hideme4 = true;
    public hideimage1 = false;
    public isLogged: boolean;
    public hideimage2 = false;
    public profile: any = {};
    public ProfileImage;
    public firstname: string;
    public lastname: string;
    public UserId: any= '';
    public profileimage: any= '';
    Initialize()
    {
        this.profileService.getProfileByUserId(this.UserId)
        .subscribe(res => {
          res = res.json();
          // console.log()res);
          this.profile = res;
          } );

          const data = {
            FirstName: this.firstname,
            LastName: this.lastname,
            ProfileImagePath: this.profileimage
          };
    }
    constructor(activeUser: ActiveUser, private router: Router,
        private lessonSharedService: LessonSharedService,
        private profileService: ProfileService,
        private profilesharedservice: ProfilesharedService, private sanitizer: DomSanitizer,
        private loadingservice:LoadingService
    ) {
        this.activeUser = activeUser;
        this.isLogged = this.activeUser.initialize().loggedIn;
        // console.log()this.isLogged);
    }
    changeLogin() {

        this.isLogged = true;
        this.ShowSideBar = true;
        this.hideme = false;
        this.hideme2 = false;
        this.hideme3 = false;
        this.hideme4 = false;
        this.hideimage1 = true;
        this.hideimage2 = true;
    }
    signOut() {
        this.activeUser.removeUser();
        this.isLogged = this.activeUser.initialize().loggedIn;
        this.router.navigateByUrl('/DashboardComponent');
    }
    closeModalFunc() {
       // $.getScript('assets/bootstrap.js');
        $('#myModal').modal('toggle');
        // console.log()'called');

    }
    open() {

    }
    
      SaveLesson(){
        this.lessonSharedService.saveLesson();
      }
     
    ngOnInit() {
        this.loadingservice.loader$.subscribe(a=>{
               
                this.loading = a;
        })
        this.lessonSharedService.ShowLesson$.subscribe(a => {
            this.showLessonButton = a;
        });
        this.lessonSharedService.ShowCancel$.subscribe(a => {
            this.showCancelButton = a;
        });
             this.profilesharedservice.profile$.subscribe(a => {
               this.profile = a;
            this.ProfileImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.profile.ProfileImage);
             });
             this.UserId = this.activeUser.initialize().UserID;
        $.getScript('assets/bootstrap.js');
        $.getScript('assets/js/modalEffects.js');
        $.getScript('assets/js/retina.js');
        $.getScript('assets/js/classie.js');
        $.getScript('assets/js/modernizr.custom.js');
        $('a').click(function () {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            },
                500); // determines the speed of the scroll
            return false;
        });
        this.Initialize();
    }
  
}
