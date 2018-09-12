import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfileService } from '../profile.service';
import { ActiveUser } from '../Common/ActiveUser';
@Injectable()
export class AppComponentService {
  public  message1= 'You have got a mail';
  private UserId: any = '';
  public profile: any = {};
  public ProfileImage;
    public photoURL(userId) {
        this.profileService.getProfileByUserId(this.activeUser.initialize().UserID)
        .map(res => {
          res = res.json();
          // console.log()res);
          this.profile = res;
          if (this.profile.ProfileImage == null || this.profile.ProfileImage == '') {
            this.profile.ProfileImage = '/assets/images/nopic.png';
          }
          return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.profile.ProfileImage);
        },
        err => this.errorGetIncubator(err));

    }
    constructor(private sanitizer: DomSanitizer, private profileService: ProfileService,
        private activeUser: ActiveUser)
    {
    }
    errorGetIncubator(err) {
    }
}
