import { Injectable } from '@angular/core';
import { ActiveUser } from './ActiveUser';
import { FormEncode } from './FormEncode';
import { RegisterModal } from '../../appmodels/registerModal';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { ApplicationConfiguration } from '../../rootobjects/application.Configuration';
declare function showNotificationsuccess(froma: string, align: string, message: string): void;
declare function showNotificationerror(froma: string, align: string, message: string): void;
declare var $: any;
@Injectable()
export class CustomeHttpService {
    private applicationConfiguration: ApplicationConfiguration = new ApplicationConfiguration();
    constructor(
        private activeUser: ActiveUser,
        private http: Http
    ) {
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
    createGeneralPutRequest(user, apiPath) {
    
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
                put(this.applicationConfiguration.WEBAPIURL + apiPath, JSON.stringify(user), options);
        }
    }
    createPostRequestforContent(obj, apiPath) {
    
        // console.log()"request" + JSON.stringify(obj));
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
      //  const data = this.formEncodeService.EncodeData(user);
        // with async data streams
        return this.http.
            get(this.applicationConfiguration.WEBAPIURL + apiPath + user, options);
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
                UserName: username,
                Password: password
            };
        return this.createGeneralRequest(data, 'api/Account/Login');
    }
    logout() {
        this.activeUser.profile.username = '';
        this.activeUser.profile.token = '';
        this.activeUser.removeUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);
    }
}
