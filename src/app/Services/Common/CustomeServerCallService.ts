
import { ActiveUser } from './ActiveUser';
import { FormEncode } from './FormEncode';
import { RegisterModal } from '../../appmodels/registerModal';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApplicationConfiguration}  from '../../rootobjects/application.Configuration';
declare function showNotificationsuccess(froma: string, align: string, message: string): void;
declare function showNotificationerror(froma: string, align: string, message: string): void;
declare var $: any;

@Injectable()
export class CustomeServerCallService
{
    private applicationConfiguration: ApplicationConfiguration = new ApplicationConfiguration();

    private http: Http = null;
    private activeUser: ActiveUser;
    private formEncodeService: FormEncode;
    constructor(
        formEncodeService: FormEncode,
        activeUser: ActiveUser,
        http: Http) {
        // console.log()'CustomeServerCallService');
        this.http = http;
        this.activeUser = activeUser;
        this.formEncodeService = formEncodeService;
        // console.log()'CustomeServerCallService');
        //$.getScript('../CoreAssets/js/material-dashboard.js');
        //$.getScript('../CoreAssets/js/demo.js');
        //$.getScript('../CoreAssets/js/Homejs.js');
    }
    processToken(username) {
        // console.log()this.activeUser.profile.token);
        return response => {
            this.activeUser.profile.username = username;
            this.activeUser.profile.token = response.data.access_token;
            this.activeUser.saveUser();
            // console.log()this.activeUser.profile.token);
            return username;
        };
    }

    createGeneralRequest(user, apiPath) {
        const headers = new Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        const options = new RequestOptions({ headers: headers });


        // with async data streams
        if (user == null) {
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        }
        else {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, JSON.stringify(user), options);
        }
    }
    createPostRequestforContent(obj, apiPath) {

        // with async data streams
        if (obj != null) {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, obj);
        }
    }
    createGeneralGetRequest(user, apiPath) {
        const headers = new Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        const options = new RequestOptions({ headers: headers });

        const data = this.formEncodeService.EncodeData(user);
        // with async data streams

        return this.http.
            get(this.applicationConfiguration.WEBAPIURL + apiPath + data, options);

    }
    createGeneralGetRequestArg(arg, apiPath) {
        const headers = new Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });

        const params = new URLSearchParams();
        Object.getOwnPropertyNames(arg).map((key: string) => params.set(key, arg[key]));

        const options = new RequestOptions({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params  // <-----
        });

        // with async data streams
        // console.log()params);
        return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);

    }

    createGeneralGetRequestArgForAttributeRoute(arg, apiPath) {
        const headers = new Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath + '/' + arg);

    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' +
            this.activeUser.profile.token);
        headers.append('Content-Type', 'application/json');
    }
    createSecuredRequest(apiPath, data) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.activeUser.profile.token
        });

        const options = new RequestOptions({ headers: headers });
        if (data != null)
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, data, { headers });
        else
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, null, { headers });

    }
    createSecuredGetRequest(apiPath, data) {

        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        const options = new RequestOptions({ headers: headers });

        if (data == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);

    }
    createSecuredGetRequestArg(apiPath, arg) {

        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        //let options = new RequestOptions({ headers: headers });

        const params = new URLSearchParams();
        Object.getOwnPropertyNames(arg).map((key: string) => params.set(key, arg[key]));

        const options = new RequestOptions({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params  // <-----
        });


        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);

    }

    login(username, password) {

        const data =
            {
            EmailId: username,
            Password: password
            };
        return this.createGeneralRequest(data, 'api/Account/Login');

        // filter , copy , subscribe
        //return observable.subscribe(res => this.successLogin(res),
        //    err => this.error(err));


    }
    register(user: RegisterModal) {
        try {

            const observable = this.createGeneralRequest(user, 'api/Account/Register');
            observable.subscribe(res => this.successRegister(res),
                res => this.error(res));
            return 'Welcome';

        } catch (e) {
            return e.message;
        }

    }
    error(err) {
        showNotificationerror('top', 'right', err);
        // console.log()'ErrorCalled');

    }

    successLogin(response1) {
        showNotificationsuccess('top', 'right', 'we are redirecting You Just a Moment..');
        const response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = response.UserName;
        this.activeUser.profile.token = response.Token;
        this.activeUser.profile.activeParker = response.parker;
        this.activeUser.profile.activeParkerAdd = response.parkerAdd;
        this.activeUser.saveUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL + '/Dashboard');

    }
    successRegister(response1) {

        const response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = response.UserName;
        this.activeUser.profile.token = response.Token;
        this.activeUser.saveUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);
        // console.log()'processTokenended');
    }

    logout() {
        this.activeUser.profile.username = '';
        this.activeUser.profile.token = '';
        this.activeUser.removeUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);

    }

}
