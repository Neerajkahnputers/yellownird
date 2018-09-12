import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { CustomeHttpService } from '../Common/custome-http.service';

@Injectable()
export class ProfilesharedService {
  private subject = new BehaviorSubject({});
  public profile$: Observable<any> = this.subject.asObservable();
  constructor(private customeServerCallService: CustomeHttpService) { }
  getProfile(UserId) {
     return  this.customeServerCallService.createSecuredGetRequest('api/incubators/GetIncubatorByUserId/' + UserId,
        null).do(a => {
          this.subject.next(a);
        });


  }

}
