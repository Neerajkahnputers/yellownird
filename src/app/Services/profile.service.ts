import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CustomeServerCallService } from './common/CustomeServerCallService';
import { CustomeHttpService } from './Common/custome-http.service';


@Injectable()
export class ProfileService {
  constructor(private customeServerCallService: CustomeHttpService) { }
  //profile = {};
  //public profile$: Observable<any>;
  //private subject: BehaviorSubject<any> = new BehaviorSubject<any>(this.profile);

   getProfileByUserId(UserId) {
     return this.customeServerCallService.createSecuredGetRequest('api/incubators/GetIncubatorByUserId/' + UserId,
       null);
   }


  getNavImage() {
    return '/assets/images/nav.jpg';
  }

  getNotiImage() {
    return '/assets/images/noti.png';
  }
}
