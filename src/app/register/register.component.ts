import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { RegisterModal } from '../AppModels/registerModal';
import { FormEncode } from '../Services/common/FormEncode';
import { ActiveUser } from '../Services/common/ActiveUser';
import { LocalStorage } from '../Services/common/LocalStorage';
import { CustomeServerCallService } from '../Services/common/CustomeServerCallService';
declare function showNotificationsuccess(froma: string, align: string, message: string): void;
declare function showNotificationerror(froma: string, align: string, message: string): void;
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [CustomeServerCallService, ActiveUser,
      FormEncode,
      LocalStorage]
})
export class RegisterComponent implements AfterViewInit {
    user: RegisterModal = null;
    private http: Http = null;
    private formEncodeService: FormEncode = null;
    private customeServerCallService: CustomeServerCallService = null;
    private message: string = null;
    @Output('register-In')
    selected: EventEmitter<Object> = new EventEmitter<Object>();
    @Output('unreg-citation')
    selectcitation: EventEmitter<Object> = new EventEmitter<Object>();
    constructor(
        customeServerCallService: CustomeServerCallService,
        formEncodeService: FormEncode,
        http: Http) {
        this.http = http;
        this.customeServerCallService = customeServerCallService;
        this.formEncodeService = formEncodeService;
        this.user = new RegisterModal();
        // console.log()'RegisterComponent');
    }
    submit() {
        this.message = this.customeServerCallService.register(this.user);
    } showLoginForm() {
        showNotificationsuccess('top', 'right', 'we are redirecting You Just a Moment..');
        this.selected.emit(false);
    }
    showUnregCitationForm() {
        showNotificationsuccess('top', 'right', 'we are redirecting You Just a Moment..');
        this.selectcitation.emit(true);
    }
    ngAfterViewInit() {
        //$.getScript('../CoreAssets/js/material-dashboard.js');
        //$.getScript('../CoreAssets/js/demo.js');
        //$.getScript('../CoreAssets/js/Homejs.js');
    }
    error(err) {
        this.user = new RegisterModal();
        alert(JSON.stringify(err));
    }
    success(res) {
    }
    clear() {
        this.user = new RegisterModal();
    }
}

