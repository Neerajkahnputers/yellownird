import { LocalStorage } from './LocalStorage';
import { Injectable } from '@angular/core';

@Injectable()

export class ActiveUser {
    private USERKEY = 'utoken';
    private localStorage: LocalStorage = new LocalStorage();
    public profile: any = this.initialize();
    saveUser() {
        // console.log()'saveUserCalled');
        this.localStorage.add(this.USERKEY, this.profile);

    }
    saveOTP() {
        // console.log()'saveUserCalled');
        this.localStorage.add(this.USERKEY, this.profile);

    }

    removeUser() {
        localStorage.removeItem(this.USERKEY);
    }
    public localUser: any = null;

    initialize() {
        // console.log()'Profile Initialization Called');
        const user = {
            activeUser: {},
            activeUserAdd: {},
            username: '',
            UserID: '',
            token: '',
            get loggedIn() {
                return this.token ? true : false;
            }
        };

        this.localUser = this.localStorage.get(this.USERKEY);
        if (this.localUser) {
            user.activeUser = this.localUser.activeParker;
            user.activeUserAdd = this.localUser.activeParkerAdd;
            user.UserID = this.localUser.UserID;
            user.username = this.localUser.username;
            user.token = this.localUser.token;
        }
        return user;
    }





}

