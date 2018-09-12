import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { User } from '../AppModels/User';
import { FormEncode } from '../Services/common/FormEncode';
import { ActiveUser } from '../Services/common/ActiveUser';
import { LocalStorage } from '../Services/common/LocalStorage';
import { ApplicationConfiguration } from '../RootObjects/application.Configuration';
import { CustomeServerCallService } from '../Services/common/CustomeServerCallService';
import { Http } from '@angular/http';
import { PatternValidator, EmailValidator } from '@angular/forms/src/directives/validators';
import { Validators } from '@angular/forms/src/validators';
import {FormControl} from '@angular/forms';
import { ProfilesharedService } from '../Services/profile/profileshared.service';
import { LoadingService } from '../Services/Common/loading.service';
declare var alertify: any;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [CustomeServerCallService, FormEncode, ActiveUser, ProfilesharedService]
})
export class LoginComponent implements OnInit {
    currentUser: User = null;
    private http: Http = null;
    private window: any;
    private activeUser: ActiveUser;
    private formEncodeService: FormEncode = null;
    private customeServerCallService: CustomeServerCallService = null;
    private message: string = null;
    private loginProviders: any;
    private showotpConfiemationBox = false;
    private OTP: string;
    private les = false;
    private stag = false;
    @Output('close-Modal')
    closemodal: EventEmitter<Object> = new EventEmitter<Object>();
    @Output('loadingStatusChange')
    loadingStatusChange: EventEmitter<Object> = new EventEmitter<Object>();
    @Output('register-In')
    selected: EventEmitter<Object> = new EventEmitter<Object>();
    @Output('unreg-citation')
    selectcitation: EventEmitter<Object> = new EventEmitter<Object>();
    responseData: any;
    constructor(
        customeServerCallService: CustomeServerCallService,
        private profilesharedservice: ProfilesharedService,
        formEncodeService: FormEncode,
        private loadingservice:LoadingService,
        activeUser: ActiveUser,
        http: Http) {
        this.activeUser = activeUser;
        this.http = http;
        this.customeServerCallService = customeServerCallService;
        this.formEncodeService = formEncodeService;
        this.currentUser = new User();
        // console.log()'LoginComponent');
    }
    private that = this;
    externalLogin(p) {
        const data = {
            provider: p,
            error: ''
        };
        const observable = this.customeServerCallService
            .createGeneralGetRequest(data, 'api/Account/ExternalLogin/');
        observable.subscribe(res => this.getLoginProvidersSuccesss(res),
            res => this.getLoginProviderserror(res));
    }
    submit() {
        this.loadingservice.toggleLoader(true);
        // console.log()'login called');
        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (this.currentUser.EmailId == '' && this.currentUser.Password == '')
    
        alertify.alert('Incubator Says', 'Email Address and Password Is Required');
        else if (this.currentUser.EmailId == '')
           alertify.alert('Incubator Says', ' Email Address Is Required');
        else if (this.currentUser.Password == '')
           alertify.alert('Incubator Says', ' Password Is Required');
           else if (!EMAIL_REGEXP.test(this.currentUser.EmailId))
           alertify.alert('Incubator Says', 'Email Address is not in Correct Format');
         else{
                const observable = this.customeServerCallService.login(this.currentUser.EmailId,
                    this.currentUser.Password);
                observable.subscribe(res => this.successLogin(res),
                    err => this.error(err));
           }
           this.loadingservice.toggleLoader(false);
        //this.successLoginTest();
        //setTimeout(location.assign(this.applicationConfiguration.APPLICATIONURL),3000);
    }
    error(err) {
        this.loadingservice.toggleLoader(false);
        alertify.alert('Incubator Says', 'Incorrect Email Address or Password!');
    }
    private applicationConfiguration = new ApplicationConfiguration();
    closeModalFunction() {
        this.closemodal.emit();
    }
    successLogin(response1) {
        this.loadingservice.toggleLoader(false);
        const response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = response.UserName;
        this.activeUser.profile.UserID = response.UserID;
        this.activeUser.profile.token = response.Token;
        this.activeUser.saveUser();
        this.profilesharedservice.getProfile(this.activeUser.profile.UserID = response.UserID).subscribe(a => {
            this.selected.emit();
            location.assign(this.applicationConfiguration.APPLICATIONURL);

        });
        //location.assign(this.applicationConfiguration.APPLICATIONURL);

    }
    successLoginTest() {
        // var response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = 'Test';
        this.activeUser.profile.token = 'TestToken';
        this.activeUser.saveUser();
        this.selected.emit();
    }
    showRegisterForm() {
        this.selected.emit(true);
    }
    ngOnInit() {
    }
    clear() {
        this.currentUser = new User();
    }
    getLoginProvidersSuccesss(res) {
        this.loginProviders = JSON.parse(res._body);
    }
    getLoginProviderserror(error) {
    }
    getLoginProviders() {
        const observable = this.customeServerCallService.createGeneralRequest(null, 'api/Utility/GetLoginProviders');
        observable.subscribe(res => this.getLoginProvidersSuccesss(res),
            res => this.getLoginProviderserror(res));
    }
    public auth2: any;
    public attachSignin(element) {
        this.auth2.attachClickHandler(element, {},
            googleUser => {
                const profile = googleUser.getBasicProfile();
                alert(profile.getId());
                // console.log()'Token || ' + googleUser.getAuthResponse().id_token);
                // console.log()'ID: ' + profile.getId());
                // console.log()'Name: ' + profile.getName());
                // console.log()'Image URL: ' + profile.getImageUrl());
                // console.log()'Email: ' + profile.getEmail());
                //YOUR CODE HERE
                this.externalLogin(profile.getEmail());
            },
            error => {
                alert(error);
                alert(JSON.stringify(error, undefined, 2));
            });
    }
    showUnregCitationForm() {
        this.selectcitation.emit(true);
    }
    //ngAfterViewInit() {
    //    $.getScript('../CoreAssets/js/material-dashboard.js');
    //    $.getScript('../CoreAssets/js/demo.js');
    //    $.getScript('../CoreAssets/js/Homejs.js');
    //}
}
