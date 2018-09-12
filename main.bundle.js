webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/AppModels/CreditCardComponent.Model/SingleModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DraftModel; });
/* unused harmony export Table4Model */
/* unused harmony export Table7Model */
/* unused harmony export Table8Model */
var ActiveModel = (function () {
    function ActiveModel() {
    }
    return ActiveModel;
}());

var DraftModel = (function () {
    function DraftModel() {
    }
    return DraftModel;
}());

var Table4Model = (function () {
    function Table4Model() {
    }
    return Table4Model;
}());

var Table7Model = (function () {
    function Table7Model() {
    }
    return Table7Model;
}());

var Table8Model = (function () {
    function Table8Model() {
    }
    return Table8Model;
}());

//# sourceMappingURL=SingleModel.js.map

/***/ }),

/***/ "../../../../../src/app/AppModels/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.EmailId = '';
        this.Password = '';
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/AppModels/registerModal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModal; });
var RegisterModal = (function () {
    function RegisterModal() {
    }
    return RegisterModal;
}());

//# sourceMappingURL=registerModal.js.map

/***/ }),

/***/ "../../../../../src/app/Pipes/safe-image.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeImagePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SafeImagePipe = (function () {
    function SafeImagePipe() {
    }
    SafeImagePipe.prototype.transform = function (value, args) {
        return null;
    };
    return SafeImagePipe;
}());
SafeImagePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'safeImage'
    })
], SafeImagePipe);

//# sourceMappingURL=safe-image.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/RootObjects/application.Configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationConfiguration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationConfiguration = (function () {
    function ApplicationConfiguration() {
        this.APPLICATIONURL = '';
        this.WEBAPIURL = '';
        this.LessonAutoSegmentSize = 0;
        this.APPLICATIONURL = 'http://www.yellowbird.tk';
        this.WEBAPIURL = 'https://yellowbirdapi.azurewebsites.net/';
        this.LessonAutoSegmentSize = 500;
    }
    return ApplicationConfiguration;
}());
ApplicationConfiguration = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ApplicationConfiguration);

//# sourceMappingURL=application.Configuration.js.map

/***/ }),

/***/ "../../../../../src/app/Services/Common/ActiveUser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LocalStorage__ = __webpack_require__("../../../../../src/app/Services/Common/LocalStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ActiveUser = (function () {
    function ActiveUser() {
        this.USERKEY = 'utoken';
        this.localStorage = new __WEBPACK_IMPORTED_MODULE_0__LocalStorage__["a" /* LocalStorage */]();
        this.profile = this.initialize();
        this.localUser = null;
    }
    ActiveUser.prototype.saveUser = function () {
        // console.log()'saveUserCalled');
        this.localStorage.add(this.USERKEY, this.profile);
    };
    ActiveUser.prototype.saveOTP = function () {
        // console.log()'saveUserCalled');
        this.localStorage.add(this.USERKEY, this.profile);
    };
    ActiveUser.prototype.removeUser = function () {
        localStorage.removeItem(this.USERKEY);
    };
    ActiveUser.prototype.initialize = function () {
        // console.log()'Profile Initialization Called');
        var user = {
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
    };
    return ActiveUser;
}());
ActiveUser = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], ActiveUser);

//# sourceMappingURL=ActiveUser.js.map

/***/ }),

/***/ "../../../../../src/app/Services/Common/CustomeServerCallService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomeServerCallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ActiveUser__ = __webpack_require__("../../../../../src/app/Services/Common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormEncode__ = __webpack_require__("../../../../../src/app/Services/Common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rootobjects_application_Configuration__ = __webpack_require__("../../../../../src/app/rootobjects/application.Configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomeServerCallService = (function () {
    function CustomeServerCallService(formEncodeService, activeUser, http) {
        this.applicationConfiguration = new __WEBPACK_IMPORTED_MODULE_4__rootobjects_application_Configuration__["a" /* ApplicationConfiguration */]();
        this.http = null;
        // console.log()'CustomeServerCallService');
        this.http = http;
        this.activeUser = activeUser;
        this.formEncodeService = formEncodeService;
        // console.log()'CustomeServerCallService');
        //$.getScript('../CoreAssets/js/material-dashboard.js');
        //$.getScript('../CoreAssets/js/demo.js');
        //$.getScript('../CoreAssets/js/Homejs.js');
    }
    CustomeServerCallService.prototype.processToken = function (username) {
        var _this = this;
        // console.log()this.activeUser.profile.token);
        return function (response) {
            _this.activeUser.profile.username = username;
            _this.activeUser.profile.token = response.data.access_token;
            _this.activeUser.saveUser();
            // console.log()this.activeUser.profile.token);
            return username;
        };
    };
    CustomeServerCallService.prototype.createGeneralRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // with async data streams
        if (user == null) {
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        }
        else {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, JSON.stringify(user), options);
        }
    };
    CustomeServerCallService.prototype.createPostRequestforContent = function (obj, apiPath) {
        // with async data streams
        if (obj != null) {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, obj);
        }
    };
    CustomeServerCallService.prototype.createGeneralGetRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = this.formEncodeService.EncodeData(user);
        // with async data streams
        return this.http.
            get(this.applicationConfiguration.WEBAPIURL + apiPath + data, options);
    };
    CustomeServerCallService.prototype.createGeneralGetRequestArg = function (arg, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        Object.getOwnPropertyNames(arg).map(function (key) { return params.set(key, arg[key]); });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params // <-----
        });
        // with async data streams
        // console.log()params);
        return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeServerCallService.prototype.createGeneralGetRequestArgForAttributeRoute = function (arg, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath + '/' + arg);
    };
    CustomeServerCallService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' +
            this.activeUser.profile.token);
        headers.append('Content-Type', 'application/json');
    };
    CustomeServerCallService.prototype.createSecuredRequest = function (apiPath, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.activeUser.profile.token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (data != null)
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, data, { headers: headers });
        else
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, null, { headers: headers });
    };
    CustomeServerCallService.prototype.createSecuredGetRequest = function (apiPath, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (data == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeServerCallService.prototype.createSecuredGetRequestArg = function (apiPath, arg) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        //let options = new RequestOptions({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        Object.getOwnPropertyNames(arg).map(function (key) { return params.set(key, arg[key]); });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params // <-----
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeServerCallService.prototype.login = function (username, password) {
        var data = {
            EmailId: username,
            Password: password
        };
        return this.createGeneralRequest(data, 'api/Account/Login');
        // filter , copy , subscribe
        //return observable.subscribe(res => this.successLogin(res),
        //    err => this.error(err));
    };
    CustomeServerCallService.prototype.register = function (user) {
        var _this = this;
        try {
            var observable = this.createGeneralRequest(user, 'api/Account/Register');
            observable.subscribe(function (res) { return _this.successRegister(res); }, function (res) { return _this.error(res); });
            return 'Welcome';
        }
        catch (e) {
            return e.message;
        }
    };
    CustomeServerCallService.prototype.error = function (err) {
        showNotificationerror('top', 'right', err);
        // console.log()'ErrorCalled');
    };
    CustomeServerCallService.prototype.successLogin = function (response1) {
        showNotificationsuccess('top', 'right', 'we are redirecting You Just a Moment..');
        var response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = response.UserName;
        this.activeUser.profile.token = response.Token;
        this.activeUser.profile.activeParker = response.parker;
        this.activeUser.profile.activeParkerAdd = response.parkerAdd;
        this.activeUser.saveUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL + '/Dashboard');
    };
    CustomeServerCallService.prototype.successRegister = function (response1) {
        var response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = response.UserName;
        this.activeUser.profile.token = response.Token;
        this.activeUser.saveUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);
        // console.log()'processTokenended');
    };
    CustomeServerCallService.prototype.logout = function () {
        this.activeUser.profile.username = '';
        this.activeUser.profile.token = '';
        this.activeUser.removeUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);
    };
    return CustomeServerCallService;
}());
CustomeServerCallService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__FormEncode__["a" /* FormEncode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__FormEncode__["a" /* FormEncode */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ActiveUser__["a" /* ActiveUser */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], CustomeServerCallService);

var _a, _b, _c;
//# sourceMappingURL=CustomeServerCallService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/Common/FormEncode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormEncode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormEncode = (function () {
    function FormEncode() {
        console.log('FormEncode');
    }
    FormEncode.prototype.EncodeData = function (data) {
        var pairs = [];
        for (var name in data) {
            if (data.hasOwnProperty(name)) {
                pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
        }
        return pairs.join('&').replace(/%20/g, '+');
    };
    return FormEncode;
}());
FormEncode = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], FormEncode);

//# sourceMappingURL=FormEncode.js.map

/***/ }),

/***/ "../../../../../src/app/Services/Common/LocalStorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorage = (function () {
    function LocalStorage() {
        this.store = localStorage;
        // console.log()'LocalStorage');
    }
    LocalStorage.prototype.toJson = function (obj, pretty) {
        if (typeof obj === 'undefined')
            return undefined;
        return JSON.stringify(obj, this.toJsonReplacer, pretty);
    };
    LocalStorage.prototype.isWindow = function (obj) {
        return obj && obj.window === obj;
    };
    LocalStorage.prototype.toJsonReplacer = function (key, value) {
        var val = value;
        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
            val = undefined;
        }
        else if (value && value.window === value) {
            val = '$WINDOW';
        }
        else if (value && document === value) {
            val = '$DOCUMENT';
        }
        return val;
    };
    LocalStorage.prototype.add = function (key, value) {
        value = (this.toJson(value, ''));
        this.store.setItem(key, value);
    };
    LocalStorage.prototype.isString = function (value) {
        return typeof value === 'string';
    };
    LocalStorage.prototype.fromJson = function (json) {
        return this.isString(json)
            ? JSON.parse(json)
            : json;
    };
    LocalStorage.prototype.get = function (key) {
        var value = this.store.getItem(key);
        if (value) {
            value = this.fromJson(value);
        }
        return value;
    };
    LocalStorage.prototype.remove = function (key) {
        this.store.removeItem(key);
    };
    return LocalStorage;
}());
LocalStorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalStorage);

//# sourceMappingURL=LocalStorage.js.map

/***/ }),

/***/ "../../../../../src/app/Services/Common/course.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarriculamCourseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custome_http_service__ = __webpack_require__("../../../../../src/app/Services/Common/custome-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../appmodels/CourseComponent.Model/CourseSingleModel.ts" />


var CarriculamCourseService = (function () {
    function CarriculamCourseService(customeHttpService) {
        this.customeHttpService = customeHttpService;
        //private customeServerCallService: CustomeServerCallService = null;
        //constructor(customeServerCallService: CustomeServerCallService) {
        //    this.customeServerCallService = customeServerCallService;
        //}
        this.activeLessonList = [];
    }
    CarriculamCourseService.prototype.getStats = function () {
        return '/assets/images/statistics.png';
    };
    CarriculamCourseService.prototype.getDollar = function () {
        return '/assets/images/dollar.png';
    };
    CarriculamCourseService.prototype.getNoti = function () {
        return '/assets/images/noti.png';
    };
    CarriculamCourseService.prototype.getDots = function () {
        return 'assets/images/dots.png';
    };
    CarriculamCourseService.prototype.getactiveLessonList = function (userId, customeServerCallService) {
        return customeServerCallService.createGeneralGetRequestArgForAttributeRoute(userId, 'api/Lessons/GetByUserId');
    };
    CarriculamCourseService.prototype.getAllCariculam = function (userId, customeServerCallService) {
        return customeServerCallService.createGeneralGetRequestArgForAttributeRoute(userId, 'api/Cariculams/GetAllcarriculamByUserId');
    };
    CarriculamCourseService.prototype.getCourseById = function (courseId) {
        return this.customeHttpService.createGeneralGetRequestArgForAttributeRoute(courseId, 'api/Courses/GetCourseById');
    };
    CarriculamCourseService.prototype.saveCourse = function (obj, customeServerCallService) {
        return customeServerCallService.createGeneralRequest(obj, 'api/Courses');
    };
    CarriculamCourseService.prototype.updateCourse = function (obj, customeServerCallService) {
        return customeServerCallService.createGeneralRequest(obj, 'api/Courses/update');
    };
    return CarriculamCourseService;
}());
CarriculamCourseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custome_http_service__["a" /* CustomeHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custome_http_service__["a" /* CustomeHttpService */]) === "function" && _a || Object])
], CarriculamCourseService);

var _a;
//# sourceMappingURL=course.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/Common/custome-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomeHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActiveUser__ = __webpack_require__("../../../../../src/app/Services/Common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rootobjects_application_Configuration__ = __webpack_require__("../../../../../src/app/rootobjects/application.Configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomeHttpService = (function () {
    function CustomeHttpService(activeUser, http) {
        this.activeUser = activeUser;
        this.http = http;
        this.applicationConfiguration = new __WEBPACK_IMPORTED_MODULE_3__rootobjects_application_Configuration__["a" /* ApplicationConfiguration */]();
    }
    CustomeHttpService.prototype.createGeneralRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // with async data streams
        if (user == null) {
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        }
        else {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, JSON.stringify(user), options);
        }
    };
    CustomeHttpService.prototype.createGeneralPutRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // with async data streams
        if (user == null) {
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        }
        else {
            return this.http.
                put(this.applicationConfiguration.WEBAPIURL + apiPath, JSON.stringify(user), options);
        }
    };
    CustomeHttpService.prototype.createPostRequestforContent = function (obj, apiPath) {
        // console.log()"request" + JSON.stringify(obj));
        // with async data streams
        if (obj != null) {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, obj);
        }
    };
    CustomeHttpService.prototype.createGeneralGetRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //  const data = this.formEncodeService.EncodeData(user);
        // with async data streams
        return this.http.
            get(this.applicationConfiguration.WEBAPIURL + apiPath + user, options);
    };
    CustomeHttpService.prototype.createGeneralGetRequestArg = function (arg, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        Object.getOwnPropertyNames(arg).map(function (key) { return params.set(key, arg[key]); });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params // <-----
        });
        // with async data streams
        // console.log()params);
        return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeHttpService.prototype.createGeneralGetRequestArgForAttributeRoute = function (arg, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath + '/' + arg);
    };
    CustomeHttpService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' +
            this.activeUser.profile.token);
        headers.append('Content-Type', 'application/json');
    };
    CustomeHttpService.prototype.createSecuredRequest = function (apiPath, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.activeUser.profile.token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (data != null)
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, data, { headers: headers });
        else
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, null, { headers: headers });
    };
    CustomeHttpService.prototype.createSecuredGetRequest = function (apiPath, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (data == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeHttpService.prototype.createSecuredGetRequestArg = function (apiPath, arg) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        //let options = new RequestOptions({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        Object.getOwnPropertyNames(arg).map(function (key) { return params.set(key, arg[key]); });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params // <-----
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeHttpService.prototype.login = function (username, password) {
        var data = {
            UserName: username,
            Password: password
        };
        return this.createGeneralRequest(data, 'api/Account/Login');
    };
    CustomeHttpService.prototype.logout = function () {
        this.activeUser.profile.username = '';
        this.activeUser.profile.token = '';
        this.activeUser.removeUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);
    };
    return CustomeHttpService;
}());
CustomeHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ActiveUser__["a" /* ActiveUser */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], CustomeHttpService);

var _a, _b;
//# sourceMappingURL=custome-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/Common/lessons.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LessonsService = (function () {
    function LessonsService() {
    }
    LessonsService.prototype.saveLessons = function (obj, customeServerCallService) {
        alert(JSON.stringify(obj));
        return customeServerCallService.createGeneralRequest(obj, 'api/Lessons/PostLesson');
    };
    LessonsService.prototype.AddToStaging = function (obj, customeServerCallService) {
        alert(JSON.stringify(obj));
        return customeServerCallService.createGeneralRequest(obj, 'api/Lessons/PostLesson');
    };
    return LessonsService;
}());
LessonsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LessonsService);

//# sourceMappingURL=lessons.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/Common/loading.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = (function () {
    function LoadingService() {
        this.loading = false;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](this.loading);
        this.loader$ = this.subject.asObservable();
    }
    LoadingService.prototype.toggleLoader = function (val) {
        this.subject.next(val);
    };
    return LoadingService;
}());
LoadingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LoadingService);

//# sourceMappingURL=loading.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/Common/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.success = function (message) {
        alert(message);
    };
    NotificationService.prototype.error = function (message) {
        alert(message);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/common/ActiveUser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LocalStorage__ = __webpack_require__("../../../../../src/app/Services/common/LocalStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ActiveUser = (function () {
    function ActiveUser() {
        this.USERKEY = 'utoken';
        this.localStorage = new __WEBPACK_IMPORTED_MODULE_0__LocalStorage__["a" /* LocalStorage */]();
        this.profile = this.initialize();
        this.localUser = null;
    }
    ActiveUser.prototype.saveUser = function () {
        // console.log()'saveUserCalled');
        this.localStorage.add(this.USERKEY, this.profile);
    };
    ActiveUser.prototype.saveOTP = function () {
        // console.log()'saveUserCalled');
        this.localStorage.add(this.USERKEY, this.profile);
    };
    ActiveUser.prototype.removeUser = function () {
        localStorage.removeItem(this.USERKEY);
    };
    ActiveUser.prototype.initialize = function () {
        // console.log()'Profile Initialization Called');
        var user = {
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
    };
    return ActiveUser;
}());
ActiveUser = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], ActiveUser);

//# sourceMappingURL=ActiveUser.js.map

/***/ }),

/***/ "../../../../../src/app/Services/common/CustomeServerCallService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomeServerCallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ActiveUser__ = __webpack_require__("../../../../../src/app/Services/common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormEncode__ = __webpack_require__("../../../../../src/app/Services/common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rootobjects_application_Configuration__ = __webpack_require__("../../../../../src/app/rootobjects/application.Configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomeServerCallService = (function () {
    function CustomeServerCallService(formEncodeService, activeUser, http) {
        this.applicationConfiguration = new __WEBPACK_IMPORTED_MODULE_4__rootobjects_application_Configuration__["a" /* ApplicationConfiguration */]();
        this.http = null;
        // console.log()'CustomeServerCallService');
        this.http = http;
        this.activeUser = activeUser;
        this.formEncodeService = formEncodeService;
        // console.log()'CustomeServerCallService');
        //$.getScript('../CoreAssets/js/material-dashboard.js');
        //$.getScript('../CoreAssets/js/demo.js');
        //$.getScript('../CoreAssets/js/Homejs.js');
    }
    CustomeServerCallService.prototype.processToken = function (username) {
        var _this = this;
        // console.log()this.activeUser.profile.token);
        return function (response) {
            _this.activeUser.profile.username = username;
            _this.activeUser.profile.token = response.data.access_token;
            _this.activeUser.saveUser();
            // console.log()this.activeUser.profile.token);
            return username;
        };
    };
    CustomeServerCallService.prototype.createGeneralRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // with async data streams
        if (user == null) {
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        }
        else {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, JSON.stringify(user), options);
        }
    };
    CustomeServerCallService.prototype.createPostRequestforContent = function (obj, apiPath) {
        // with async data streams
        if (obj != null) {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, obj);
        }
    };
    CustomeServerCallService.prototype.createGeneralGetRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = this.formEncodeService.EncodeData(user);
        // with async data streams
        return this.http.
            get(this.applicationConfiguration.WEBAPIURL + apiPath + data, options);
    };
    CustomeServerCallService.prototype.createGeneralGetRequestArg = function (arg, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        Object.getOwnPropertyNames(arg).map(function (key) { return params.set(key, arg[key]); });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params // <-----
        });
        // with async data streams
        // console.log()params);
        return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeServerCallService.prototype.createGeneralGetRequestArgForAttributeRoute = function (arg, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath + '/' + arg);
    };
    CustomeServerCallService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' +
            this.activeUser.profile.token);
        headers.append('Content-Type', 'application/json');
    };
    CustomeServerCallService.prototype.createSecuredRequest = function (apiPath, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.activeUser.profile.token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (data != null)
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, data, { headers: headers });
        else
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, null, { headers: headers });
    };
    CustomeServerCallService.prototype.createSecuredGetRequest = function (apiPath, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (data == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeServerCallService.prototype.createSecuredGetRequestArg = function (apiPath, arg) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        //let options = new RequestOptions({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        Object.getOwnPropertyNames(arg).map(function (key) { return params.set(key, arg[key]); });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params // <-----
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeServerCallService.prototype.login = function (username, password) {
        var data = {
            EmailId: username,
            Password: password
        };
        return this.createGeneralRequest(data, 'api/Account/Login');
        // filter , copy , subscribe
        //return observable.subscribe(res => this.successLogin(res),
        //    err => this.error(err));
    };
    CustomeServerCallService.prototype.register = function (user) {
        var _this = this;
        try {
            var observable = this.createGeneralRequest(user, 'api/Account/Register');
            observable.subscribe(function (res) { return _this.successRegister(res); }, function (res) { return _this.error(res); });
            return 'Welcome';
        }
        catch (e) {
            return e.message;
        }
    };
    CustomeServerCallService.prototype.error = function (err) {
        showNotificationerror('top', 'right', err);
        // console.log()'ErrorCalled');
    };
    CustomeServerCallService.prototype.successLogin = function (response1) {
        showNotificationsuccess('top', 'right', 'we are redirecting You Just a Moment..');
        var response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = response.UserName;
        this.activeUser.profile.token = response.Token;
        this.activeUser.profile.activeParker = response.parker;
        this.activeUser.profile.activeParkerAdd = response.parkerAdd;
        this.activeUser.saveUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL + '/Dashboard');
    };
    CustomeServerCallService.prototype.successRegister = function (response1) {
        var response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = response.UserName;
        this.activeUser.profile.token = response.Token;
        this.activeUser.saveUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);
        // console.log()'processTokenended');
    };
    CustomeServerCallService.prototype.logout = function () {
        this.activeUser.profile.username = '';
        this.activeUser.profile.token = '';
        this.activeUser.removeUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);
    };
    return CustomeServerCallService;
}());
CustomeServerCallService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__FormEncode__["a" /* FormEncode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__FormEncode__["a" /* FormEncode */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ActiveUser__["a" /* ActiveUser */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], CustomeServerCallService);

var _a, _b, _c;
//# sourceMappingURL=CustomeServerCallService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/common/FormEncode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormEncode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormEncode = (function () {
    function FormEncode() {
        console.log('FormEncode');
    }
    FormEncode.prototype.EncodeData = function (data) {
        var pairs = [];
        for (var name in data) {
            if (data.hasOwnProperty(name)) {
                pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
        }
        return pairs.join('&').replace(/%20/g, '+');
    };
    return FormEncode;
}());
FormEncode = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], FormEncode);

//# sourceMappingURL=FormEncode.js.map

/***/ }),

/***/ "../../../../../src/app/Services/common/LocalStorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorage = (function () {
    function LocalStorage() {
        this.store = localStorage;
        // console.log()'LocalStorage');
    }
    LocalStorage.prototype.toJson = function (obj, pretty) {
        if (typeof obj === 'undefined')
            return undefined;
        return JSON.stringify(obj, this.toJsonReplacer, pretty);
    };
    LocalStorage.prototype.isWindow = function (obj) {
        return obj && obj.window === obj;
    };
    LocalStorage.prototype.toJsonReplacer = function (key, value) {
        var val = value;
        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
            val = undefined;
        }
        else if (value && value.window === value) {
            val = '$WINDOW';
        }
        else if (value && document === value) {
            val = '$DOCUMENT';
        }
        return val;
    };
    LocalStorage.prototype.add = function (key, value) {
        value = (this.toJson(value, ''));
        this.store.setItem(key, value);
    };
    LocalStorage.prototype.isString = function (value) {
        return typeof value === 'string';
    };
    LocalStorage.prototype.fromJson = function (json) {
        return this.isString(json)
            ? JSON.parse(json)
            : json;
    };
    LocalStorage.prototype.get = function (key) {
        var value = this.store.getItem(key);
        if (value) {
            value = this.fromJson(value);
        }
        return value;
    };
    LocalStorage.prototype.remove = function (key) {
        this.store.removeItem(key);
    };
    return LocalStorage;
}());
LocalStorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalStorage);

//# sourceMappingURL=LocalStorage.js.map

/***/ }),

/***/ "../../../../../src/app/Services/courses/course.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseServiceNew; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Common_custome_http_service__ = __webpack_require__("../../../../../src/app/Services/Common/custome-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RootObjects_application_Configuration__ = __webpack_require__("../../../../../src/app/RootObjects/application.Configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseServiceNew = (function () {
    function CourseServiceNew(http, customeHttpService) {
        this.http = http;
        this.customeHttpService = customeHttpService;
        this.applicationConfiguration = new __WEBPACK_IMPORTED_MODULE_3__RootObjects_application_Configuration__["a" /* ApplicationConfiguration */]();
    }
    CourseServiceNew.prototype.SaveCourse = function (obj) {
        return this.customeHttpService.createGeneralRequest(obj, 'api/Courses');
    };
    CourseServiceNew.prototype.updateCourse = function (obj) {
        return this.customeHttpService.createGeneralRequest(obj, 'api/Courses/Update');
    };
    CourseServiceNew.prototype.getCourseById = function (courseId) {
        //const headers = new Headers({
        //  'Content-Type': 'application/json; charset=utf-8'
        //});
        //if (courseId == null)
        //    return this.http.get(this.applicationConfiguration.WEBAPIURL + 'api/Courses/GetCourseById');
        //else
        //    return this.http.get(this.applicationConfiguration.WEBAPIURL + 'api/Courses/GetCourseById' + '/' + courseId);
        return this.customeHttpService.createGeneralGetRequestArgForAttributeRoute(courseId, 'api/Courses/GetCourseById');
    };
    CourseServiceNew.prototype.updateCourseById = function (courseId) {
        return this.customeHttpService.createGeneralRequest(courseId, 'api/Courses/Update');
    };
    return CourseServiceNew;
}());
CourseServiceNew = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Common_custome_http_service__["a" /* CustomeHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Common_custome_http_service__["a" /* CustomeHttpService */]) === "function" && _b || Object])
], CourseServiceNew);

var _a, _b;
//# sourceMappingURL=course.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/creditcard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppModels_CreditCardComponent_Model_SingleModel__ = __webpack_require__("../../../../../src/app/AppModels/CreditCardComponent.Model/SingleModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CreditCardService = (function () {
    function CreditCardService() {
        this.activeLessonList = [];
        this.draftList = [];
    }
    CreditCardService.prototype.getNavImage = function () {
        return '/assets/images/nav.jpg';
    };
    CreditCardService.prototype.getNotiImage = function () {
        return '/assets/images/noti.png';
    };
    CreditCardService.prototype.getProfileImage = function () {
        return '/assets/images/profilpic3.jpg';
    };
    CreditCardService.prototype.getArrowImage = function () {
        return '/assets/images/arrow.png';
    };
    CreditCardService.prototype.getDotsImage = function () {
        return '/assets/images/dots.png';
    };
    CreditCardService.prototype.getactiveLessonList = function () {
        this.activeLessonList = [];
        for (var i = 0; i < 6; i++) {
            var activeModel = new __WEBPACK_IMPORTED_MODULE_1__AppModels_CreditCardComponent_Model_SingleModel__["a" /* ActiveModel */]();
            activeModel.CardType = 'Credit Card vs Debit Card';
            activeModel.author = 'Author';
            this.activeLessonList.push(activeModel);
        }
        return this.activeLessonList;
    };
    CreditCardService.prototype.getdraftList = function () {
        for (var i = 0; i < 3; i++) {
            var draftModel = new __WEBPACK_IMPORTED_MODULE_1__AppModels_CreditCardComponent_Model_SingleModel__["b" /* DraftModel */]();
            draftModel.CardType = 'Credit Card vs Debit Card';
            draftModel.CardType2 = 'Draft';
            draftModel.author = 'Author';
            this.draftList.push(draftModel);
        }
        return this.draftList;
    };
    return CreditCardService;
}());
CreditCardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CreditCardService);

//# sourceMappingURL=creditcard.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/lesson/lesson-shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonSharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common_custome_http_service__ = __webpack_require__("../../../../../src/app/Services/Common/custome-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Common_loading_service__ = __webpack_require__("../../../../../src/app/Services/Common/loading.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LessonSharedService = (function () {
    function LessonSharedService(customeHttpService, loadingService, router) {
        this.customeHttpService = customeHttpService;
        this.loadingService = loadingService;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]({});
        this.lesson$ = this.subject.asObservable();
        this.ShowLessonSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](false);
        this.ShowCancelSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](false);
        this.ShowLesson$ = this.ShowLessonSubject.asObservable();
        this.ShowCancel$ = this.ShowCancelSubject.asObservable();
        this.lesson = {};
    }
    LessonSharedService.prototype.closeModalFunc = function () {
        // $.getScript('assets/bootstrap.js');
        $('#savelessonsmodal').modal('hide');
    };
    LessonSharedService.prototype.saveCurrentLesson = function (lesson) {
        var _this = this;
        this.subject.next(lesson);
        this.lesson$.subscribe(function (a) { return _this.lesson = a; });
    };
    LessonSharedService.prototype.ToggelLessonButton = function (val) {
        this.ShowLessonSubject.next(val);
    };
    LessonSharedService.prototype.ToggleCancelButton = function (val) {
        this.ShowCancelSubject.next(val);
    };
    LessonSharedService.prototype.GetLessonById = function (id) {
        // ToDo: getlessonById
        // after getting response as res this.subject.next(res);
    };
    LessonSharedService.prototype.saveLesson = function () {
        var _this = this;
        if (this.lesson.LessonName === '' || this.lesson.LessonName == null) {
            alertify.alert('Incubator Says', 'Lesson Name is Required for submission');
            return true;
        }
        this.loadingService.toggleLoader(true);
        this.customeHttpService.createPostRequestforContent(this.lesson, 'api/LessonsNew').subscribe(function (res) {
            // tslint:disable-next-line:no-debugger
            res = res.json();
            console.log("Resp" + res);
            _this.closeModalFunc();
            _this.loadingService.toggleLoader(false);
            alertify.alert('Incubator Says', 'Lesson Saved In Draft Successfully');
            _this.router.navigateByUrl('/DashboardComponent');
        }, function (err) {
            _this.loadingService.toggleLoader(false);
        });
    };
    LessonSharedService.prototype.AddToStaging = function (lesson) {
        return this.customeHttpService.createPostRequestforContent(lesson, 'api/LessonsNew/Addtostaging')
            .do(function (res) { return res.json(); });
    };
    return LessonSharedService;
}());
LessonSharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__Common_custome_http_service__["a" /* CustomeHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Common_custome_http_service__["a" /* CustomeHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__Common_loading_service__["a" /* LoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Common_loading_service__["a" /* LoadingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LessonSharedService);

var _a, _b, _c;
//# sourceMappingURL=lesson-shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/lesson/template/template.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Common_custome_http_service__ = __webpack_require__("../../../../../src/app/Services/Common/custome-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateService = (function () {
    function TemplateService(customeHttpService) {
        this.customeHttpService = customeHttpService;
    }
    TemplateService.prototype.GetAllTemplates = function () {
        return this.customeHttpService.createGeneralGetRequestArgForAttributeRoute(null, 'api/Templates/GetTemplates');
    };
    return TemplateService;
}());
TemplateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Common_custome_http_service__["a" /* CustomeHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Common_custome_http_service__["a" /* CustomeHttpService */]) === "function" && _a || Object])
], TemplateService);

var _a;
//# sourceMappingURL=template.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Common_custome_http_service__ = __webpack_require__("../../../../../src/app/Services/Common/custome-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = (function () {
    function ProfileService(customeServerCallService) {
        this.customeServerCallService = customeServerCallService;
    }
    //profile = {};
    //public profile$: Observable<any>;
    //private subject: BehaviorSubject<any> = new BehaviorSubject<any>(this.profile);
    ProfileService.prototype.getProfileByUserId = function (UserId) {
        return this.customeServerCallService.createSecuredGetRequest('api/incubators/GetIncubatorByUserId/' + UserId, null);
    };
    ProfileService.prototype.getNavImage = function () {
        return '/assets/images/nav.jpg';
    };
    ProfileService.prototype.getNotiImage = function () {
        return '/assets/images/noti.png';
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Common_custome_http_service__["a" /* CustomeHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Common_custome_http_service__["a" /* CustomeHttpService */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/profile/profileshared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Common_custome_http_service__ = __webpack_require__("../../../../../src/app/Services/Common/custome-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilesharedService = (function () {
    function ProfilesharedService(customeServerCallService) {
        this.customeServerCallService = customeServerCallService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]({});
        this.profile$ = this.subject.asObservable();
    }
    ProfilesharedService.prototype.getProfile = function (UserId) {
        var _this = this;
        return this.customeServerCallService.createSecuredGetRequest('api/incubators/GetIncubatorByUserId/' + UserId, null).do(function (a) {
            _this.subject.next(a);
        });
    };
    return ProfilesharedService;
}());
ProfilesharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Common_custome_http_service__["a" /* CustomeHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Common_custome_http_service__["a" /* CustomeHttpService */]) === "function" && _a || Object])
], ProfilesharedService);

var _a;
//# sourceMappingURL=profileshared.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/shared-service/app-component.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("../../../../../src/app/Services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Common_ActiveUser__ = __webpack_require__("../../../../../src/app/Services/Common/ActiveUser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponentService = (function () {
    function AppComponentService(sanitizer, profileService, activeUser) {
        this.sanitizer = sanitizer;
        this.profileService = profileService;
        this.activeUser = activeUser;
        this.message1 = 'You have got a mail';
        this.UserId = '';
        this.profile = {};
    }
    AppComponentService.prototype.photoURL = function (userId) {
        var _this = this;
        this.profileService.getProfileByUserId(this.activeUser.initialize().UserID)
            .map(function (res) {
            res = res.json();
            // console.log()res);
            _this.profile = res;
            if (_this.profile.ProfileImage == null || _this.profile.ProfileImage == '') {
                _this.profile.ProfileImage = '/assets/images/nopic.png';
            }
            return _this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + _this.profile.ProfileImage);
        }, function (err) { return _this.errorGetIncubator(err); });
    };
    AppComponentService.prototype.errorGetIncubator = function (err) {
    };
    return AppComponentService;
}());
AppComponentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Common_ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Common_ActiveUser__["a" /* ActiveUser */]) === "function" && _c || Object])
], AppComponentService);

var _a, _b, _c;
//# sourceMappingURL=app-component.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/usefullLink.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsefullLinkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../appmodels/link.ts" />

var UsefullLinkService = (function () {
    function UsefullLinkService() {
    }
    UsefullLinkService.prototype.GetLinks = function () {
        return [
            { name: 'About', href: '#' },
            { name: 'Services', href: '#' },
            { name: 'Contact', href: '#' }
        ];
    };
    return UsefullLinkService;
}());
UsefullLinkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], UsefullLinkService);

//# sourceMappingURL=usefullLink.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/usefulllink.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsefullLinkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../appmodels/link.ts" />

var UsefullLinkService = (function () {
    function UsefullLinkService() {
    }
    UsefullLinkService.prototype.GetLinks = function () {
        return [
            { name: 'About', href: '#' },
            { name: 'Services', href: '#' },
            { name: 'Contact', href: '#' }
        ];
    };
    return UsefullLinkService;
}());
UsefullLinkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], UsefullLinkService);

//# sourceMappingURL=usefulllink.service.js.map

/***/ }),

/***/ "../../../../../src/app/add-new-course/add-new-course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewcourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_common_CustomeServerCallService__ = __webpack_require__("../../../../../src/app/services/common/CustomeServerCallService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_ActiveUser__ = __webpack_require__("../../../../../src/app/services/common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_common_course_service__ = __webpack_require__("../../../../../src/app/services/common/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_common_notification_service__ = __webpack_require__("../../../../../src/app/services/common/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddnewcourseComponent = (function () {
    function AddnewcourseComponent(activeUser, notificationService, customeServerCallService, courseService) {
        this.notificationService = notificationService;
        this.currentCourse = {};
        this.BackToCourcesList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.UserId = '';
        this.newCourse = {};
        this.courseService = null;
        this.Shownewlesson = false;
        this.SaveMode = 'Save';
        this.activeUser = activeUser;
        this.courseService = courseService;
        this.customeServerCallService = customeServerCallService;
        this.UserId = this.activeUser.profile.UserID;
    }
    AddnewcourseComponent.prototype.backtocources = function () {
        try {
            this.BackToCourcesList.emit('ShowCourses');
            // console.log()'mouseclick called');
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    AddnewcourseComponent.prototype.SaveCourse = function () {
        var _this = this;
        try {
            if (this.SaveMode == 'Edit') {
                var observablecourse = this.courseService.getCourseById(this.ActiveCarriculamId);
                observablecourse.subscribe(function (res) { return _this.successGetCourse(res); }, function (err) { return _this.errorSaveCourse(err); });
                var observable = this.courseService.saveCourse(this.newCourse, this.customeServerCallService);
                observable.subscribe(function (res) { return _this.successSaveCourse(res); }, function (err) { return _this.errorSaveCourse(err); });
            }
            else {
                this.newCourse.UserID = this.activeUser.profile.UserID;
                this.newCourse.CarriculamId = this.ActiveCarriculamId;
                var observable = this.courseService.saveCourse(this.newCourse, this.customeServerCallService);
                observable.subscribe(function (res) { return _this.successSaveCourse(res); }, function (err) { return _this.errorSaveCourse(err); });
            }
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    AddnewcourseComponent.prototype.successSaveCourse = function (responsea) {
        var response = JSON.parse(responsea._body);
        //this.BackToCourcesList.emit("ShowCoursesList");
        this.SaveMode = 'Edit';
        alert(this.SaveMode);
    };
    AddnewcourseComponent.prototype.errorSaveCourse = function (error) {
        alert(error);
    };
    AddnewcourseComponent.prototype.successGetCourse = function (responsea) {
        //var response = JSON.parse(responsea._body);
        this.newCourse = JSON.parse(responsea._body);
    };
    AddnewcourseComponent.prototype.errorGetCourse = function (error) {
        alert(error);
    };
    AddnewcourseComponent.prototype.showAddLesson = function () {
        this.Shownewlesson = true;
    };
    return AddnewcourseComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ActiveCarriculamId'),
    __metadata("design:type", Object)
], AddnewcourseComponent.prototype, "ActiveCarriculamId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AddnewcourseComponent.prototype, "BackToCourcesList", void 0);
AddnewcourseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-Course',
        template: __webpack_require__("../../../../../src/app/add-new-course/addnewcourse.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_ActiveUser__["a" /* ActiveUser */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_common_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_common_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_common_CustomeServerCallService__["a" /* CustomeServerCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_common_CustomeServerCallService__["a" /* CustomeServerCallService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_course_service__["a" /* CarriculamCourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_course_service__["a" /* CarriculamCourseService */]) === "function" && _e || Object])
], AddnewcourseComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-new-course.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-new-course/addnewcourse.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n  <h2 (click)=\"backtocources()\"><span class=\"pull-left glyphicon glyphicon-arrow-left\">Cancel</span></h2>\r\n\r\n</div>\r\n\r\n<div class=\"col-lg-4\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <br />\r\n      <br />\r\n      <label for=\"CourseTitle\">Course Title</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newCourse.CourseName\" name=\"CourseName\" placeholder=\"Course Title\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Description\">Description</label>\r\n      <textarea [(ngModel)]=\"newCourse.CourseContent\" name=\"CourseContent\" style=\"margin: 0px;width: 470px;height: 75px;\" id=\"courseDescription\"></textarea>\r\n    </div>\r\n\r\n    <input class=\"btn btn-default \" type=\"button\" id=\"btnchange\" value=\"{{SaveMode}}\" (click)=\"SaveCourse()\">\r\n  </form>\r\n</div>\r\n<div class=\"col-lg-8\">\r\n  <img src=\"/assets/images/circle1.png\" width=\"300\" height=\"300\" class=\"center-block\">\r\n  <p style=\"color:black;font-size:36px; font-weight:bold\">Nothing to see here!</p>\r\n  <br />\r\n  <p style=\"font-size:28px\">No lessons have been added yet</p>\r\n  <br />\r\n  <button class=\"btn btn-success center-block\" (click)=\"showAddLesson()\">Start A Lesson</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/add-new-courseempty/add-new-courseempty.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cancelbutton\r\n{\r\n    font-size:20px;\r\n    color:#884ef9;\r\n    font-family:arial;\r\n    margin-top:10px;\r\n    margin-bottom:20px;\r\n}\r\n.backarrow\r\n{\r\n    margin-left:20px;\r\n    color:#884ef9;\r\n    margin-top:10px;\r\n    margin-bottom:20px;\r\n}\r\n.coursename\r\n{\r\n    margin-top:10px;\r\n    width: 420px;\r\n    border:1px solid lightgray;\r\n}\r\n.coursedesc\r\n{\r\n    margin-top:10px;\r\n    width: 420px;\r\n    height:200px;\r\n    border: 1px solid lightgray;\r\n}\r\n.savebutton\r\n{\r\n    margin-left:60px;\r\n    margin-top:50px;\r\n    width:132px;\r\n    height:40px;\r\n    background-color:#e9e9e9;\r\n    border-radius:3px;\r\n    color: #7d7d7d;\r\n    font-size: 16px;\r\n    \r\n}\r\n.coursename::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n   font-size:32px;\r\n   font:arial;\r\n   color:#4a4a4a;\r\n   font-weight:bold;\r\n   opacity:1;\r\n  }\r\n  .coursename::-moz-placeholder { /* Firefox 19+ */\r\n    font-size:32px;\r\n    font:arial;\r\n    color:#4a4a4a;\r\n    font-weight:bold;\r\n    opacity:1;\r\n  }\r\n  .coursename:-ms-input-placeholder { /* IE 10+ */\r\n    font-size:32px;\r\n    font:arial;\r\n    color:#4a4a4a;\r\n    font-weight:bold;\r\n    opacity:1;\r\n  }\r\n  .coursename:-moz-placeholder { /* Firefox 18- */\r\n    font-size:32px;\r\n    font:arial;\r\n    color:#4a4a4a;\r\n    font-weight:bold;\r\n    opacity:1;\r\n  }\r\n\r\n  .coursedesc::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n   font-size:20px;\r\n   font:arial;\r\n   color:#7d7d7d;\r\n   opacity:1;\r\n   }\r\n   .coursedesc::-moz-placeholder { /* Firefox 19+ */\r\n    font-size:20px;\r\n    font:arial;\r\n    color:#7d7d7d;\r\n    opacity:1;\r\n   }\r\n   .coursedesc:-ms-input-placeholder { /* IE 10+ */\r\n    font-size:20px;\r\n    font:arial;\r\n    color:#7d7d7d;\r\n    opacity:1;\r\n   }\r\n   .coursedesc:-moz-placeholder { /* Firefox 18- */\r\n    font-size:20px;\r\n    font:arial;\r\n    color:#7d7d7d;\r\n    opacity:1;\r\n   }\r\n\r\n   .emptycircle\r\n   {\r\n       opacity:0.7;\r\n       margin-top:20px;\r\n   }\r\n\r\n   .nothingtoshow\r\n   {\r\n       margin-top:20px;\r\n    font-family: arial;\r\n    font-size: 32px;\r\n     font-weight:bold;\r\n    color:#4a4a4a;\r\n   }\r\n   .nolessonadded\r\n   {\r\n    color: #7d7d7d;\r\n    font-size: 20px;\r\n    font-family: arial;\r\n   }\r\n   .addalesson\r\n   {\r\n    width: 160px;\r\n    height: 40px;\r\n    background-color: #86d190;\r\n    color: #ffffff;\r\n    font-size:16px;\r\n    font-family:arial;\r\n    border-radius:3px;\r\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-new-courseempty/add-new-courseempty.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n<div class=\"col-lg-5\" style=\"border-right: 1px lightgrey solid\">\r\n  <div class=\"row\">\r\n    <a (click)=\"backtocources()\"><i class=\"pull-left fa fa-long-arrow-left fa-2x backarrow \"></i><p class=\"cancelbutton pull-left\">Cancel</p></a>\r\n  </div>\r\n  \r\n    <div class=\"row\">  \r\n      <textarea class=\"pull-left coursename\" rows=\"1\"\r\n      style=\"margin-left:60px; resize:none;color: #4a4a4a;font-size: 32px;font-weight: bold;font-family:arial;\"\r\n      [(ngModel)]=\"this.newCourse.CourseName\" name=\"CourseName\"  placeholder=\"Course Title\" [disabled]=\"disableForm\" ></textarea>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <textarea class=\"pull-left coursedesc\" \r\n      [disabled]=\"disableForm\"\r\n      [(ngModel)]=\"this.newCourse.CourseContent\" name=\"CourseContent\" id=\"courseDescription\" placeholder=\"Describe the course you are creating...\" style=\"resize:none; background:#fff; height:250px; margin-left:60px;\"></textarea>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-bottom:40px;\">\r\n        <input class=\"btn btn-default \" type=\"button\" id=\"btnchange\" value=\"{{SaveorEdit}}\" (click)=\"SaveCourse()\" class=\"savebutton\">\r\n      </div>\r\n    \r\n\r\n</div>\r\n<div class=\"col-lg-7\">\r\n  <img src=\"/assets/images/circle1.png\" width=\"199\" height=\"199\" class=\"center-block emptycircle\">\r\n  <p class=\"nothingtoshow\">Nothing to see here!</p>\r\n  <br />\r\n  <p class=\"nolessonadded\">No lessons have been added yet</p>\r\n  <br />\r\n  <input type=\"button\" *ngIf=\"showLessonDiv\"  [routerLink]=\"['/add-newLesson', newCourse.Id]\" class=\"addalesson center-block\" (click)=\"showAddLesson()\" value=\"Start A Lesson\">\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-new-courseempty/add-new-courseempty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewCourseemptyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_courses_course_service__ = __webpack_require__("../../../../../src/app/Services/courses/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_common_ActiveUser__ = __webpack_require__("../../../../../src/app/services/common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_common_course_service__ = __webpack_require__("../../../../../src/app/services/common/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_common_FormEncode__ = __webpack_require__("../../../../../src/app/services/common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_common_notification_service__ = __webpack_require__("../../../../../src/app/services/common/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddNewCourseemptyComponent = (function () {
    function AddNewCourseemptyComponent(courseServiceNew, router, route, activeUser, notificationService) {
        this.courseServiceNew = courseServiceNew;
        this.router = router;
        this.route = route;
        this.activeUser = activeUser;
        this.notificationService = notificationService;
        this.SaveorEdit = 'Save';
        this.showLessonDiv = false;
        this.currentCourse = {};
        this.UserId = '';
        this.disableForm = false;
        this.carriculamId = this.route.snapshot.params['id'];
        this.newCourse = {
            CourseName: '',
            CourseContent: '',
            UserId: this.activeUser.profile.UserID,
            CarriculamId: this.carriculamId
        };
    }
    AddNewCourseemptyComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe(a => {
        //   this.carriculamId = a['id'];
        // });
    };
    AddNewCourseemptyComponent.prototype.backtocources = function () {
        this.router.navigateByUrl('/Library');
    };
    AddNewCourseemptyComponent.prototype.SaveCourse = function () {
        var _this = this;
        if (this.newCourse.CourseName == '' || this.newCourse.CourseName == null) {
            alertify.alert('Incubator Says', 'Course Name cannot be empty');
            return true;
        }
        if (this.newCourse.CourseContent == '' || this.newCourse.CourseContent == null) {
            alertify.alert('Incubator Says', 'Course Content cannot be empty');
            return true;
        }
        //this.courseServiceNew.SaveCourse(this.newCourse);
        try {
            if (this.SaveorEdit == 'Edit') {
                if (this.disableForm) {
                    this.disableForm = false;
                    this.SaveorEdit = 'Save';
                    return;
                }
            }
            else {
                if (typeof (this.newCourse.Id) != 'undefined') {
                    this.courseServiceNew.getCourseById(this.newCourse.Id)
                        .map(function (a) { return a.json(); })
                        .subscribe(function (a) {
                        if (a != null) {
                            a.CourseName = _this.newCourse.CourseName;
                            a.CourseContent = _this.newCourse.CourseContent;
                            _this.courseServiceNew.updateCourse(_this.newCourse)
                                .subscribe(function (res) {
                                _this.disableForm = true;
                                _this.SaveorEdit = 'Edit';
                            }, function (err) { });
                        }
                        else {
                            _this.newCourse.UserID = _this.activeUser.profile.UserID;
                            _this.newCourse.CarriculamId = _this.carriculamId;
                            _this.courseServiceNew.SaveCourse(_this.newCourse)
                                .subscribe(function (res) {
                                _this.newCourse = res.json();
                                _this.disableForm = true;
                                _this.showLessonDiv = true;
                                _this.SaveorEdit = 'Edit';
                            }, function (err) { });
                        }
                    });
                }
                else {
                    this.newCourse.UserID = this.activeUser.profile.UserID;
                    this.newCourse.CarriculamId = this.carriculamId;
                    this.courseServiceNew.SaveCourse(this.newCourse)
                        .subscribe(function (res) {
                        _this.showLessonDiv = true;
                        _this.newCourse = res.json();
                        _this.disableForm = true;
                        _this.SaveorEdit = 'Edit';
                    }, function (err) { });
                }
            }
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    AddNewCourseemptyComponent.prototype.showAddLesson = function () {
    };
    return AddNewCourseemptyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ActiveCarriculamId'),
    __metadata("design:type", Object)
], AddNewCourseemptyComponent.prototype, "ActiveCarriculamId", void 0);
AddNewCourseemptyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-new-courseempty',
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_common_ActiveUser__["a" /* ActiveUser */], __WEBPACK_IMPORTED_MODULE_6__services_common_FormEncode__["a" /* FormEncode */], __WEBPACK_IMPORTED_MODULE_5__services_common_course_service__["a" /* CarriculamCourseService */], __WEBPACK_IMPORTED_MODULE_7__services_common_notification_service__["a" /* NotificationService */],
        ],
        template: __webpack_require__("../../../../../src/app/add-new-courseempty/add-new-courseempty.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-new-courseempty/add-new-courseempty.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_courses_course_service__["a" /* CourseServiceNew */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_courses_course_service__["a" /* CourseServiceNew */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router___["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router___["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_common_ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_common_ActiveUser__["a" /* ActiveUser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_common_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_common_notification_service__["a" /* NotificationService */]) === "function" && _e || Object])
], AddNewCourseemptyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-new-courseempty.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#squareicon {\r\n  color: #caafff;\r\n  background-color: #caafff;\r\n  background-color: var(--pastel-purple);\r\n  width: 24px;\r\n  height: 24px;\r\n  margin-right: 30px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.navbar-brand {\r\n  font-size: 24px;\r\n  font-family: Arial;\r\n  font-size: 24px;\r\n  font-weight: 500;\r\n  line-height: 1.08;\r\n  line-height: 1.08;\r\n  text-align: left;\r\n  color: #4a4a4a;\r\n}\r\n\r\n#signInButton {\r\n  font-size: 18px;\r\n  width: 132px;\r\n  height: 40px;\r\n  margin: 5px 2px;\r\n  color: white;\r\n  background-color: light purple;\r\n  font-family: Arial;\r\n}\r\n\r\n#requestAccessButton {\r\n  font-size: 18px;\r\n  width: 134px;\r\n  height: 40px;\r\n  margin: 5px 2px;\r\n  color: #7d7d7d;\r\n  background-color: #fff;\r\n  font-family: Arial;\r\n}\r\n\r\n#signInButton2 {\r\n  width: 196px;\r\n  height: 48px;\r\n  font-family: \"Arial\";\r\n  background-color: #9765f8;\r\n  color: #ffffff;\r\n}\r\n\r\n#requestAccessButton2 {\r\n  width: 196px;\r\n  height: 48px;\r\n  background-color: #e1e1e1;\r\n  color: #4a4a4a;\r\n  font-family: \"Arial\";\r\n}\r\n.footer {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: fff;\r\n  text-align: center;\r\n}\r\n.footer1 {\r\n  position: static;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: fff;\r\n  text-align: center;\r\n}\r\n\r\n\r\n/*loader css*/\r\n/* Absolute Center Spinner */\r\n.backdrop{\r\n  position:absolute;\r\n  top:0;left:0;right:0;bottom:0;padding:30;\r\n  background-color:rgba(0,0,0,0.4)\r\n}\r\n.loading {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  color:#fff;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n/* Transparent Overlay */\r\n.loading:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.3);\r\n}\r\n\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.loading:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 1500ms infinite linear;\r\n  animation: spinner 1500ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <!--<a href=\"#\" class=\"btn btn-info btn-lg\">\r\n\r\n      </a>-->\r\n      \r\n     \r\n      <a class=\"navbar-brand\">\r\n        <span id=\"squareicon\" class=\"glyphicon glyphicon-stop\"></span>The Birdhouse   \r\n      </a>\r\n      <a class=\"navbar-brand\" routerLink=\"Course-new/:id\" style=\"margin-top:2px;\" >\r\n        <span *ngIf=\"showCancelButton\" style=\"font-size:20px; color:grey\">Exit</span>\r\n      </a>\r\n     \r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n   <!-- <ul class=\"nav navbar-nav\">\r\n\r\n        <li><a href=\"#\" >Library</a></li>\r\n       \r\n        <li><a href=\"#\">Help</a></li>\r\n\r\n      </ul>\r\n    -->\r\n\r\n    <button style=\"width:132px;height:40px;margin-left:750px;\" *ngIf=\"showLessonButton\" data-toggle=\"modal\" data-target=\"#savelessonsmodal\">Submit</button>\r\n     \r\n    <div class=\"modal fade\" id=\"savelessonsmodal\" role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n       <div class=\"modal-content\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <img src=\"/assets/images/rocket.png\">\r\n              </div>\r\n            <div class=\"row\"> \r\n                <p style=\"font-family:arial;font-size:24px;font-weight:500; color:#4a4a4a;\">Submission Time</p>\r\n              </div>\r\n            <div class=\"row\" style=\"margin-top:10px;\">\r\n                <p style=\"font-size:16px;color:#4a4a4a; font-family:arial;\">Congratulations! It looks like you are ready \r\n                    to <br/>submit this lesson to queue for beta testing.\r\n                    </p>\r\n              </div>\r\n            <div class=\"row\" style=\"margin-top:15px;\">\r\n                <button style=\"width:216px; margin-left:180px;\" (click)=\"SaveLesson()\">Submit for Testing</button>\r\n              </div>\r\n             <div class=\"row\" style=\"margin-top:10px;\">\r\n               <a href=\"#\" style=\"text-decoration:none;\"> <p style=\"font-size:16px;font-family:arial;color: #7d7d7d; text-decoration:none;\" data-dismiss=\"modal\">Not Ready Yet</p></a>\r\n               </div>\r\n             \r\n            \r\n            </div>\r\n          \r\n\r\n         </div>\r\n\r\n        </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n    <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"isLogged\" style=\"margin-bottom:-10px;\">\r\n        <li><a href=\"#\"></a></li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\r\n           aria-expanded=\"false\"><img [src]= \"photoURL()\"  width=\"30\" height=\"30\"/> </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\">{{profile.FirstName}} {{profile.LastName}}</a></li>\r\n            <li><a (click)=\"signOut()\">Log Out</a></li>\r\n\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"!isLogged\">\r\n        <li>\r\n          <button class=\"btnNew\" id=\"signInButton\" \r\n                  data-toggle=\"modal\" data-target=\"#myModal\">\r\n            Sign In\r\n          </button>\r\n        </li>\r\n        <li>\r\n          <button class=\"btnNew\" id=\"requestAccessButton\"\r\n                  data-toggle=\"modal\" data-target=\"#myModal2\">\r\n            Request\r\n          </button>\r\n        </li>\r\n\r\n      </ul>\r\n      \r\n\r\n     \r\n\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n\r\n  <app-login *ngIf=\"!isLogged\" (close-Modal)=\"closeModalFunc()\" (register-In)=\"changeLogin()\"></app-login>\r\n</div>\r\n\r\n<div id=\"myModal2\" class=\"modal fade\" role=\"dialog\">\r\n<app-request-access *ngIf=\"!isLogged\" (close-Modal)=\"closeModalFunc()\"></app-request-access>\r\n  </div>\r\n\r\n<app-side-bar *ngIf=\"isLogged\">\r\n\r\n</app-side-bar>\r\n<div class=\"row\">\r\n  <!-- <div class=\"col-lg-2\" *ngIf=\"isLogged\">\r\n\r\n    </div>-->\r\n  <div class=\"col-lg-12\">\r\n    <router-outlet>\r\n\r\n    </router-outlet>\r\n  </div>\r\n</div>\r\n<div class=\"col-lg-12\" *ngIf=\"!isLogged\">\r\n  <div class=\"col-lg-4\">\r\n  </div>\r\n  <div class=\"col-lg-2\">\r\n    <button *ngIf=\"hideme3==true\" data-toggle=\"modal\" data-target=\"#myModal\" id=\"signInButton2\" style=\"font-family:arial;\">Sign In</button>\r\n  </div>\r\n\r\n  <div class=\"col-lg-3\">\r\n    <button style=\"background-color:lightgrey; color: #4a4a4a;; font-family:arial;\" *ngIf=\"hideme4==true\" id=\"requestAccessButton2\" data-toggle=\"modal\" data-target=\"#myModal2\">Request Access</button>\r\n  </div>\r\n  <div class=\"col-lg-2 \">\r\n  </div>\r\n</div>\r\n<div class=\"col-lg-12\" style=\"margin-top:50px;\">\r\n  </div>\r\n\r\n<div class=\"footer\" *ngIf=\"isLogged\">\r\n  <nav>\r\n    <ul class=\"list-footer\">\r\n            <p>© 2017 Yellowbird Financial, Inc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Atlanta Made</p>     \r\n    </ul>\r\n  </nav>\r\n</div>\r\n\r\n<div class=\"footer1\" *ngIf=\"!isLogged\">\r\n    <nav>\r\n      <ul class=\"list-footer\">\r\n              <p>© 2017 Yellowbird Financial, Inc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Atlanta Made</p>     \r\n      </ul>\r\n    </nav>\r\n  </div>\r\n\r\n  <div *ngIf=\"loading\">\r\n    <div class=\"backdrop\">\r\n      <div class=\"loading\">Loading&#8230;</div></div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_Common_ActiveUser__ = __webpack_require__("../../../../../src/app/Services/Common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_shared_service_app_component_service__ = __webpack_require__("../../../../../src/app/Services/shared-service/app-component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_profile_profileshared_service__ = __webpack_require__("../../../../../src/app/Services/profile/profileshared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_profile_service__ = __webpack_require__("../../../../../src/app/Services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_lesson_lesson_shared_service__ = __webpack_require__("../../../../../src/app/Services/lesson/lesson-shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_Common_loading_service__ = __webpack_require__("../../../../../src/app/Services/Common/loading.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = (function () {
    function AppComponent(activeUser, router, lessonSharedService, profileService, profilesharedservice, sanitizer, loadingservice) {
        this.router = router;
        this.lessonSharedService = lessonSharedService;
        this.profileService = profileService;
        this.profilesharedservice = profilesharedservice;
        this.sanitizer = sanitizer;
        this.loadingservice = loadingservice;
        this.showCancelButton = false;
        this.showLessonButton = false;
        this.title = 'Financial education made easy.';
        this.loading = false;
        this.ShowSideBar = false;
        this.hideme = true;
        this.hideme2 = true;
        this.hideme3 = true;
        this.hideme4 = true;
        this.hideimage1 = false;
        this.hideimage2 = false;
        this.profile = {};
        this.UserId = '';
        this.profileimage = '';
        this.activeUser = activeUser;
        this.isLogged = this.activeUser.initialize().loggedIn;
        // console.log()this.isLogged);
    }
    AppComponent.prototype.photoURL = function () {
        return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.profile.ProfileImage);
    };
    AppComponent.prototype.library = function () {
        location.href = '/Library';
        // console.log()'mouseclick called');
    };
    AppComponent.prototype.Initialize = function () {
        var _this = this;
        this.profileService.getProfileByUserId(this.UserId)
            .subscribe(function (res) {
            res = res.json();
            // console.log()res);
            _this.profile = res;
        });
        var data = {
            FirstName: this.firstname,
            LastName: this.lastname,
            ProfileImagePath: this.profileimage
        };
    };
    AppComponent.prototype.changeLogin = function () {
        this.isLogged = true;
        this.ShowSideBar = true;
        this.hideme = false;
        this.hideme2 = false;
        this.hideme3 = false;
        this.hideme4 = false;
        this.hideimage1 = true;
        this.hideimage2 = true;
    };
    AppComponent.prototype.signOut = function () {
        this.activeUser.removeUser();
        this.isLogged = this.activeUser.initialize().loggedIn;
        this.router.navigateByUrl('/DashboardComponent');
    };
    AppComponent.prototype.closeModalFunc = function () {
        // $.getScript('assets/bootstrap.js');
        $('#myModal').modal('toggle');
        // console.log()'called');
    };
    AppComponent.prototype.open = function () {
    };
    AppComponent.prototype.SaveLesson = function () {
        this.lessonSharedService.saveLesson();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingservice.loader$.subscribe(function (a) {
            _this.loading = a;
        });
        this.lessonSharedService.ShowLesson$.subscribe(function (a) {
            _this.showLessonButton = a;
        });
        this.lessonSharedService.ShowCancel$.subscribe(function (a) {
            _this.showCancelButton = a;
        });
        this.profilesharedservice.profile$.subscribe(function (a) {
            _this.profile = a;
            _this.ProfileImage = _this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + _this.profile.ProfileImage);
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
            }, 500); // determines the speed of the scroll
            return false;
        });
        this.Initialize();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__Services_shared_service_app_component_service__["a" /* AppComponentService */], __WEBPACK_IMPORTED_MODULE_5__Services_profile_profileshared_service__["a" /* ProfilesharedService */], __WEBPACK_IMPORTED_MODULE_6__Services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_8__Services_Common_loading_service__["a" /* LoadingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_Common_ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_Common_ActiveUser__["a" /* ActiveUser */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__Services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__Services_profile_service__["a" /* ProfileService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__Services_profile_profileshared_service__["a" /* ProfilesharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Services_profile_profileshared_service__["a" /* ProfilesharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__Services_Common_loading_service__["a" /* LoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__Services_Common_loading_service__["a" /* LoadingService */]) === "function" && _g || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_Common_ActiveUser__ = __webpack_require__("../../../../../src/app/Services/Common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Services_Common_CustomeServerCallService__ = __webpack_require__("../../../../../src/app/Services/Common/CustomeServerCallService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Services_Common_course_service__ = __webpack_require__("../../../../../src/app/Services/Common/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Services_Common_FormEncode__ = __webpack_require__("../../../../../src/app/Services/Common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Services_Common_lessons_service__ = __webpack_require__("../../../../../src/app/Services/Common/lessons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_common_localStorage__ = __webpack_require__("../../../../../src/app/services/common/localStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Services_creditcard_service__ = __webpack_require__("../../../../../src/app/Services/creditcard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Services_usefullLink_service__ = __webpack_require__("../../../../../src/app/Services/usefullLink.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Services_profile_service__ = __webpack_require__("../../../../../src/app/Services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__personal_cabinet_personal_cabinet_component__ = __webpack_require__("../../../../../src/app/personal-cabinet/personal-cabinet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__fellow_ship_fellow_ship_component__ = __webpack_require__("../../../../../src/app/fellow-ship/fellow-ship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__library_library_component__ = __webpack_require__("../../../../../src/app/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__course_course_component__ = __webpack_require__("../../../../../src/app/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__lessons_lessons_component__ = __webpack_require__("../../../../../src/app/lessons/lessons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__add_new_course_add_new_course_component__ = __webpack_require__("../../../../../src/app/add-new-course/add-new-course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Services_Common_notification_service__ = __webpack_require__("../../../../../src/app/Services/Common/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_safe_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__resolver_cources_resolver__ = __webpack_require__("../../../../../src/app/resolver/cources-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__course_new_course_new_component__ = __webpack_require__("../../../../../src/app/course-new/course-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Services_courses_course_service__ = __webpack_require__("../../../../../src/app/Services/courses/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Services_Common_custome_http_service__ = __webpack_require__("../../../../../src/app/Services/Common/custome-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__lesson_new_add_lesson_add_lesson_component__ = __webpack_require__("../../../../../src/app/lesson-new/add-lesson/add-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__lesson_new_add_lesson_description_description_component__ = __webpack_require__("../../../../../src/app/lesson-new/add-lesson/description/description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__Services_lesson_lesson_shared_service__ = __webpack_require__("../../../../../src/app/Services/lesson/lesson-shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Services_lesson_template_template_service__ = __webpack_require__("../../../../../src/app/Services/lesson/template/template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__lesson_new_add_lesson_free_form_free_form_component__ = __webpack_require__("../../../../../src/app/lesson-new/add-lesson/free-form/free-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__lesson_new_add_lesson_segment_new_segment_new_component__ = __webpack_require__("../../../../../src/app/lesson-new/add-lesson/segment-new/segment-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__lesson_new_add_lesson_template_new_template_new_component__ = __webpack_require__("../../../../../src/app/lesson-new/add-lesson/template-new/template-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__Pipes_safe_image_pipe__ = __webpack_require__("../../../../../src/app/Pipes/safe-image.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__lesson_new_add_lesson_preview_preview_component__ = __webpack_require__("../../../../../src/app/lesson-new/add-lesson/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__add_new_courseempty_add_new_courseempty_component__ = __webpack_require__("../../../../../src/app/add-new-courseempty/add-new-courseempty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__request_access_request_access_component__ = __webpack_require__("../../../../../src/app/request-access/request-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__Services_shared_service_app_component_service__ = __webpack_require__("../../../../../src/app/Services/shared-service/app-component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__lesson_new_add_lesson_template_new_extra_question_info_extra_question_info_component__ = __webpack_require__("../../../../../src/app/lesson-new/add-lesson/template-new/extra-question-info/extra-question-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__Services_Common_loading_service__ = __webpack_require__("../../../../../src/app/Services/Common/loading.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_25__add_new_course_add_new_course_component__["a" /* AddnewcourseComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__personal_cabinet_personal_cabinet_component__["a" /* PersonalCabinetComponent */],
            __WEBPACK_IMPORTED_MODULE_20__fellow_ship_fellow_ship_component__["a" /* FellowComponent */],
            __WEBPACK_IMPORTED_MODULE_21__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_22__library_library_component__["a" /* LibraryComponent */],
            __WEBPACK_IMPORTED_MODULE_23__course_course_component__["a" /* CourseComponent */],
            __WEBPACK_IMPORTED_MODULE_24__lessons_lessons_component__["a" /* LessonsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_safe_html_pipe__["a" /* SafeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_30__course_new_course_new_component__["a" /* CourseNewComponent */],
            __WEBPACK_IMPORTED_MODULE_34__lesson_new_add_lesson_add_lesson_component__["a" /* AddLessonComponent */],
            __WEBPACK_IMPORTED_MODULE_35__lesson_new_add_lesson_description_description_component__["a" /* DescriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_38__lesson_new_add_lesson_free_form_free_form_component__["a" /* FreeFormComponent */],
            __WEBPACK_IMPORTED_MODULE_39__lesson_new_add_lesson_segment_new_segment_new_component__["a" /* SegmentNewComponent */],
            __WEBPACK_IMPORTED_MODULE_40__lesson_new_add_lesson_template_new_template_new_component__["a" /* TemplateNewComponent */],
            __WEBPACK_IMPORTED_MODULE_41__Pipes_safe_image_pipe__["a" /* SafeImagePipe */],
            __WEBPACK_IMPORTED_MODULE_42__lesson_new_add_lesson_preview_preview_component__["a" /* PreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_43__add_new_courseempty_add_new_courseempty_component__["a" /* AddNewCourseemptyComponent */],
            __WEBPACK_IMPORTED_MODULE_44__request_access_request_access_component__["a" /* RequestAccessComponent */],
            __WEBPACK_IMPORTED_MODULE_46__lesson_new_add_lesson_template_new_extra_question_info_extra_question_info_component__["a" /* ExtraQuestionInfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_19__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_32__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_18__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_4_ng_sidebar__["SidebarModule"].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__Services_Common_ActiveUser__["a" /* ActiveUser */], __WEBPACK_IMPORTED_MODULE_29__resolver_cources_resolver__["a" /* CourcesResolver */], __WEBPACK_IMPORTED_MODULE_47__Services_Common_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_9__Services_Common_CustomeServerCallService__["a" /* CustomeServerCallService */], __WEBPACK_IMPORTED_MODULE_10__Services_Common_course_service__["a" /* CarriculamCourseService */], __WEBPACK_IMPORTED_MODULE_27__Services_Common_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_37__Services_lesson_template_template_service__["a" /* TemplateService */],
            __WEBPACK_IMPORTED_MODULE_33__Services_Common_custome_http_service__["a" /* CustomeHttpService */], __WEBPACK_IMPORTED_MODULE_31__Services_courses_course_service__["a" /* CourseServiceNew */], __WEBPACK_IMPORTED_MODULE_36__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */],
            __WEBPACK_IMPORTED_MODULE_11__Services_Common_FormEncode__["a" /* FormEncode */], __WEBPACK_IMPORTED_MODULE_12__Services_Common_lessons_service__["a" /* LessonsService */], __WEBPACK_IMPORTED_MODULE_13__services_common_localStorage__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_14__Services_creditcard_service__["a" /* CreditCardService */], __WEBPACK_IMPORTED_MODULE_16__Services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_15__Services_usefullLink_service__["a" /* UsefullLinkService */], __WEBPACK_IMPORTED_MODULE_45__Services_shared_service_app_component_service__["a" /* AppComponentService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["HashLocationStrategy"] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_cabinet_personal_cabinet_component__ = __webpack_require__("../../../../../src/app/personal-cabinet/personal-cabinet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fellow_ship_fellow_ship_component__ = __webpack_require__("../../../../../src/app/fellow-ship/fellow-ship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__library_library_component__ = __webpack_require__("../../../../../src/app/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__course_course_component__ = __webpack_require__("../../../../../src/app/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__course_new_course_new_component__ = __webpack_require__("../../../../../src/app/course-new/course-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lesson_new_add_lesson_add_lesson_component__ = __webpack_require__("../../../../../src/app/lesson-new/add-lesson/add-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_new_courseempty_add_new_courseempty_component__ = __webpack_require__("../../../../../src/app/add-new-courseempty/add-new-courseempty.component.ts");












var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */],
    },
    {
        path: 'PersonalCabinet',
        component: __WEBPACK_IMPORTED_MODULE_2__personal_cabinet_personal_cabinet_component__["a" /* PersonalCabinetComponent */]
    },
    {
        path: 'Login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'Fellow',
        component: __WEBPACK_IMPORTED_MODULE_4__fellow_ship_fellow_ship_component__["a" /* FellowComponent */]
    },
    {
        path: 'Register',
        component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */]
    },
    //{
    //    path: 'CreditCard', //otherwise route
    //    component: CreditCard
    //},
    {
        path: 'Course',
        component: __WEBPACK_IMPORTED_MODULE_7__course_course_component__["a" /* CourseComponent */],
    },
    {
        path: 'Course-new/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__course_new_course_new_component__["a" /* CourseNewComponent */]
    },
    {
        path: 'add-newLesson/:Courseid',
        component: __WEBPACK_IMPORTED_MODULE_10__lesson_new_add_lesson_add_lesson_component__["a" /* AddLessonComponent */]
    },
    {
        path: 'Profile1',
        component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'Library',
        component: __WEBPACK_IMPORTED_MODULE_6__library_library_component__["a" /* LibraryComponent */]
    },
    {
        path: 'Addnewcourse/:id',
        component: __WEBPACK_IMPORTED_MODULE_11__add_new_courseempty_add_new_courseempty_component__["a" /* AddNewCourseemptyComponent */]
    },
    //{
    //    path: 'Submission', //otherwise route
    //    component: Submission
    //},
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/course-new/course-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading {\r\n  color: black;\r\n}\r\n\r\n.para1 {\r\n  font-size: 20px;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 15px;\r\n}\r\n\r\n  .switch input {\r\n    display: none;\r\n  }\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\r\n}\r\n\r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 20px;\r\n    width: 12px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n\r\ninput:checked + .slider {\r\n  background-color: green;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(20px);\r\n  transform: translateX(20px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\na:hover {\r\n  color: #884ef9;\r\n  text-decoration: none;\r\n}\r\n.coursename\r\n{\r\n  font-size:32px;\r\n  text-align: left;\r\n  margin-left:45px;\r\n  margin-top:10px;\r\n  color: #4a4a4a;\r\n  font-weight: bold;\r\n  font-family:arial;\r\n}\r\n#backtocourses\r\n{\r\n  font-family:arial;\r\n  font-size:20px;\r\n  margin-left:60px;\r\n}\r\n#comment\r\n{\r\n  margin-left:60px;\r\n  margin-top:10px;\r\nwidth:375px;\r\nheight:250px;\r\nresize:none;\r\nbackground:#fff;\r\nborder: 1px solid lightgray;\r\ncolor: #7d7d7d;\r\nfont-size:20px;\r\noverflow:hidden;\r\n}\r\n.editorsave\r\n{\r\n  margin-top:40px;\r\n  margin-left:60px;\r\n  width:132px;\r\n  height:40px;\r\n  border-radius:3px;\r\n  color: #7d7d7d;\r\n  border-radius: 3px;\r\n  background-color: #e9e9e9;\r\n}\r\n.addalesson\r\n{\r\n  width: 132px;\r\n  height: 40px;\r\n  border-radius: 3px;\r\n  background-color: #86d190;\r\n  color:white;\r\n  font-size:16px;\r\n  font-family:arial;\r\n  text-align:center;\r\n}\r\n.addalesson a:hover{\r\n  background-color: #86d190;\r\n  color:white; \r\n  font-family:arial;\r\n  text-align:center;\r\n}\r\n.stagingbutton\r\n{\r\n  width: 168px;\r\n  height: 40px;\r\n  border-radius: 3px;\r\n  background-color: #86d190;\r\n  color:white;\r\n  font-size:16px;\r\n  font-family:arial;\r\n  text-align:center;\r\n}\r\n.stagingbutton a:hover\r\n{\r\n  width: 168px;\r\n  height: 40px;\r\n  background-color: #86d190;\r\n  color:white; \r\n  font-family:arial;\r\n  text-align:center;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/course-new/course-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div class=\"col-lg-12\" *ngIf=\"!Shownewlesson\">\r\n\r\n  \r\n \r\n  <div class=\"col-lg-5\" style=\"border-right:1px solid lightgrey\">\r\n    <div class=\"row\">\r\n        <p style=\"text-align: left; padding: 1%; color: #884ef9\">\r\n            <a  routerLink=\"/Library\" id=\"backtocourses\" style=\"margin-left:10px;\" ><i class=\"fa fa-long-arrow-left\"></i> Back to Courses</a>\r\n          </p>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"editname\">\r\n          <textarea class=\"coursename\" rows=\"1\" [(ngModel)]=\"currentCourse.CourseName\" style=\"resize:none;\">{{currentCourse.CourseName}}</textarea>\r\n          </div>\r\n   \r\n          <div class=\"row\" *ngIf=\"displayname\">\r\n              <textarea class=\"coursename\" rows=\"1\" [(ngModel)]=\"currentCourse.CourseName\" style=\"resize:none; background:#FFF;\" disabled>{{currentCourse.CourseName}}</textarea>\r\n              </div>\r\n\r\n    <div class=\"row\">\r\n      \r\n        <div class=\"row\" *ngIf=\"editcontent\">\r\n          <textarea style=\"font-size:20px;font-family:arial;color:#7d7d7d;overflow-y:scroll; overflow-x:hidden;height:300px;\" class=\"col-lg-6 \" rows=\"10\" id=\"comment\" [(ngModel)]=\"currentCourse.CourseContent\">\r\n            {{currentCourse.CourseContent}}\r\n        </textarea>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"displaycontent\">\r\n          <div style=\"margin-top:10px;margin-left:60px; width:380px; height:300px; overflow-y:scroll; overflow-x:hidden; border:1px solid lightgrey;\">\r\n           <p style=\"font-size:20px;font-family:arial;color:#7d7d7d;\"> {{currentCourse.CourseContent}} </p>\r\n            </div>\r\n          </div>\r\n       <div class=\"row\" style=\"margin-bottom:40px;\">\r\n        <input class=\"editorsave\" type=\"button\" id=\"btnchange\"  [attr.value]=\"courseContentDisabled?'Save':'Edit'\" (click)=\"changeTextArea()\">\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n   \r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"col-lg-7 pull-right\">\r\n    <div class=\"row\">\r\n      <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n\r\n        <li role=\"presentation\"\r\n            class=\"{{IsTable7}}\"><a (click)=\"changeTab('IsTable7')\" aria-controls=\"table7\" role=\"tab\" data-toggle=\"tab\">Active Lessons</a></li>\r\n        <li role=\"presentation\" class=\"{{IsTable8}}\"><a (click)=\"changeTab('IsTable8')\" aria-controls=\"table8\" role=\"tab\" data-toggle=\"tab\">Drafts</a></li>\r\n\r\n        <li>\r\n          <a class=\"stagingbutton\" data-toggle=\"modal\" data-target=\"#pushlessons\" *ngIf=\"selecteddrafts.length>0\">Add to Staging</a>\r\n          </li>\r\n\r\n        <li class=\"pull-right\">\r\n          <a class=\"addalesson\" [routerLink]=\"['/add-newLesson', currentCourse.Id]\" *ngIf=\"newl\">New Lesson</a>\r\n\r\n        </li>\r\n\r\n      </ul>\r\n      <div id=\"pushlessons\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h2 align=\"center\">Push Lessons</h2>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>\r\n                Congratulations! It looks like you are ready to\r\n                <br />\r\n                submit this lesson to queue for beta testing\r\n              </p>\r\n              <br>\r\n              <input type=\"text\" id=\"lessonpin\" placeholder=\"Enter Pin\">\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button data-toggle=\"modal\" data-target=\"#pushlessons\" (click)=\"AddtoStaging()\">Submit</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane {{IsTable7}}\">\r\n\r\n          <table class=\"table table-bordered\" role=\"tabpanel\">\r\n            <tr *ngFor=\"let lesson of currentCourse.LessonList\">\r\n              <td>{{lesson.LessonName}}</td>\r\n              <td><i class=\"fa fa-bar-chart\" style=\"color:#884ef9;\" aria-hidden=\"true\"></i></td>\r\n              <td><i class=\"fa fa-usd\" style=\"color:#884ef9;\" aria-hidden=\"true\"></i></td>\r\n              <td>{{profile.FirstName}} {{profile.LastName}}</td>\r\n              <td><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></td>\r\n            </tr>\r\n          </table>\r\n          <div *ngIf=\"currentCourse.LessonList.length==0\">\r\n            <img src='/assets/images/nolessons.png' style=\"margin-top:80px; width: 153px; height: 138px;\">\r\n             <p style=\"font-size: 32px; color: #4a4a4a; font-weight: bold; line-height: 1.13;margin-top:40px;\">Nothing to See Here!</p>\r\n             <br/>\r\n             <p>You dont have any lesson staged from draft<br/>\r\n              Go to draft for staging the lessons.\r\n             </p>\r\n             <!-- <br/>\r\n             <p align=\"center\"><button id=\"startlessonbutton\" class=\"btn btn-success\">Start A Lesson</button>\r\n             </p> -->\r\n           </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"tab-pane  {{IsTable8}}\">\r\n\r\n          <table class=\"table table-bordered\" role=\"tabpanel\">\r\n            <tr *ngFor=\"let draft of currentCourse.DraftList; let i=index;\">\r\n              <td>\r\n                \r\n                <input type=\"checkbox\" name=\"lessoncheckbox\" \r\n                style=\"height:20px;width:20px;\"\r\n                (change)=\"selectionChange($event.srcElement,draft,i)\">\r\n               \r\n                </td>\r\n              <td>{{draft.DraftName}}</td>\r\n              <td><i class=\"fa fa-bar-chart\" style=\"color:#884ef9;\" aria-hidden=\"true\"></i></td>\r\n              <td><i class=\"fa fa-usd\" style=\"color:#884ef9;\" aria-hidden=\"true\"></i></td>\r\n              <td> {{profile.FirstName}} {{profile.LastName}}</td>\r\n              <td><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></td>\r\n            </tr>\r\n          </table>\r\n          <div *ngIf=\"currentCourse.DraftList.length==0\" >\r\n            <img src='/assets/images/nolessons.png' style=\"margin-top:80px; width: 153px; height: 138px;\">\r\n             <p style=\"font-size: 32px; color: #4a4a4a; font-weight: bold; line-height: 1.13;margin-top:40px;\">Nothing to See Here!</p>\r\n             <br/>\r\n             <p >You dont have any lesson in draft.<br/>\r\n             </p>\r\n             <!-- <br/>\r\n             <p align=\"center\"><button id=\"startlessonbutton\" class=\"btn btn-success\">Start A Lesson</button>\r\n             </p> -->\r\n           </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<add-Lesson ActiveCourseId={{ActiveCourseId}} (BackToCourcesList)=\"changeComponentsCourse($event)\" *ngIf=\"Shownewlesson\"></add-Lesson>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/course-new/course-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_courses_course_service__ = __webpack_require__("../../../../../src/app/Services/courses/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_lesson_lesson_shared_service__ = __webpack_require__("../../../../../src/app/Services/lesson/lesson-shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_profile_service__ = __webpack_require__("../../../../../src/app/Services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_Common_ActiveUser__ = __webpack_require__("../../../../../src/app/Services/Common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_common_CustomeServerCallService__ = __webpack_require__("../../../../../src/app/Services/common/CustomeServerCallService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CourseNewComponent = (function () {
    function CourseNewComponent(courseServiceNew, lessonService, route, profileService, activeUser) {
        this.courseServiceNew = courseServiceNew;
        this.lessonService = lessonService;
        this.route = route;
        this.profileService = profileService;
        this.profile = {};
        this.newl = true;
        this.displayname = true;
        this.editname = false;
        this.displaycontent = true;
        this.editcontent = false;
        this.Shownewlesson = false;
        this.selecteddrafts = [];
        this.UserId = '';
        this.IsTable7 = 'active';
        this.IsTable8 = '';
        this.currentCourse = {};
        this.activeUser = activeUser;
    }
    CourseNewComponent.prototype.Initialize = function () {
        var _this = this;
        this.profileService.getProfileByUserId(this.UserId)
            .subscribe(function (res) {
            res = res.json();
            // console.log()res);
            _this.profile = res;
        });
        var data = {
            FirstName: this.firstname,
            LastName: this.lastname,
        };
    };
    Object.defineProperty(CourseNewComponent.prototype, "selectedOptions", {
        get: function () {
            return this.selecteddrafts
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    CourseNewComponent.prototype.changeTextArea = function () {
        var _this = this;
        if ($('#btnchange').val() == 'Edit') {
            //$('#comment').prop('disabled', false);
            $('#btnchange').val('Save');
            this.displaycontent = false;
            this.editcontent = true;
            this.displayname = false;
            this.editname = true;
        }
        else {
            //ToDo do the save part
            // $('#comment').prop('disabled', true);
            $('#btnchange').val('Edit');
            this.UserId = this.activeUser.initialize().UserID;
            this.route.params.subscribe(function (a) {
                _this.courseId = a['id'];
            });
            this.courseServiceNew.updateCourse(this.courseId)
                .subscribe(function (a) {
                _this.currentCourse = a.json();
                // console.log()this.currentCourse);
            });
            this.displaycontent = true;
            this.editcontent = false;
            this.displayname = true;
            this.editname = false;
        }
    };
    CourseNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UserId = this.activeUser.initialize().UserID;
        this.Initialize();
        this.route.params.subscribe(function (a) {
            _this.courseId = a['id'];
        });
        this.courseServiceNew.getCourseById(this.courseId)
            .subscribe(function (a) {
            _this.currentCourse = a.json();
            // console.log()this.currentCourse);
        });
    };
    CourseNewComponent.prototype.changeTab = function (tabId) {
        if (tabId == 'IsTable7' && this.IsTable7 != 'active') {
            this.IsTable7 = 'active';
            this.IsTable8 = '';
        }
        else if (tabId == 'IsTable8' && this.IsTable8 != 'active') {
            this.IsTable8 = 'active';
            this.IsTable7 = '';
        }
    };
    CourseNewComponent.prototype.addToSelectedDraft = function (draft) {
        // console.log()this.selecteddrafts);
        this.selecteddrafts.push(draft);
        // console.log()this.selecteddrafts);
    };
    CourseNewComponent.prototype.selectionChange = function (input, draft, i) {
        input.checked === true ? this.doSomethingIfTrue(draft) : this.doSomethingIfFalse(draft);
    };
    CourseNewComponent.prototype.doSomethingIfTrue = function (draft) {
        this.selecteddrafts.push(draft);
        // console.log()this.selecteddrafts);
    };
    CourseNewComponent.prototype.doSomethingIfFalse = function (draft) {
        this.selecteddrafts.splice(this.selecteddrafts.indexOf(draft), 1);
        // console.log()this.selecteddrafts);
    };
    CourseNewComponent.prototype.AddtoStaging = function () {
        var _this = this;
        // console.log()this.selecteddrafts);
        this.lessonService.AddToStaging(this.selecteddrafts).subscribe(function (res) {
            res = res.json();
            for (var element in _this.selecteddrafts) {
                // console.log()element);
            }
            alert(res);
            alertify.alert('Incubator Says', 'Staging Complete! Lessons Moved From Draft To Active Lessons', function () { window.location.reload(); });
        }, function (err) {
        });
    };
    return CourseNewComponent;
}());
CourseNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-course-new',
        template: __webpack_require__("../../../../../src/app/course-new/course-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/course-new/course-new.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__Services_Common_ActiveUser__["a" /* ActiveUser */], __WEBPACK_IMPORTED_MODULE_4__Services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_6__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_courses_course_service__["a" /* CourseServiceNew */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_courses_course_service__["a" /* CourseServiceNew */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__Services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_profile_service__["a" /* ProfileService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__Services_Common_ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Services_Common_ActiveUser__["a" /* ActiveUser */]) === "function" && _e || Object])
], CourseNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=course-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" *ngIf=\"!Shownewlesson\">\r\n\r\n  <h4 style=\"text-align:left;padding:1%; color:#884ef9\" (click)=\"backtocourses()\"><i class=\"glyphicon glyphicon-arrow-left\"></i> Back to Courses</h4>\r\n  <h2 class=\"heading\" style=\"text-align:left\"><strong>{{currentCourse.Name}}</strong></h2>\r\n  <div class=\"col-lg-5\">\r\n    <div class=\"row\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <textarea class=\"form-control col-lg-6\" rows=\"8\" id=\"comment\" disabled=\"disabled\">\r\n            {{currentCourse.Content}}\r\n        </textarea>\r\n        </div>\r\n        <div class=\"checkbox col-lg-12\">\r\n          <span class=\"pull-left\">\r\n            Premium Content\r\n          </span>\r\n          <label class=\"switch col-lg-5 pull-right\">\r\n            <input type=\"checkbox\" style=\"display:none\">\r\n            <span class=\"slider round\"></span>\r\n          </label>\r\n\r\n        </div>\r\n        <input class=\"btn btn-default \" type=\"button\" id=\"btnchange\" value=\"Edit\" (click)=\"changeTextArea()\">\r\n    </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"col-lg-6 pull-right\">\r\n    <div class=\"row\">\r\n      <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n\r\n        <li role=\"presentation\" class=\"{{IsTable7}}\"><a (click)=\"changeTab('IsTable7')\" aria-controls=\"table7\" role=\"tab\" data-toggle=\"tab\" *ngIf=\"acti\">Active Lessons</a></li>\r\n        <li role=\"presentation\" class=\"{{IsTable8}}\"><a (click)=\"changeTab('IsTable8')\" aria-controls=\"table8\" role=\"tab\" data-toggle=\"tab\" *ngIf=\"draf\">Drafts</a></li>\r\n\r\n        <li class=\"pull-right\">\r\n          <input type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"showAddLesson()\" *ngIf=\"newl\" value=\"New Lesson\" />\r\n\r\n        </li>\r\n        <li>\r\n          <input type=\"button\" class=\"btn btn-success\" value=\"Add to Staging\" *ngIf=\"addtostaging\" data-toggle=\"modal\" data-target=\"#pushlessons\">\r\n\r\n        </li>\r\n        <li><a *ngIf=\"dele\">Delete</a></li>\r\n        <li><a *ngIf=\"arch\" (click)=\"archive()\">Archive</a></li>\r\n\r\n      </ul>\r\n      <div id=\"pushlessons\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h2 align=\"center\">Push Lessons</h2>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>\r\n                Congratulations! It looks like you are ready to\r\n                <br />\r\n                submit this lesson to queue for beta testing\r\n              </p>\r\n              <br>\r\n              <input type=\"text\" id=\"lessonpin\" placeholder=\"Enter Pin\">\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button (click)=\"stagingcomplete()\">Submit</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane {{IsTable7}}\">\r\n\r\n          <table class=\"table table-bordered\" role=\"tabpanel\">\r\n            <tr *ngFor=\"let lesson of currentCourse.LessonList\">\r\n              <td>{{lesson.LessonName}}</td>\r\n              <td><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i></td>\r\n              <td><i class=\"fa fa-usd\" aria-hidden=\"true\"></i></td>\r\n\r\n              <td><i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i></td>\r\n              <td>{{lesson.AuthorName}}</td>\r\n              <td><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></td>\r\n            </tr>\r\n          </table>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"tab-pane  {{IsTable8}}\">\r\n\r\n          <table class=\"table table-bordered\" role=\"tabpanel\">\r\n            <tr *ngFor=\"let draft of currentCourse. DraftList\">\r\n              <td><input type=\"checkbox\" name=\"lessoncheckbox\" style=\"height:20px;width:20px\" (click)=\"staging()\"></td>\r\n              <td>{{draft.DraftName}}</td>\r\n              <td><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i></td>\r\n              <td><i class=\"fa fa-usd\" aria-hidden=\"true\"></i></td>\r\n\r\n              <td><i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i></td>\r\n              <td>{{draft.AuthorName}}</td>\r\n              <td><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></td>\r\n            </tr>\r\n          </table>\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<add-Lesson ActiveCourseId={{ActiveCourseId}} (BackToCourcesList)=\"changeComponentsCourse($event)\" *ngIf=\"Shownewlesson\"></add-Lesson>\r\n"

/***/ }),

/***/ "../../../../../src/app/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_common_course_service__ = __webpack_require__("../../../../../src/app/services/common/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_common_ActiveUser__ = __webpack_require__("../../../../../src/app/Services/common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_common_FormEncode__ = __webpack_require__("../../../../../src/app/Services/common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_common_CustomeServerCallService__ = __webpack_require__("../../../../../src/app/Services/common/CustomeServerCallService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__ = __webpack_require__("../../../../../src/app/services/common/notification.service.ts");
/// <reference path="../appmodels/CourseComponent.Model/CourseSingleModel.ts" />
/// <reference path="../services/common/course.service.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseComponent = (function () {
    function CourseComponent(activeUser, customeServerCallService, courseService, notificationService) {
        this.notificationService = notificationService;
        this.courseService = null;
        this.LessonList = [];
        this.DraftList = [];
        this.StatsImage = null;
        this.DollarImage = null;
        this.NotiImage = null;
        this.DotsImage = null;
        this.IsTable7 = '';
        this.IsTable8 = '';
        this.UserId = '';
        this.acti = true;
        this.draf = true;
        this.newl = true;
        this.addtostaging = false;
        this.dele = false;
        this.arch = false;
        // for Adding Lesson
        this.Shownewlesson = false;
        this.currentCourse = {};
        this.BackToCources = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activeUser = activeUser;
        this.courseService = courseService;
        this.customeServerCallService = customeServerCallService;
        this.UserId = this.activeUser.profile.UserID;
    }
    CourseComponent.prototype.changeTextArea = function () {
        if ($('#btnchange').val() == 'Edit') {
            $('#comment').prop('disabled', false);
            $('#btnchange').val('Save');
        }
        else {
            //ToDo do the save part
            $('#comment').prop('disabled', true);
            $('#btnchange').val('Edit');
        }
    };
    CourseComponent.prototype.GetCourseDetail = function (id) {
        var _this = this;
        var observable = this.courseService.getCourseById(id);
        observable.subscribe(function (res) { return _this.successGetCourseDetail(res); }, function (err) { return _this.errorIGetCourseDetail(err); });
    };
    CourseComponent.prototype.successGetCourseDetail = function (responsea) {
        var response = JSON.parse(responsea._body);
        this.currentCourse = response;
        // this.ShowCoursesList = false;
    };
    CourseComponent.prototype.errorIGetCourseDetail = function (error) {
        alert(error);
    };
    CourseComponent.prototype.ngOnInit = function () {
        this.StatsImage = this.courseService.getStats();
        this.DollarImage = this.courseService.getDollar();
        this.NotiImage = this.courseService.getNoti();
        this.DotsImage = this.courseService.getDots();
        this.IsTable7 = 'active';
        // console.log()this.IsTable7);
        this.GetCourseDetail(this.ActiveCourseId);
    };
    CourseComponent.prototype.showAddLesson = function () {
        this.Shownewlesson = true;
    };
    CourseComponent.prototype.staging = function () {
        this.acti = false;
        this.draf = false;
        this.newl = false;
        this.addtostaging = true;
        this.dele = true;
        this.arch = true;
    };
    CourseComponent.prototype.stagingcomplete = function () {
        alert('Staging Complete');
    };
    CourseComponent.prototype.backtocourses = function () {
        try {
            this.BackToCources.emit('ShowCoursesList');
            // console.log()'mouseclick called');
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    CourseComponent.prototype.archive = function () {
        this.acti = true;
        this.draf = true;
        this.newl = true;
        this.addtostaging = false;
        this.dele = false;
        this.arch = false;
        this.IsTable7 = 'active';
        this.IsTable8 = '';
    };
    CourseComponent.prototype.changeComponentsCourse = function (data) {
        alert(data);
        this.Shownewlesson = data;
    };
    CourseComponent.prototype.changeTab = function (tabId) {
        if (tabId == 'IsTable7' && this.IsTable7 != 'active') {
            this.IsTable7 = 'active';
            this.IsTable8 = '';
        }
        else if (tabId == 'IsTable8' && this.IsTable8 != 'active') {
            this.IsTable8 = 'active';
            this.IsTable7 = '';
        }
    };
    return CourseComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ActiveCourseId'),
    __metadata("design:type", Object)
], CourseComponent.prototype, "ActiveCourseId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], CourseComponent.prototype, "BackToCources", void 0);
CourseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_common_ActiveUser__["a" /* ActiveUser */], __WEBPACK_IMPORTED_MODULE_3__Services_common_FormEncode__["a" /* FormEncode */], __WEBPACK_IMPORTED_MODULE_1__services_common_course_service__["a" /* CarriculamCourseService */],
            __WEBPACK_IMPORTED_MODULE_4__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */], __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__["a" /* NotificationService */]],
        selector: 'course-Detail',
        template: __webpack_require__("../../../../../src/app/course/course.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_common_ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_common_ActiveUser__["a" /* ActiveUser */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_common_course_service__["a" /* CarriculamCourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_common_course_service__["a" /* CarriculamCourseService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__["a" /* NotificationService */]) === "function" && _e || Object])
], CourseComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#yellowbirdLogo {\r\n  width: 239.7px;\r\n  height: 200px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n}\r\n\r\n#dashboardTitle {\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  font-family:arial;\r\n  margin-top:20px;\r\n}\r\n\r\n#dashboardSubTitle {\r\n  font-size: 23px;\r\n  line-height: 1.35;\r\n  letter-spacing: -0px;\r\n  text-align: center;\r\n  color: #5c5e5f;\r\n  font-family:arial;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Start Here --------------------------->\r\n\r\n\r\n\r\n<section class=\"container\">\r\n\r\n  <!--  <div class=\"logo\"><img src=\"../../assets/images/logo.png\"></div>-->\r\n\r\n  <div class=\"col-lg-12\"><img src=\"../../assets/images/learning.png\" id=\"yellowbirdLogo\" align=\"middle\"></div>\r\n\r\n<!-- </section> -->\r\n\r\n<div class=\"col-lg-12\">\r\n<div class=\"row\">\r\n  <p id=\"dashboardTitle\">\r\n    Financial education\r\n    <br />\r\n\r\n    <br />\r\n    made easy.\r\n  </p>\r\n  <br />\r\n  <br />\r\n  </div>\r\n  <div class=\"row\">\r\n  <p id=\"dashboardSubTitle\">Instead of teaching from a 500-page book or in an auditorium, we are providing a mobile-first platform designed for you - on the go!</p>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<!-- How It Works --------------------------->\r\n<!--\r\n<section>\r\n\r\n    <article class=\"container-full\">\r\n\r\n        <div>\r\n            <h2>Meet Yellowbird</h2>\r\n            <h4>Free financial education in your pocket</h4>\r\n            <p>Yellowbird is a mobile-first app that teaches you everything you want to know about your personal money. Yellowbird's content is structured to be learned in small, bite-sized pieces with multiple, interactive formats. We want to take advantage of those small windows of time during a meal, while commuting, walking the dog, etc. to teach you things that can help you understand your finances.</p>\r\n        </div>\r\n        <div class=\"img-large__iphone\"><img src=\"../../assets/images/product.png\"></div>\r\n\r\n    </article>\r\n        -->\r\n<!--\r\n    <section class=\"container\">\r\n        <article class=\"container group\">\r\n\r\n            <h2>How Yellowbird Works</h2>\r\n\r\n            <ul class=\"list-features\">\r\n    -->\r\n<!-- Personalization ------------------------->\r\n<!--\r\n                <li class=\"container-mini\">\r\n\r\n                    <div class=\"img-medium\"><img src=\"../../assets/images/personalize.png\"></div>\r\n\r\n                    <h5>Personalization</h5>\r\n\r\n                    <p>You select what topics you want to learn about first and you learn about them at your preferred pace.</p>\r\n\r\n                </li>\r\n    -->\r\n<!-- Microlearning --------------------------->\r\n<!--\r\n                <li class=\"container-mini\">\r\n\r\n                    <div class=\"img-medium\"><img src=\"../../assets/images/microlearning.png\"></div>\r\n\r\n                    <h5>Microlearning</h5>\r\n\r\n                    <p>The process of learning complex skills and themes in short, bite-sized segments.</p>\r\n\r\n                </li>\r\n    -->\r\n<!-- Gamification --------------------------->\r\n<!--\r\n\r\n                <li class=\"container-mini\">\r\n\r\n                    <div class=\"img-medium\"><img src=\"../../assets/images/gamification.png\"></div>\r\n\r\n                    <h5>Gamification</h5>\r\n\r\n                    <p>Yellowbird takes boring, hard concepts, and turned them into fun, engaging game-like lessons.</p>\r\n\r\n                </li>\r\n    -->\r\n<!-- Definitions ----------------------------->\r\n<!--\r\n                <li class=\"container-mini\">\r\n\r\n                    <div class=\"img-medium\"><img src=\"../../assets/images/definition.png\"></div>\r\n\r\n                    <h5>Study Guides & Definitions</h5>\r\n\r\n                    <p>Simple illustrations are used to depict newly introduced financial terms and concepts.</p>\r\n\r\n                </li>\r\n    -->\r\n<!-- Status Levels --------------------------->\r\n<!--\r\n                <li class=\"container-mini\">\r\n\r\n                    <div class=\"img-medium\"><img src=\"../../assets/images/levels.png\"></div>\r\n\r\n                    <h5>Status Levels</h5>\r\n\r\n                    <p>The more points you earn, the higher your status. Unlock features, special content, and partner rewards as your level increases.</p>\r\n\r\n                </li>\r\n    -->\r\n<!-- Push Notifications --------------------->\r\n<!--\r\n                <li class=\"container-mini\">\r\n\r\n                    <div class=\"img-medium\"><img src=\"../../assets/images/notification.png\"></div>\r\n\r\n                    <h5>Push Notifications</h5>\r\n\r\n                    <p>Get notified about study reminders and new course material.</p>\r\n\r\n                </li>\r\n\r\n            </ul>\r\n\r\n        </article>\r\n\r\n\r\n\r\n    </section>\r\n\r\n\r\n</section>\r\n    -->\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_shared_service_app_component_service__ = __webpack_require__("../../../../../src/app/Services/shared-service/app-component.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(sharedService) {
        this.sharedService = sharedService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.photoUrl = this.sharedService.photoURL();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_shared_service_app_component_service__["a" /* AppComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_shared_service_app_component_service__["a" /* AppComponentService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/fellow-ship/fellow-ship.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"button-back\"><a href=\"index.html\">Homepage</a></div>\r\n</header>\r\n\r\n<section>\r\n  <div class=\"container-headline\">\r\n    <img src=\"/assets/images/fellowship.png\" class=\"overflow\" alt=\"\">\r\n  </div>\r\n</section>\r\n\r\n<section class=\"container__left\">\r\n  <article class=\"container-medium__fellow\">\r\n    <h1>The Yellowbird Fellowship</h1>\r\n    <h3>A Yellowbird Fellowship? Tell me more...</h3>\r\n    <p>A Yellowbird fellowship is a 90-day sprint for individuals that share the same passion in helping solve a problem. At Yellowbird, having excellent content is our top priority. When a contributor writes a piece or curates a lesson for Yellowbird, it’s up to us to ensure that the Yellowbird tone comes across clearly. </p>\r\n\r\n    <h3>About the \"Office\"</h3>\r\n    <p>We’re virtual for the most part. If you’re in Atlanta, we can always work together. We’ll have weekly calls and a dedicated group chat in Slack to keep things fresh and progressing during the week.</p>\r\n\r\n\r\n    <aside class=\"container-list\">\r\n      <h3>Current Fellowships</h3>\r\n      <ul class=\"list-fellowships\">\r\n        <li class=\"button_grey\" (click)=\"goTo('content-fellow')\"><a>Content</a></li>\r\n        <li class=\"button_grey\" (click)=\"goTo('illustration-fellow')\"><a>Creative</a></li>\r\n        <li class=\"button_grey\" (click)=\"goTo('marketing-fellow')\"><a>Marketing</a></li>\r\n        <li class=\"button_grey\" (click)=\"goTo('marketing-fellow')\"><a>Research</a></li>\r\n      </ul>\r\n    </aside>\r\n  </article>\r\n\r\n\r\n  <!-- Content Fellowship\r\n  ----------------------------------------->\r\n\r\n  <article class=\"container-medium__fellow\" id=\"content-fellow\">\r\n    <h2>Content Fellow</h2>\r\n    <p>At Yellowbird, having excellent content is our top priority. When a contributor writes a piece or curates a lesson for Yellowbird, it’s up to us to ensure that the Yellowbird tone comes across clearly. The Content fellow will help create content, edit pieces and develop copy for curriculum campaigns. Ensuring that our content meets the needs & interests of our website visitors and app users is one of the most crucial ingredients to our success. This fellowship requires someone who has a good eye for detail and a passion for helping others learn.</p>\r\n    <br>\r\n    <p><strong>A typical Content Fellow's week would look something like this</strong></p>\r\n    <ul class=\"list-objectives\">\r\n      <li>Build content for the Yellowbird courses based on the research provided for each curriculum segment.</li>\r\n      <li>Revise and edit course content for the Yellowbird platform.</li>\r\n      <li>Identify and understand Yellowbird’s audience & craft a relevant voice.</li>\r\n      <li>Draft copy for Yellowbird and campaign micro-sites.</li>\r\n    </ul>\r\n\r\n    <a href=\"https://goo.gl/forms/RFbup0JqCxohTdjo2\"><button>Apply Now</button></a>\r\n  </article>\r\n\r\n\r\n  <!-- Illustration Fellowship\r\n  ----------------------------------------->\r\n\r\n  <article class=\"container-medium__fellow\" id=\"illustration-fellow\">\r\n    <h2>Creative Fellow</h2>\r\n    <p>\r\n      At Yellowbird, having <strong>excellent design</strong> is one of our top priorities and distinguishers. A big part of disrupting the financial education model is to create a total unique experience. Great typography, layouts, useful and engaging illustration is a big part of that. Some of the responsibilities a creative fellow will be asked to help out with includes:\r\n    </p>\r\n    <br>\r\n    <p><strong>The ideal candidate</strong></p>\r\n    <p>We’re looking for is energetic and creative with a positive outlook and a passion for creating change in the world through using their talents.  Must be artistically inclined and have ability to blend well with our virtual office culture: be fun, be loose, but most of all, driven.</p>\r\n    <br>\r\n    <p><strong>A typical Creative Fellow's week would look something like this</strong></p>\r\n    <ul class=\"list-objectives\">\r\n      <li>Design digital and print collateral for national campaigns and large scale events.</li>\r\n      <li>Create illustrations, banners, fliers, and advertisements to be displayed to our audience.</li>\r\n      <li>Create digital assets for social media channels.</li>\r\n    </ul>\r\n\r\n    <a href=\"https://goo.gl/forms/RFbup0JqCxohTdjo2\"><button>Apply Now</button></a>\r\n  </article>\r\n\r\n  <!-- Marketing Fellowship\r\n  ----------------------------------------->\r\n\r\n  <article class=\"container-medium__fellow\" id=\"marketing-fellow\">\r\n    <h2>Marketing Fellow</h2>\r\n    <p>This unique opportunity allows a Marketing Fellow to join a growing start-up company while learning about launching social media & direct response campaigns across digital platforms (FB, YouTube, AdWords, Search, and Twitter), write copy for ads, assist in writing engaging emails, be the liaison between Yellowbird and key Influencers, pull weekly reports, and more.</p>\r\n    <br>\r\n    <p><strong>The ideal candidate were looking for</strong></p>\r\n    <ul class=\"list-objectives\">\r\n      <li>Strong analytical skills a must</li>\r\n      <li>Ability to write clear, short, creative and effective copy</li>\r\n      <li>An understanding of good design and layouts for emails and graphics</li>\r\n      <li>Ability to brainstorm creative ideas to capture attention</li>\r\n      <li>Pro-active and work independently with guidance, but limited supervision, must be able to work well within a virtual team environment</li>\r\n      <li>Strong attention to detail and accuracy; persistent follow-through skills</li>\r\n      <li>Proven ability to organize, prioritize and complete multiple types of tasks</li>\r\n      <li>Computer and internet skills with proficiency in Microsoft Office including Word, PowerPoint, and Excel and Google Drive as well as general knowledge of Adobe Photoshop and InDesign</li>\r\n    </ul>\r\n\r\n    <a href=\"https://goo.gl/forms/RFbup0JqCxohTdjo2\"> <button>Apply Now</button></a>\r\n  </article>\r\n\r\n\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/fellow-ship/fellow-ship.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FellowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_usefulllink_service__ = __webpack_require__("../../../../../src/app/Services/usefulllink.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FellowComponent = (function () {
    function FellowComponent(linkService) {
        this.linkService = linkService;
        this.usefullLinkService = linkService;
    }
    Object.defineProperty(FellowComponent.prototype, "LinkList", {
        get: function () {
            return this.linkList;
        },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    FellowComponent.prototype.ngOnInit = function () {
        this.linkList = this.usefullLinkService.GetLinks();
    };
    FellowComponent.prototype.goTo = function (location) {
        window.location.hash = location;
    };
    FellowComponent.prototype.keyupHandler = function ($event) {
    };
    return FellowComponent;
}());
FellowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fellow-ship',
        template: __webpack_require__("../../../../../src/app/fellow-ship/fellow-ship.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_usefulllink_service__["a" /* UsefullLinkService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_usefulllink_service__["a" /* UsefullLinkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_usefulllink_service__["a" /* UsefullLinkService */]) === "function" && _a || Object])
], FellowComponent);

var _a;
//# sourceMappingURL=fellow-ship.component.js.map

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/add-lesson.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\r\n    background-color: var(--powder-blue-30);\r\n    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.nav-pills > li {\r\n    font-family: AcuminPro;\r\n    font-size: 16px;\r\n}\r\n\r\n    .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\r\n        background-color: rgba(186, 215, 255, 0.3);\r\n        box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);\r\n        font-family: AcuminPro;\r\n        font-size: 16px;\r\n        letter-spacing: -0px;\r\n        text-align: center;\r\n        color: #9765f8;\r\n        color: var(--lighter-purple);\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/add-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-justified nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\r\n  <li class=\"nav-item active\">\r\n    <a class=\"nav-link \" id=\"pills-home-tab1\" data-toggle=\"pill\" href=\"#Description\" role=\"tab\"\r\n       aria-controls=\"pills-home\" aria-selected=\"true\">Description</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link \" id=\"pills-home-tab2\" data-toggle=\"pill\" href=\"#FreeForm\" role=\"tab\"\r\n       aria-controls=\"pills-home\" aria-selected=\"true\">Free Form</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link \" id=\"pills-home-tab3\" data-toggle=\"pill\" href=\"#Segmentation\" role=\"tab\"\r\n       aria-controls=\"pills-home\" aria-selected=\"true\">Segmentation</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link \" id=\"pills-home-tab4\" data-toggle=\"pill\" href=\"#Templates\" role=\"tab\"\r\n       aria-controls=\"pills-home\" aria-selected=\"true\">Templates</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link \" id=\"pills-home-tab5\" data-toggle=\"pill\" href=\"#Preview\" role=\"tab\"\r\n       aria-controls=\"pills-home\" aria-selected=\"true\">Preview</a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\" id=\"pills-tabContent\">\r\n  <div class=\"tab-pane fade active in\" id=\"Description\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\r\n    <app-description></app-description>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"FreeForm\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\r\n    <app-free-form></app-free-form>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"Segmentation\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\r\n    <app-segment-new></app-segment-new>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"Templates\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\r\n    <app-template-new></app-template-new>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"Preview\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\r\n   <app-preview></app-preview>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/add-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_lesson_lesson_shared_service__ = __webpack_require__("../../../../../src/app/Services/lesson/lesson-shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddLessonComponent = (function () {
    function AddLessonComponent(route, lessonSharedService) {
        this.route = route;
        this.lessonSharedService = lessonSharedService;
    }
    AddLessonComponent.prototype.ngOnDestroy = function () {
        this.lessonSharedService.ToggelLessonButton(false);
        this.lessonSharedService.ToggleCancelButton(false);
    };
    AddLessonComponent.prototype.ngOnInit = function () {
        this.lessonSharedService.ToggelLessonButton(true);
        this.lessonSharedService.ToggleCancelButton(true);
        this.lessonSharedService.saveCurrentLesson({
            LessonName: '',
            Id: 0,
            CourseId: this.route.snapshot.params['Courseid'],
            Description: '',
            LessonContent: '',
            Segments: [
                {
                    ScreenContent: '', TemplateId: 0, LessonId: 0, ScreenId: 1,
                    SegmentDetails: [{
                            Title: '',
                            Description: '',
                            ImagePath: '',
                            Image: "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"
                        }],
                    SegmentImages: [{
                            Image: "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"
                        }],
                    QuestionAnswers: [
                        {
                            Question: '',
                            SuggestedAnswers: '',
                            CorrectAnswer: '',
                            QuestionTypeId: '',
                            mcOptions: {
                                McOption1: '',
                                McOption2: '',
                                McOption3: '',
                                McOption4: '',
                            },
                            mSelect: [
                                { mSelectOption: '', value: false },
                                { mSelectOption: '', value: false },
                                { mSelectOption: '', value: false },
                                { mSelectOption: '', value: false },
                                { mSelectOption: '', value: false },
                            ]
                        }
                    ]
                }
            ],
        });
    };
    return AddLessonComponent;
}());
AddLessonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-lesson',
        template: __webpack_require__("../../../../../src/app/lesson-new/add-lesson/add-lesson.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lesson-new/add-lesson/add-lesson.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */]) === "function" && _b || Object])
], AddLessonComponent);

var _a, _b;
//# sourceMappingURL=add-lesson.component.js.map

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/description/description.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CourseName {\r\n  font-family: AcuminPro;\r\n  font-size: 32px;\r\n  font-weight: bold;\r\n  line-height: 1.13;\r\n  text-align: left;\r\n  color: #4a4a4a;\r\n  margin-bottom: 5%;\r\n  width: 39em;\r\n  height: 36px;\r\n}\r\n\r\n.Discription {\r\n  width: 737px;\r\n}\r\n.Saving {\r\n  margin-top: 5% !important;\r\n  width: 37em;\r\n  margin-left: 5%;\r\n  height: 30px;\r\n  font-family: AcuminPro;\r\n  font-size: 20px;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  color: #7d7d7d;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/description/description.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <input type=\"text\" class=\"alert-heading CourseName\" [(ngModel)]=\"lesson.LessonName\" placeholder=\"Name of Lesson\"/>\r\n  <br/>\r\n  <textarea style=\"resize:none;\" rows=\"5\" [(ngModel)]=\"lesson.Discription\" class=\"text-left form-control  mt-2 Discription\" placeholder=\"Write a brief description about the lesson...\">{{lesson.Discription}}</textarea>\r\n\r\n  <div class=\"row\" style=\"margin-top: 5%;margin-left: 0%\">\r\n    <!-- <select class=\"js-example-basic-single Saving\" name=\"states[]\" multiple=\"multiple\">\r\n      <option value=\"AL\">Alabama</option>\r\n      <option value=\"AL\">Alabama</option>\r\n      <option value=\"AL\">Alabama</option>\r\n      <option value=\"AL\">Alabama</option>\r\n\r\n\r\n\r\n      <option value=\"WY\">Wyoming</option>\r\n    </select> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/description/description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__ = __webpack_require__("../../../../../src/app/Services/lesson/lesson-shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescriptionComponent = (function () {
    function DescriptionComponent(lessonSharedService) {
        this.lessonSharedService = lessonSharedService;
        this.lesson = {};
    }
    DescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lessonSharedService.lesson$.subscribe(function (a) {
            _this.lesson = a;
        });
        $(document).ready(function () {
            $('.js-example-basic-single').select2();
        });
    };
    DescriptionComponent.prototype.ngDoCheck = function () {
        this.lessonSharedService.saveCurrentLesson(this.lesson);
    };
    DescriptionComponent.prototype.ngOnDestroy = function () {
        alert();
        this.lessonSharedService.saveCurrentLesson(this.lesson);
    };
    return DescriptionComponent;
}());
DescriptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-description',
        template: __webpack_require__("../../../../../src/app/lesson-new/add-lesson/description/description.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lesson-new/add-lesson/description/description.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */]) === "function" && _a || Object])
], DescriptionComponent);

var _a;
//# sourceMappingURL=description.component.js.map

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/free-form/free-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n  font-family: AcuminPro;\r\n  font-size: 32px;\r\n  font-weight: bold;\r\n  line-height: 1.13;\r\n  text-align: left;\r\n  color: #4a4a4a;\r\n  margin-bottom: 5%;\r\n  width: 39em;\r\n  height: 36px;\r\n}\r\n\r\n.LessonContent {\r\n  width: 737px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/free-form/free-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n  <textarea class=\"alert-heading text-left form-control\" style=\"resize:none; background:#FFF;\" disabled>{{lesson.LessonName}}</textarea>\r\n  <br />\r\n  <textarea rows=\"10\" [(ngModel)]=\"lesson.LessonContent\" style=\"resize:none;\" class=\"text-left form-control  mt-2 LessonContent\" placeholder=\"Start your content dumping here...\">\r\n{{lesson.LessonContent}}\r\n</textarea>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/free-form/free-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreeFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__ = __webpack_require__("../../../../../src/app/Services/lesson/lesson-shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FreeFormComponent = (function () {
    function FreeFormComponent(lessonSharedService) {
        this.lessonSharedService = lessonSharedService;
        this.lesson = {};
    }
    FreeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lessonSharedService.lesson$.subscribe(function (a) {
            _this.lesson = a;
        });
    };
    FreeFormComponent.prototype.ngDoCheck = function () {
        this.lessonSharedService.saveCurrentLesson(this.lesson);
    };
    return FreeFormComponent;
}());
FreeFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-free-form',
        template: __webpack_require__("../../../../../src/app/lesson-new/add-lesson/free-form/free-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lesson-new/add-lesson/free-form/free-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */]) === "function" && _a || Object])
], FreeFormComponent);

var _a;
//# sourceMappingURL=free-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8\" style=\"border-right: 1px lightgrey solid\">\r\n  <a class=\"col-lg-1\" (click)=\"decrementIndex()\">\r\n    <i class=\"fa fa-arrow-circle-o-left fa-3x\" style=\"margin-top: 200px;\"></i>\r\n  </a>\r\n  <div class=\"col-lg-10\">\r\n    <div class='pca-hold col-lg-offset-4 '>\r\n        <div class='pca-main'>\r\n            <div class='pca-inner' [ngSwitch]=\"lesson.Segments[this.currentSegmentIndex].TemplateId\">\r\n          <div *ngSwitchCase=\"1\">\r\n\r\n            <div col-lg-12 style=\"padding:5%;\">\r\n              <textarea class=\"tfq\" rows=\"15\" cols=\"23\" style=\"resize:none;border:none; overflow:hidden; background: #FFF;\"\r\n                disabled>{{lesson.Segments[this.currentSegmentIndex].ScreenContent}}</textarea>\r\n            </div>\r\n            <div class=\"row col-lg-12\">\r\n\r\n\r\n              <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n              <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n            </div>\r\n          </div>\r\n          <div *ngSwitchCase=\"2\">\r\n            <div col-lg-12 *ngIf=\"lesson.Segments[this.currentSegmentIndex].TemplateId ==2\">\r\n              <img [src]=\"'data:image/png;base64,'+lesson.Segments[this.currentSegmentIndex].SegmentImages[0].Image | safeHtml\"\r\n                style=\"height: 155px;\" />\r\n            </div>\r\n            <div col-lg-12 style=\"padding:5%;\">\r\n              <textarea class=\"tfq\" cols=\"23\" rows=\"7\" style=\"resize:none;border:none;overflow:hidden; background: #FFF;\"\r\n                disabled>  {{lesson.Segments[this.currentSegmentIndex].ScreenContent}}</textarea>\r\n            </div>\r\n            <div class=\"row col-lg-12\">\r\n\r\n\r\n              <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n              <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n            </div>\r\n          </div>\r\n          <div *ngSwitchCase=\"3\">\r\n            <div col-lg-12 *ngIf=\"lesson.Segments[this.currentSegmentIndex].TemplateId ==3\">\r\n              <textarea class=\"tfq\" cols=\"25\" rows=\"7\" style=\"resize:none;border:none;overflow:auto; background: #FFF;\"\r\n                disabled> {{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question}}</textarea>\r\n            </div>\r\n            <div class=\"row questansgap2\">\r\n              <button id=\"true-answer-button\" class=\"true-false-class\" [class.true-false-class2]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer==='True'\">True</button><button\r\n                id=\"false-answer-button\" class=\"true-false-class\" [class.true-false-class2]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer==='False'\">False</button>\r\n\r\n            </div>\r\n            <div class=\"row col-lg-12\">\r\n\r\n\r\n              <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n              <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngSwitchCase=\"4\">\r\n            <div col-lg-12 *ngIf=\"lesson.Segments[this.currentSegmentIndex].TemplateId == 4\">\r\n              <textarea class=\"tfq\" cols=\"25\" rows=\"9\" style=\"resize:none;border:none;overflow:auto; background: #FFF;\"\r\n                disabled> {{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question}}</textarea>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top:10px;\">\r\n              <button class=\"mc-selected\" [ngClass]=\"{\r\n                      'mc-selected2':McOpt1===true\r\n                    }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption1}}</button>\r\n              <br />\r\n              <button class=\"mc-selected\" [ngClass]=\"{\r\n                      'mc-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer===lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption1\r\n                     }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption2}}</button>\r\n              <br />\r\n              <button class=\"mc-selected\" [ngClass]=\"{\r\n                      'mc-selected2':McOpt3===true\r\n                     }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption3}}</button>\r\n              <button class=\"mc-selected\" [ngClass]=\"{\r\n                       'mc-selected2':McOpt4===true\r\n                     }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption4}}</button>\r\n            </div>\r\n            <div class=\"row col-lg-12\">\r\n\r\n\r\n              <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n              <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"5\">\r\n            <div col-lg-12 *ngIf=\"lesson.Segments[this.currentSegmentIndex].TemplateId == 5\">\r\n              <textarea class=\"tfq\" cols=\"25\" rows=\"6\" style=\"resize:none;border:none;overflow:auto; background: #FFF;\"\r\n                disabled> {{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question}}</textarea>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top:30px;\">\r\n              <button class=\"ms-selected\" [ngClass]=\"{\r\n                        'ms-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[0].value===true\r\n                       }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[0].mSelectOption}}</button>\r\n              <button class=\"ms-selected\" [ngClass]=\"{\r\n                        'ms-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[1].value===true\r\n                       }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[1].mSelectOption}}</button>\r\n              <button class=\"ms-selected\" [ngClass]=\"{\r\n                        'ms-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[2].value===true\r\n                       }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[2].mSelectOption}}</button>\r\n              <button class=\"ms-selected\" [ngClass]=\"{\r\n                        'ms-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[3].value===true\r\n                       }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[3].mSelectOption}}</button>\r\n              <button class=\"ms-selected\" [ngClass]=\"{\r\n                        'ms-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[4].value===true\r\n                       }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[4].mSelectOption}}</button>\r\n            </div>\r\n            <div class=\"row col-lg-12\">\r\n\r\n\r\n              <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n              <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n            </div>\r\n          </div>\r\n          <div *ngSwitchCase=\"6\">\r\n            <div col-lg-12 *ngIf=\"lesson.Segments[this.currentSegmentIndex].TemplateId == 6\">\r\n              <textarea class=\"tfq\" cols=\"25\" rows=\"15\" style=\"resize:none;border:none;overflow:auto; background: #FFF;\"\r\n                disabled>{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question}}</textarea>\r\n            </div>\r\n            <div class=\"row\">\r\n              <textarea rows=\"1\" cols=\"17\" style=\"resize:none;border:none;overflow:auto; background: #FFF; border-bottom:1px solid grey; margin-left:30px;\"\r\n                disabled>{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer}}</textarea>\r\n            </div>\r\n            <div class=\"row col-lg-12\">\r\n\r\n\r\n              <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n              <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n            </div>\r\n          </div>\r\n\r\n              \r\n        </div><!-- 'pca-inner' -->\r\n          </div><!-- 'pca-main' -->\r\n        <div class='pca-sub'>\r\n            <div class='pca-top'>\r\n\r\n        </div>\r\n            <div class='pca-mid'>\r\n                <div class='pca-part'></div>\r\n              </div><!-- 'pca-mid' -->\r\n           \r\n          </div><!-- 'pca-bot' -->\r\n    </div><!-- 'pca-hold' -->\r\n\r\n  </div>\r\n  <a class=\"col-lg-1\" (click)=\"incrementIndex()\">\r\n    <span class=\"fa fa-arrow-circle-o-right fa-3x\" style=\"margin-top: 200px;\"></span>\r\n  </a>\r\n\r\n</div>\r\n\r\n<div class=\"col-lg-4\">\r\n  <div class=\"row\" style=\"margin-left: 20px;\">\r\n    <p style=\"width: 98px; height: 26px; font-family: Arial; font-size: 20px; font-weight: 500; line-height: 1.3; text-align: left; color: #4a4a4a;\">Comments</p>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"row\" style=\"margin-top: 10px;\">\r\n    <table>\r\n      <tr>\r\n        <td><img [src]=\"photoURL()\" style=\"margin-left:25px;\" height=\"30\" width=\"30\"></td>\r\n        <td>\r\n          <p class=\"incubatorname\">{{profile.FirstName}} {{profile.LastName}}\r\n            <i class=\"fa fa-ellipsis-h fa-2x pull-right\" aria-hidden=\"true\">\r\n            </i>\r\n          </p>\r\n\r\n          <textarea id=\"comments\" style=\"margin-left:25px;\" rows=\"2\" cols=\"35\" placeholder=\"Type comment here...\" class=\"comments\"\r\n            [(ngModel)]=\"currentcomment\"></textarea>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <a id=\"postcommentbutton\" class=\"postcommentlink\" (click)=\"postcurrentcomment(currentcomment)\" *ngIf=\"currentcomment\">Post\r\n      as {{profile.FirstName}} {{profile.LastName}}</a>\r\n  </div>\r\n\r\n  <div style=\"height:200px; overflow-y:scroll; overflow-x:hidden;\">\r\n    <div class=\"row\" *ngFor=\"let comment of commentlist\" style=\"margin-top:10px;border:1px solid lightgrey;\">\r\n\r\n      <table>\r\n        <tr>\r\n          <td>\r\n            <img [src]=\"photoURL()\" style=\"margin-left:25px;\" height=\"30\" width=\"30\">\r\n          </td>\r\n          <td>\r\n            <p class=\"incubatorname\">{{profile.FirstName}} {{profile.LastName}}\r\n              <i class=\"fa fa-ellipsis-h fa-2x pull-right\" style=\"margin-right:30px;\" aria-hidden=\"true\"></i>\r\n            </p>\r\n            <textarea id=\"showcomment\" rows=\"2\" cols=\"35\" class=\"showcomment\" disabled>{{comment}}</textarea>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n    </div>\r\n  </div>\r\n  <div style=\"position:relative;\">\r\n    <div class=\"row\" style=\"margin-left: 20px;\">\r\n      <p style=\"width: 166px; height: 26px; font-family: Arial; font-size: 20px; font-weight: 500; line-height: 1.3; text-align: left; color: #4a4a4a;\">Lesson\r\n        Navigation</p>\r\n      <form>\r\n        Screen <input type=\"textbox\" placeholder=\"{{currentSegmentIndex+1}}\" #box (keyup)=\"goToIndex(box.value)\" style=\"width: 24px; height: 24px; border: solid 1px #e1e1e1; \r\n           background-color: #f3f3f3; border: solid 1px #e1e1e1; color: #884ef9\">\r\n        of 20\r\n      </form>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-left: 20px;\">\r\n      <p style=\"font-size: 12px;font-style: italic;line-height: 1.33; text-align: left;color: #9b9b9b;\">Enter the page\r\n        you want to jump around</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/preview/preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Preview {\n  font-family: AcuminPro;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: left;\n  color: #4a4a4a; }\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block; }\n\n.btnupload {\n  border: 2px solid gray;\n  color: gray;\n  background-color: white;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: bold; }\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0; }\n\n.Bitmap {\n  width: 108px;\n  height: 108px; }\n\n.previewContainer {\n  font-family: AcuminPro;\n  font-size: 18px;\n  line-height: 1.5;\n  text-align: left;\n  color: #7d7d7d; }\n\n.screens {\n  width: 100%;\n  border-radius: 4px;\n  background-color: rgba(136, 78, 249, 0.1);\n  font-family: AcuminPro;\n  font-size: 14px;\n  line-height: 1.43;\n  text-align: left;\n  color: #4a4a4a;\n  margin-bottom: 2%; }\n\n.screen:active {\n  border: solid 1px rgba(136, 78, 249, 0.54); }\n\nlabel {\n  width: 131px;\n  height: 24px;\n  font-family: AcuminPro;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: left;\n  color: #4a4a4a; }\n\n.bounds {\n  width: 320px;\n  height: 50px;\n  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.1); }\n\n.pca-hold {\n  width: 239px; }\n\n.pca-hold .pca-main {\n  display: block;\n  position: relative;\n  background-color: #030303;\n  border: 7.17px solid #1d2d2d;\n  border-top: 54.97px solid #1d2d2d;\n  border-bottom: 56.404px solid #1d2d2d;\n  border-radius: 27.007px;\n  height: 490.428px;\n  box-shadow: 0 0 0 2.39px #C6C7CA; }\n\n.pca-hold .pca-main:after {\n  content: '';\n  position: absolute;\n  top: -31.07px;\n  left: 55%;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  width: 7.17px;\n  height: 7.17px;\n  background-color: #959595;\n  border-radius: 100%;\n  -webkit-transform: translate(-43.02px, 0);\n  transform: translate(-43.02px, 0); }\n\n.pca-hold .pca-main:before {\n  content: \"\";\n  position: absolute;\n  top: -11.95px;\n  left: 55%;\n  opacity: 1;\n  width: 47.8px;\n  height: 2.39px;\n  -webkit-transform: translate(-21.51px, -17.925px);\n  transform: translate(-21.51px, -17.925px);\n  border-radius: 2.39px;\n  background-color: #959595; }\n\n.pca-hold .pca-inner {\n  display: block; }\n\n.pca-hold .pca-sub {\n  display: block;\n  text-align: center;\n  position: relative;\n  height: 0; }\n\n.pca-hold .pca-sub .pca-bot {\n  border-radius: 100%;\n  width: 33.46px;\n  height: 33.46px;\n  display: block;\n  margin: 0 auto;\n  background-color: transparent;\n  z-index: 2;\n  box-shadow: 0 0 0 2.629px #636670;\n  -webkit-transform: translate(0, -44.932px);\n  transform: translate(0, -44.932px); }\n\n.wrapper {\n  display: block; }\n\n/*******************************\r\n * MODAL AS LEFT/RIGHT SIDEBAR\r\n * Add \"left\" or \"right\" in modal parent div, after class=\"modal\".\r\n * Get free snippets on bootpen.com\r\n *******************************/\n.modal.left .modal-dialog,\n.modal.right .modal-dialog {\n  position: fixed;\n  margin: auto;\n  width: 320px;\n  height: 100%;\n  -webkit-transform: translate3d(0%, 0, 0);\n  transform: translate3d(0%, 0, 0); }\n\n.modal.left .modal-content,\n.modal.right .modal-content {\n  height: 100%;\n  overflow-y: auto; }\n\n.modal.left .modal-body,\n.modal.right .modal-body {\n  padding: 15px 15px 80px; }\n\n/*Left*/\n.modal.left.fade .modal-dialog {\n  left: -320px;\n  transition: opacity 0.3s linear, left 0.3s ease-out; }\n\n.modal.left.fade.in .modal-dialog {\n  left: 0; }\n\n/*Right*/\n.modal.right.fade .modal-dialog {\n  right: -320px;\n  transition: opacity 0.3s linear, right 0.3s ease-out; }\n\n.modal.right.fade.in .modal-dialog {\n  right: 0; }\n\n/* ----- MODAL STYLE ----- */\n.modal-content {\n  border-radius: 0;\n  border: none; }\n\n.modal-header {\n  border-bottom-color: #EEEEEE;\n  background-color: #FAFAFA; }\n\n/* ----- v CAN BE DELETED v ----- */\nbody {\n  background-color: #78909C; }\n\n.demo {\n  padding-top: 60px;\n  padding-bottom: 110px; }\n\n.btn-demo {\n  margin: 15px;\n  padding: 10px 15px;\n  border-radius: 0;\n  font-size: 16px;\n  background-color: #FFFFFF; }\n\n.btn-demo:focus {\n  outline: 0; }\n\n.demo-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  background-color: #212121;\n  text-align: center; }\n\n.demo-footer > a {\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #fff; }\n\n.pca-hold {\n  width: 220px; }\n\n.pca-hold .pca-main {\n  display: block;\n  position: relative;\n  background-color: white;\n  border: 6.6px solid #1d2d2d;\n  border-top: 50.6px solid #1d2d2d;\n  border-bottom: 51.92px solid #1d2d2d;\n  border-radius: 24.86px;\n  height: 451.44px;\n  box-shadow: 0 0 0 2.2px #C6C7CA; }\n\n.pca-hold .pca-main:after {\n  content: '';\n  position: absolute;\n  top: -28.6px;\n  left: 55%;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  width: 6.6px;\n  height: 6.6px;\n  background-color: white;\n  border-radius: 100%;\n  -webkit-transform: translate(-39.6px, 0);\n  transform: translate(-39.6px, 0); }\n\n.pca-hold .pca-main:before {\n  content: \"\";\n  position: absolute;\n  top: -11px;\n  left: 55%;\n  opacity: 1;\n  width: 44px;\n  height: 2.2px;\n  -webkit-transform: translate(-19.8px, -16.5px);\n  transform: translate(-19.8px, -16.5px);\n  border-radius: 2.2px;\n  background-color: white; }\n\n.pca-hold .pca-inner {\n  display: block; }\n\n.pca-hold .pca-sub {\n  display: block;\n  text-align: center;\n  position: relative;\n  height: 0; }\n\n.pca-hold .pca-sub .pca-bot {\n  border-radius: 100%;\n  width: 30.8px;\n  height: 30.8px;\n  display: block;\n  margin: 0 auto;\n  background-color: transparent;\n  z-index: 2;\n  box-shadow: 0 0 0 2.42px #636670;\n  -webkit-transform: translate(0, -41.36px);\n  transform: translate(0, -41.36px); }\n\n.radio-custom {\n  opacity: 0;\n  position: absolute; }\n\n.radio-custom, .radio-custom-label {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 5px;\n  cursor: pointer; }\n\n.radio-custom-label {\n  position: relative; }\n\n.radio-custom + .radio-custom-label:before {\n  content: '';\n  background: #fff;\n  border: 2px solid #ddd;\n  display: inline-block;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  padding: 2px;\n  margin-right: 10px;\n  text-align: center; }\n\n.radio-custom + .radio-custom-label:before {\n  border-radius: 50%; }\n\n.radio-custom:checked + .radio-custom-label:before {\n  content: \"\\F00C\";\n  font-family: 'FontAwesome';\n  color: white;\n  margin-bottom: 10;\n  background-color: #5cb85c; }\n\n.radio-custom:focus + .radio-custom-label {\n  outline: 1px solid #ddd;\n  /* focus style */ }\n\n.tfq {\n  margin-left: 10px;\n  color: #4a4a4a;\n  font-size: 12px;\n  text-align: left; }\n\n#true-answer-button {\n  margin-left: 25px; }\n\n.true-false-class {\n  width: 90px;\n  height: 65px;\n  border-radius: 2.5px;\n  background-color: white;\n  color: #4a4a4a;\n  border: 1px solid lightgrey; }\n\n.true-false-class2 {\n  width: 90px;\n  height: 65px;\n  border-radius: 2.5px;\n  background-color: #9765f8;\n  color: white;\n  border: 1px solid #9765f8; }\n\n.questansgap2 {\n  margin-top: 50%; }\n\n.submitbuttonmob {\n  color: #9765f8;\n  font-size: 10px;\n  font-weight: bold;\n  float: right; }\n\n.likebuttonmob {\n  color: #b82b2b; }\n\n.option_1, .option_2, .option_3, .option_4, .option_5 {\n  border: 1px solid grey; }\n\n.mc-selected {\n  margin-left: 25px;\n  border-radius: 2.5px;\n  height: 30px;\n  background-color: white;\n  color: #4a4a4a;\n  border: 1px solid lightgrey;\n  width: 180px; }\n\n.mc-selected2 {\n  margin-left: 25px;\n  border: 1px solid grey;\n  border-radius: 2.5px;\n  height: 30px;\n  background-color: #9765f8;\n  color: white;\n  width: 180px; }\n\n.add-option-button {\n  margin-top: 20px;\n  margin-left: 20px;\n  background-color: white;\n  color: grey;\n  border: 1px solid grey;\n  width: 250px; }\n\n.ms-selected {\n  margin-left: 25px;\n  border: 1px solid lightgrey;\n  border-radius: 2.5px;\n  height: 30px;\n  background-color: white;\n  color: #4a4a4a;\n  width: 180px; }\n\n.ms-selected2 {\n  margin-left: 25px;\n  border: 1px solid grey;\n  border-radius: 2.5px;\n  height: 30px;\n  background-color: #9765f8;\n  width: 180px;\n  color: white; }\n\n.fill-up-answer {\n  margin-top: 40px;\n  border: 1px solid grey; }\n\n.close {\n  position: absolute;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.3; }\n\n.close:hover {\n  opacity: 1; }\n\n.close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: ' ';\n  height: 33px;\n  width: 2px;\n  background-color: #333; }\n\n.close:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.close:after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\na {\n  color: #979797; }\n\na:hover {\n  color: #884ef9; }\n\n.comments {\n  resize: none; }\n\n.comments::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  font-size: 12px; }\n\n.comments::-moz-placeholder {\n  /* Firefox 19+ */\n  font-size: 12px; }\n\n.comments:-ms-input-placeholder {\n  /* IE 10+ */\n  font-size: 12px; }\n\n.comments:-moz-placeholder {\n  /* Firefox 18- */\n  font-size: 12px; }\n\n.postcommentlink {\n  margin-left: 220px;\n  width: 60px;\n  height: 40px; }\n\n.postcommentlink:hover {\n  margin-left: 220px;\n  width: 60px;\n  height: 40px;\n  text-decoration: none; }\n\n.showcomment {\n  resize: none;\n  margin-left: 25px;\n  background: #fff;\n  border-color: lightgrey; }\n\n.incubatorname {\n  font-family: Arial;\n  font-size: 12px;\n  color: #4a4a4a;\n  text-align: left;\n  margin-left: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_lesson_lesson_shared_service__ = __webpack_require__("../../../../../src/app/Services/lesson/lesson-shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_shared_service_app_component_service__ = __webpack_require__("../../../../../src/app/Services/shared-service/app-component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_Common_ActiveUser__ = __webpack_require__("../../../../../src/app/Services/Common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_profile_service__ = __webpack_require__("../../../../../src/app/Services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_common_CustomeServerCallService__ = __webpack_require__("../../../../../src/app/Services/common/CustomeServerCallService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PreviewComponent = (function () {
    function PreviewComponent(lessonSharedService, sanitizer, profileService, sharedService, activeUser) {
        this.lessonSharedService = lessonSharedService;
        this.sanitizer = sanitizer;
        this.profileService = profileService;
        this.sharedService = sharedService;
        this.lesson = {};
        this.currentSegmentIndex = 0;
        this.indexToGo = 0;
        this.commentlist = [];
        this.UserId = '';
        this.profile = {};
        this.post = false;
        this.activeUser = activeUser;
    }
    PreviewComponent.prototype.photoURL = function () {
        return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.profile.ProfileImage);
    };
    PreviewComponent.prototype.Initialize = function () {
        var _this = this;
        this.profileService.getProfileByUserId(this.UserId)
            .subscribe(function (res) {
            res = res.json();
            // console.log()res);
            _this.profile = res;
        });
        var data = {
            FirstName: this.firstname,
            LastName: this.lastname,
            ProfileImagePath: this.profileimage
        };
    };
    PreviewComponent.prototype.ngAfterViewInit = function () {
        this.photoUrl = this.sharedService.photoURL(this.activeUser.initialize().UserID);
    };
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lessonSharedService.lesson$.subscribe(function (a) {
            _this.lesson = a;
        });
        this.UserId = this.activeUser.initialize().UserID;
        this.photoUrl = this.sharedService.photoURL(this.activeUser.profile.UserID);
        this.Initialize();
    };
    PreviewComponent.prototype.ngDoCheck = function () {
        this.lessonSharedService.saveCurrentLesson(this.lesson);
    };
    PreviewComponent.prototype.incrementIndex = function () {
        if ((this.currentSegmentIndex + 1) < (this.lesson.Segments.length))
            this.currentSegmentIndex++;
    };
    PreviewComponent.prototype.goToIndex = function (index) {
        if (index == 0)
            return;
        if (index > this.lesson.Segments.length)
            return;
        this.currentSegmentIndex = index - 1;
    };
    PreviewComponent.prototype.decrementIndex = function () {
        if (this.currentSegmentIndex > 0)
            this.currentSegmentIndex--;
    };
    PreviewComponent.prototype.postcurrentcomment = function (currentcomment) {
        this.commentlist.push(currentcomment);
        this.currentcomment = '';
        // console.log()this.commentlist);
    };
    return PreviewComponent;
}());
PreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-preview',
        template: __webpack_require__("../../../../../src/app/lesson-new/add-lesson/preview/preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lesson-new/add-lesson/preview/preview.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__Services_Common_ActiveUser__["a" /* ActiveUser */], __WEBPACK_IMPORTED_MODULE_4__Services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_5__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__Services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_profile_service__["a" /* ProfileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__Services_shared_service_app_component_service__["a" /* AppComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_shared_service_app_component_service__["a" /* AppComponentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__Services_Common_ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_Common_ActiveUser__["a" /* ActiveUser */]) === "function" && _e || Object])
], PreviewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/segment-new/segment-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CourseContent {\r\n  font-family: AcuminPro;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  color: #4a4a4a;\r\n  width: 476px;\r\n}\r\n.LessonContent {\r\n  width: 476px;\r\n  height: 308px;\r\n  font-family: AcuminPro;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  color: #4a4a4a;\r\n}\r\ntextarea {\r\n  float: right;\r\n  resize: none;\r\n  width:90%\r\n}\r\n.Want-to-automaticall {\r\n  width: 313.9px;\r\n  height: 48px;\r\n  font-family: AcuminPro;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  color: #4a4a4a;\r\n  margin-left: 10%\r\n}\r\nbutton {\r\n  width: 132px;\r\n  height: 40px;\r\n  border-radius: 3px;\r\n  background-color: $pastel-purple;\r\n  margin-left: 10%;\r\n}\r\n.textforfreeForm {\r\n  width: 313.9px;\r\n  height: 48px;\r\n  font-family: AcuminPro;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  color: #4a4a4a;\r\n  margin-left: 10%;\r\n}\r\n.wordCount {\r\n  width: 71px;\r\n  height: 26px;\r\n  font-family: AcuminPro;\r\n  font-size: 16px;\r\n  line-height: 1.63;\r\n  text-align: left;\r\n  color: #cccccc !important;\r\n  margin-left: 10%;\r\n}\r\nh4 {\r\n  font-family: AcuminPro;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  text-align: right;\r\n  margin-bottom: 5%;\r\n  color: #4a4a4a;\r\n\r\n}\r\nh3 {\r\n  font-family: AcuminPro;\r\n  font-size: 32px;\r\n  font-weight: bold;\r\n  line-height: 1.13;\r\n  text-align: left;\r\n  color: #4a4a4a;\r\n  margin-bottom: 5%;\r\n  width: 39em;\r\n  height: 36px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/segment-new/segment-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 row col-md-12 \" style=\"padding: 5%; \">\r\n  <div class=\"col-lg-6\" style=\"margin-bottom:200px;\">\r\n    <h3 class=\"text-left\">{{lesson.LessonName}}</h3>\r\n    <!-- <div class=\"text-left LessonContent\">{{lesson.LessonContent}}</div> -->\r\n  <div style=\"white-space: pre-line;\">{{lesson.LessonContent}}</div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <h4>{{lesson.Segments.length?20 - lesson.Segments.length:20}} Screens Needed</h4>\r\n\r\n    <div *ngFor=\"let segment of lesson.Segments; let i = index\" class=\"row\" style=\"margin-bottom: 3%\">\r\n      <span>{{i+1}}</span>\r\n      <textarea class=\"form-control\" maxlength=\"600\" (click)=\"currentscreen =segment\"\r\n       [(ngModel)]=\"segment.ScreenContent\" rows=\"6\" id=\"seg\" name=\"seg\" ></textarea>\r\n      <span class=\"wordCount\">{{segment.ScreenContent.length?segment.ScreenContent.length:0}}/600</span>\r\n    </div>\r\n    <br/>\r\n    <!-- <p *ngIf=\"lesson.Segments[0].ScreenContent.length==0\"\r\n       class=\"Want-to-automaticall\">Want to automatically segment your free form copy into screened content? </p> -->\r\n     <!-- <button *ngIf=\"lesson.Segments[0].ScreenContent.length==0\" style=\"margin-top: 3%\" (click)=\"addNewSegment()\">Yes Please</button> -->\r\n  \r\n     <button *ngIf=\"lesson.Segments[0].ScreenContent.length !=0\" style=\"margin-top: 3%\" (click)=\"addNewSegment()\">Add New Screen</button>\r\n    <button *ngIf=\"lesson.Segments[0].ScreenContent.length !=0\" style=\"margin-top: 3%\" (click)=\"removeSegment()\">Remove Screen</button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/segment-new/segment-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__ = __webpack_require__("../../../../../src/app/Services/lesson/lesson-shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SegmentNewComponent = (function () {
    function SegmentNewComponent(lessonSharedService) {
        this.lessonSharedService = lessonSharedService;
        this.lesson = {};
        this.startScreenId = 1;
        this.initialstageOfleeson = false;
        this.newtext = "hello";
    }
    SegmentNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lessonSharedService.lesson$.subscribe(function (a) {
            _this.lesson = a;
        });
        $('#seg').append("hello");
    };
    SegmentNewComponent.prototype.ngDoCheck = function () {
        this.lessonSharedService.saveCurrentLesson(this.lesson);
    };
    SegmentNewComponent.prototype.OpenAutoSegmentModal = function () {
    };
    SegmentNewComponent.prototype.setCurrentScreen = function (segment) {
        this.currentscreen = segment;
    };
    SegmentNewComponent.prototype.removeSegment = function () {
        var _this = this;
        this.lesson.Segments = this.lesson.Segments.filter(function (obj) { return obj !== _this.currentscreen; });
    };
    SegmentNewComponent.prototype.addNewSegment = function () {
        this.lesson.Segments.push({
            TemplateId: 0, LessonId: this.lesson.Id, ScreenId: this.lesson.Segments.length + 1,
            SegmentImages: [{ Image: '' }],
            QuestionAnswers: [{ Question: '', SuggestedAnswers: '', CorrectAnswer: '', QuestionTypeId: '', mcOptions: {
                        McOption1: '',
                        McOption2: '',
                        McOption3: '',
                        McOption4: '',
                    },
                    mSelect: [
                        { mSelectOption: '', value: false },
                        { mSelectOption: '', value: false },
                        { mSelectOption: '', value: false },
                        { mSelectOption: '', value: false },
                        { mSelectOption: '', value: false },
                    ] }]
        });
        $('#seg').append("hello");
    };
    return SegmentNewComponent;
}());
SegmentNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-segment-new',
        template: __webpack_require__("../../../../../src/app/lesson-new/add-lesson/segment-new/segment-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lesson-new/add-lesson/segment-new/segment-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */]) === "function" && _a || Object])
], SegmentNewComponent);

var _a;
//# sourceMappingURL=segment-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/template-new/extra-question-info/extra-question-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upload-btn-wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .btnupload {\r\n    border: 2px solid gray;\r\n    color: gray;\r\n    background-color: white;\r\n    padding: 4px 10px;\r\n    border-radius: 8px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .upload-btn-wrapper input[type=file] {\r\n    font-size: 100px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0;\r\n  }\r\n  .Bitmap {\r\n    width: 108px;\r\n    height: 108px;\r\n  }\r\n  .previewContainer {\r\n  \r\n    font-family: AcuminPro;\r\n    font-size: 18px;\r\n    line-height: 1.5;\r\n    text-align: left;\r\n    color: #7d7d7d;\r\n  }\r\n\r\n  .title\r\n  {\r\n   margin-left:20px;\r\n   border:1px solid grey;\r\n  }\r\n\r\n  .description\r\n  {\r\n    margin-left:20px;\r\n  }\r\n  .heading\r\n  {\r\n    margin-left:20px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/template-new/extra-question-info/extra-question-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\" >\r\n  <p class=\"pull-left heading\" style=\"margin-top:50px;\"> More Information</p>\r\n  </div>\r\n  <div class=\"row\">\r\n  <input type=\"textbox\" id=\"title\" placeholder=\"Enter Title\" class=\"title\" [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].SegmentDetails[0].Title\">\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top:20px;\">\r\n    <textarea cols=\"40\" rows=\"6\" class=\"description\" placeholder=\"Enter description here\" style=\"resize: none;\" [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].SegmentDetails[0].Description\"></textarea>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"col-lg-3\"> \r\n              <img [src]=\"('data:image/png;base64,'+lesson.Segments[this.currentSegmentIndex].SegmentDetails[0].Image | safeHtml) \" width=\"40px\" height=\"40px\" />\r\n            </div>\r\n            <div class=\"col-lg-9\">\r\n              <label>Replace Image ?</label>\r\n              <p class=\"text-left \" style=\"font-size: 16px\">\r\n                Drag and drop an image or click  \r\n              </p>\r\n              <div class=\"upload-btn-wrapper\">\r\n                  <button class=\"btnupload btn-sm\">Upload a file</button>\r\n                  <input (change)=\"onFileChange($event)\"  #fileInput type=\"file\" name=\"myfile\" />\r\n                </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/template-new/extra-question-info/extra-question-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraQuestionInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__ = __webpack_require__("../../../../../src/app/Services/lesson/lesson-shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExtraQuestionInfoComponent = (function () {
    function ExtraQuestionInfoComponent(lessonSharedService) {
        this.lessonSharedService = lessonSharedService;
        this.currentSegmentIndex = 0;
        this.lesson = {
            Segments: [
                {
                    SegmentDetails: [
                        {
                            Title: "",
                            Description: "",
                            Image: ""
                        }
                    ]
                }
            ]
        };
    }
    ExtraQuestionInfoComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                //this.image = reader.result.split(',')[1];
                _this.lesson.Segments[_this.currentSegmentIndex].SegmentDetails[0].Image = reader.result.split(',')[1];
                console.log("data", _this.lesson.Segments[_this.currentSegmentIndex].SegmentDetails[0]);
            };
        }
    };
    ExtraQuestionInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lessonSharedService.lesson$.subscribe(function (a) {
            _this.lesson = a;
        });
    };
    return ExtraQuestionInfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExtraQuestionInfoComponent.prototype, "currentSegmentIndex", void 0);
ExtraQuestionInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-extra-question-info',
        template: __webpack_require__("../../../../../src/app/lesson-new/add-lesson/template-new/extra-question-info/extra-question-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lesson-new/add-lesson/template-new/extra-question-info/extra-question-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */]) === "function" && _a || Object])
], ExtraQuestionInfoComponent);

var _a;
//# sourceMappingURL=extra-question-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/template-new/template-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 row col-md-12 \" style=\"padding: 5%\">\r\n  <div class=\"col-lg-4\">\r\n    <h3 class=\"text-left\">{{lesson.LessonName}}</h3>\r\n    <div>\r\n\r\n      <div class=\"row screens\" (click)=\"selectSegment(segment)\" [ngClass]=\"this.IsSegmentSelected == true && this.currentSegmentIndex == this.lesson.Segments.indexOf(segment) ? 'selectseg' : 'unselectseg'\"\r\n        *ngFor=\"let segment of lesson.Segments; let i = index;\">\r\n        <img src=\"../../../../assets/images/new.png\" style=\"width: 10%;float: left\" *ngIf=\"this.IsSegmentSelected == true \r\n      && this.currentSegmentIndex == this.lesson.Segments.indexOf(segment) \r\n      &&  this.lesson.Segments[currentSegmentIndex].TemplateId\" />\r\n        <div class=\"text-justify\" style=\"float: right; width: 90%;padding: 2%\"> {{segment.ScreenContent}} </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4\" *ngIf=\"IsSegmentSelected\">\r\n    <div class=\"col-lg-12\">\r\n      <a class=\"btn bounds\" role=\"button\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\"\r\n        aria-controls=\"collapseExample\">\r\n        <label style=\"width: 100%;padding-right: 5%\">\r\n          Content Templates (2)\r\n          <span class=\"right\" style=\"float: right\"><i class=\"fa fa-address-book\"></i></span>\r\n        </label>\r\n      </a>\r\n      <div class=\"collapse\" id=\"collapseExample\">\r\n        <div class=\"well\" style=\"border: none\">\r\n          <div class=\"w3-card-4 w3-padding-16 col-lg-5\" (click)=\"selectTemplateId(template)\" *ngFor=\"let template of templateList1;\"\r\n            style=\"margin:5px;\" [ngClass]=\"this.lesson.Segments[this.currentSegmentIndex].TemplateId == template.Id ? 'selectseg' : 'unselectseg'\">\r\n            <img src=\"{{template.TemplateImage}}\" height=\"60\" width=\"60\">\r\n            <div class=\"w3-container w3-center\">\r\n              <p style=\"font-size: 12px; color: black; font-weight: bold\">{{template.TemplateName}} </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <a class=\"btn bounds\" role=\"button\" data-toggle=\"collapse\" href=\"#collapseExample1\" aria-expanded=\"false\"\r\n        aria-controls=\"collapseExample\">\r\n        <label style=\"width: 100%;padding-right: 5%\">\r\n          Question Templates (4)\r\n          <span class=\"right\" style=\"float: right\"><i class=\"fa fa-address-book\"></i></span>\r\n        </label>\r\n      </a>\r\n\r\n\r\n      <div class=\"collapse\" id=\"collapseExample1\">\r\n        <div class=\"well \" style=\"border: none\">\r\n          <div class=\"w3-card-4 w3-padding-16 col-lg-5\" (click)=\"selectTemplateId(template)\" *ngFor=\"let template of templateList2\"\r\n            style=\"margin:5px;\" [ngClass]=\"this.lesson.Segments[this.currentSegmentIndex].TemplateId == template.Id ? 'selectseg' : 'unselectseg'\">\r\n            <img src=\"{{template.TemplateImage}}\" height=\"60\" width=\"60\">\r\n            <div class=\"w3-container w3-center\">\r\n              <p style=\"font-size: 12px; color: black; font-weight: bold\">{{template.TemplateName}} </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"row\">\r\n        <button type=\"button\" style=\"width:132px; height:40px; border-radius:3px; color:white; font-family:arial; font-size:16px;\" data-toggle=\"modal\" data-target=\"#savelessonsmodal\">Submit</button>\r\n      </div>\r\n       <br/>\r\n      <div class=\"modal fade\" id=\"savelessonsmodal\" role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n       <div class=\"modal-content\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <img src=\"/assets/images/rocket.png\">\r\n              </div>\r\n            <div class=\"row\"> \r\n                <p style=\"font-family:arial;font-size:24px;font-weight:500; color:#4a4a4a;\">Submission Time</p>\r\n              </div>\r\n            <div class=\"row\" style=\"margin-top:10px;\">\r\n                <p style=\"font-size:16px;color:#4a4a4a; font-family:arial;\">Congratulations! It looks like you are ready \r\n                    to <br/>submit this lesson to queue for beta testing.\r\n                    </p>\r\n              </div>\r\n            <div class=\"row\" style=\"margin-top:15px;\">\r\n                <button style=\"width:216px; margin-left:180px;\" (click)=\"onLessonSaveClick()\">Submit for Testing</button>\r\n              </div>\r\n             <div class=\"row\" style=\"margin-top:10px;\">\r\n                <p style=\"font-size:16px;font-family:arial;color: #7d7d7d;\">Not Ready Yet</p>\r\n               </div>\r\n             \r\n            \r\n            </div>\r\n          \r\n\r\n         </div>\r\n\r\n        </div>\r\n\r\n\r\n        </div> -->\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4\" *ngIf=\"IsSegmentSelected\">\r\n    <label class=\"Preview text-justify Preview\" data-toggle=\"modal\" data-target=\"#myModal3\"> <span class=\"ml-1\"><a><i\r\n            class=\"fa fa-eye\"></i>Preview</a></span></label>\r\n    <div class=\"row col-12\" [ngSwitch]=\"this.lesson.Segments[currentSegmentIndex].TemplateId\">\r\n      <div *ngSwitchCase=1>\r\n        <p class=\"previewContainer\">\r\n          {{currentSegment.ScreenContent}}\r\n        </p>\r\n        <div>\r\n          <!-- <button class=\"btn\">Add Screen</button>\r\n    <button class=\"btn btn-success\">Next Screen</button> -->\r\n        </div>\r\n      </div>\r\n      <div *ngSwitchCase=2>\r\n        <p class=\"previewContainer\">\r\n          {{currentSegment.ScreenContent}}\r\n        </p>\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"col-lg-3\">\r\n            <img [src]=\"'data:image/png;base64,'+lesson.Segments[this.currentSegmentIndex].SegmentImages[0].Image | safeHtml\"\r\n              width=\"40px\" height=\"40px\" />\r\n          </div>\r\n          <div class=\"col=lg-9\">\r\n            <label>Replace Image ?</label>\r\n            <p class=\"text-left \" style=\"font-size: 16px\">\r\n              Drag and drop an image or click\r\n\r\n            </p>\r\n            <div class=\"upload-btn-wrapper\">\r\n              <button class=\"btnupload btn-sm\">Upload a file</button>\r\n              <input (change)=\"onFileChange($event)\" #fileInput type=\"file\" name=\"myfile\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <!-- <button class=\"btn\">Add Question</button>\r\n  <button class=\"btn btn-success\">Next Screen</button> -->\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngSwitchCase=3>\r\n        <div>\r\n          <textarea class=\"form-control\" maxlength=\"600\" rows=\"6\" [(ngModel)]=\"currentSegment.ScreenContent\"\r\n            (ngModelChange)=\"valuechange($event)\" style=\"resize:none;\" placeholder=\"Type your question here...\"></textarea>\r\n\r\n        </div>\r\n        <div>\r\n          <input id=\"true-answer\" class=\"radio-custom\" name=\"true-false-group\" type=\"radio\" [value]=\"true-false-selection\"\r\n            (change)=\"true_false_answer(true)\">\r\n          <label for=\"true-answer\" class=\"radio-custom-label\">True</label>\r\n        </div>\r\n        <div>\r\n          <input id=\"false-answer\" class=\"radio-custom\" name=\"true-false-group\" type=\"radio\" [value]=\"true-false-selection\"\r\n            (change)=\"true_false_answer(false)\">\r\n          <label for=\"false-answer\" class=\"radio-custom-label\">False</label>\r\n        </div>\r\n        <div>\r\n          <app-extra-question-info></app-extra-question-info>\r\n        </div>\r\n      </div>\r\n      <div *ngSwitchCase=\"4\">\r\n        <div>\r\n          <textarea class=\"form-control\" maxlength=600 rows=\"6\" [(ngModel)]=\"currentSegment.ScreenContent\"\r\n            (ngModelChange)=\"valuechange($event)\" style=\"resize:none;\" placeholder=\"Type your question here...\"></textarea>\r\n\r\n        </div>\r\n        <div style=\"margin-top:20px;\">\r\n          <div class=\"col-lg-12\">\r\n            <table>\r\n              <tr>\r\n                <td><input id=\"mc_op1\" type=\"radio\" name=\"multiple-choice-group\" (change)=\"multiple_choice_answer1(mc_opt1.value)\"\r\n                    style=\"height:25px;width:25px;;\" *ngIf=\"mcoption1radiobutton\"> <img src=\"/assets/images/greentick.png\"\r\n                    height=\"30px;\" width=\"30px;\" *ngIf=\"mcoption1right\"></td>\r\n\r\n                <td> <input id=\"mc_op1_text\" type=\"textbox\" placeholder=\" Enter Option 1\" class=\"option_1\" #mc_opt1\r\n                    [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption1\"\r\n                    style=\"margin-left:10px\"></td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n\r\n          </div>\r\n          <div class=\"col-lg-12\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <input id=\"mc_op2\" type=\"radio\" name=\"multiple-choice-group\" (change)=\"multiple_choice_answer2(mc_opt2.value)\"\r\n                    style=\"height:25px;width:25px\" *ngIf=\"mcoption2radiobutton\"><img src=\"/assets/images/greentick.png\"\r\n                    height=\"30px;\" width=\"30px;\" *ngIf=\"mcoption2right\">\r\n                </td>\r\n                <td>\r\n                  <input id=\"mc_op2_text\" type=\"textbox\" placeholder=\" Enter Option 2\" class=\"option_2\" #mc_opt2\r\n                    [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption2\"\r\n                    style=\"margin-left:10px\">\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          </div>\r\n          <div class=\"col-lg-12\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <input id=\"mc_op3\" type=\"radio\" name=\"multiple-choice-group\" (change)=\"multiple_choice_answer3(mc_opt3.value)\"\r\n                    style=\"height:25px;width:25px\" *ngIf=\"mcoption3radiobutton\">\r\n                  <img src=\"/assets/images/greentick.png\" height=\"30px;\" width=\"30px;\" *ngIf=\"mcoption3right\">\r\n                </td>\r\n                <td>\r\n                  <input id=\"mc_op3_text\" type=\"textbox\" placeholder=\" Enter Option 3\" class=\"option_3\" #mc_opt3\r\n                    [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption3\"\r\n                    style=\"margin-left:10px\">\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n\r\n          </div>\r\n          <!-- <div *ngIf=\"addoptbutton\">\r\n                         <button class=\"add-option-button\" (click)=\"addnewoption()\"><i class=\"fa fa-plus-square\"></i> Add Option</button>\r\n                         </div> -->\r\n          <div class=\"col-lg-12\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <input id=\"mc_op4\" type=\"radio\" name=\"multiple-choice-group\" (change)=\"multiple_choice_answer4(mc_opt4.value)\"\r\n                    style=\"height:25px;width:25px\" *ngIf=\"mcoption4radiobutton\">\r\n                  <img src=\"/assets/images/greentick.png\" height=\"30px;\" width=\"30px;\" *ngIf=\"mcoption4right\">\r\n                </td>\r\n                <td>\r\n                  <input id=\"mc_op4_text\" type=\"textbox\" placeholder=\" Enter Option 4\" class=\"option_4\" #mc_opt4\r\n                    [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption4\"\r\n                    style=\"margin-left:10px\">\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div>\r\n          <app-extra-question-info></app-extra-question-info>\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngSwitchCase=\"5\">\r\n        <div class=\"col-lg-12\" style=\"margin-bottom:20px;\">\r\n          <textarea class=\"form-control\" maxlength=\"600\" rows=\"6\" [(ngModel)]=\"currentSegment.ScreenContent\"\r\n            (ngModelChange)=\"valuechange($event)\" style=\"resize:none;\" placeholder=\"Type your question here...\"></textarea>\r\n\r\n        </div>\r\n        <div>\r\n          <div class=\"col-lg-12\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <input id=\"ms_op1\" type=\"checkbox\" name=\"multiple-select-group\" (change)=\"checkoption1()\" *ngIf=\"msoption1checkbox\"\r\n                    [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[0].value\" style=\"height:25px;width:25px;\">\r\n                  <img src=\"/assets/images/greentick.png\" *ngIf=\"msoption1right\" width=\"30px;\" height=\"30px;\" (click)=\"unselectoption1()\">\r\n                </td>\r\n                <td>\r\n                  <input id=\"ms_op1_text\" type=\"textbox\" placeholder=\" Enter Option 1\" class=\"option_1\" style=\"margin-left:10px;\"\r\n                    [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[0].mSelectOption\"\r\n                    #ms_opt1>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          </div>\r\n          <div class=\"col-lg-12\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <input id=\"ms_op2\" type=\"checkbox\" *ngIf=\"msoption2checkbox\" (change)=\"checkoption2()\" [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[1].value\"\r\n                    name=\"multiple-select-group\" style=\"height:25px;width:25px;\">\r\n                  <img src=\"/assets/images/greentick.png\" *ngIf=\"msoption2right\" width=\"30px;\" height=\"30px;\" (click)=\"unselectoption2()\">\r\n                </td>\r\n                <td>\r\n                  <input id=\"ms_op2_text\" type=\"textbox\" placeholder=\" Enter Option 2\" class=\"option_2\" style=\"margin-left:10px;\"\r\n                    [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[1].mSelectOption\"\r\n                    #ms_opt2>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n\r\n          </div>\r\n          <div class=\"col-lg-12\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <input id=\"ms_op3\" type=\"checkbox\" *ngIf=\"msoption3checkbox\" (change)=\"checkoption3()\" [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[2].value\"\r\n                    name=\"multiple-select-group\" style=\"height:25px;width:25px;\">\r\n                  <img src=\"/assets/images/greentick.png\" *ngIf=\"msoption3right\" width=\"30px;\" height=\"30px;\" (click)=\"unselectoption3()\">\r\n                </td>\r\n                <td>\r\n                  <input id=\"ms_op3_text\" type=\"textbox\" placeholder=\" Enter Option 3\" class=\"option_3\" style=\"margin-left:10px;\"\r\n                    [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[2].mSelectOption\"\r\n                    #ms_opt3>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          </div>\r\n          <div class=\"col-lg-12\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <input id=\"ms_op4\" type=\"checkbox\" *ngIf=\"msoption4checkbox\" (change)=\"checkoption4()\" [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[3].value\"\r\n                    name=\"multiple-select-group\" style=\"height:25px;width:25px;\">\r\n                  <img src=\"/assets/images/greentick.png\" *ngIf=\"msoption4right\" width=\"30px;\" height=\"30px;\" (click)=\"unselectoption4()\">\r\n                </td>\r\n                <td>\r\n                  <input id=\"ms_op4_text\" type=\"textbox\" placeholder=\" Enter Option 4\" class=\"option_4\" style=\"margin-left:10px;\"\r\n                    [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[3].mSelectOption\"\r\n                    #ms_opt4>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          </div>\r\n          <div class=\"col-lg-12\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <input id=\"ms_op5\" type=\"checkbox\" *ngIf=\"msoption5checkbox\" (change)=\"checkoption5()\" [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[4].value\"\r\n                    name=\"multiple-select-group\" style=\"height:25px;width:25px;\">\r\n                  <img src=\"/assets/images/greentick.png\" *ngIf=\"msoption5right\" width=\"30px;\" height=\"30px;\" (click)=\"unselectoption5()\">\r\n                </td>\r\n                <td>\r\n                  <input id=\"ms_op5_text\" type=\"textbox\" placeholder=\" Enter Option 5\" class=\"option_5\" style=\"margin-left:10px;\"\r\n                    [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[4].mSelectOption\"\r\n                    #ms_opt5>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div>\r\n          <app-extra-question-info></app-extra-question-info>\r\n        </div>\r\n      </div>\r\n      <div *ngSwitchCase=\"6\">\r\n\r\n        <div>\r\n          <textarea class=\"form-control\" maxLength=\"600\" rows=\"6\" [(ngModel)]=\"currentSegment.ScreenContent\"\r\n            (ngModelChange)=\"valuechange($event)\" style=\"resize:none;\" placeholder=\"Type your question here...\"></textarea>\r\n\r\n        </div>\r\n        <div>\r\n          <input type=\"textbox\" id=\"fill-up-answer\" class=\"fill-up-answer\" placeholder=\"Type your answer here...\"\r\n            [(ngModel)]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer\">\r\n        </div>\r\n\r\n        <div>\r\n          <app-extra-question-info [currentSegmentIndex] = \"currentSegmentIndex\"></app-extra-question-info>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container demo\">\r\n\r\n\r\n\r\n    <!-- Modal -->\r\n    <div class=\"modal right fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n\r\n          <div class=\"modal-header\">\r\n\r\n            <a href=\"#\" style=\"text-decoration:none;\">\r\n              <p style=\"font-size:35px;font-family:arial;color: #7d7d7d; text-decoration:none;\" data-dismiss=\"modal\"><span\r\n                  aria-hidden=\"true\">&times;</span></p>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"modal-body\">\r\n            <div class='pca-hold'>\r\n                <div class='pca-main'>\r\n                    <div class='pca-inner' [ngSwitch]=\"lesson.Segments[this.currentSegmentIndex].TemplateId\">\r\n                  <div *ngSwitchCase=\"1\">\r\n\r\n                    <div col-lg-12 style=\"padding:5%;\">\r\n                      <textarea class=\"tfq\" rows=\"15\" cols=\"21\" style=\"resize:none; border:none; overflow:auto; background: #FFF;\"\r\n                        disabled>{{lesson.Segments[this.currentSegmentIndex].ScreenContent}}</textarea>\r\n                    </div>\r\n                    <div class=\"row col-lg-12\">\r\n\r\n\r\n                      <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n                      <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngSwitchCase=\"2\">\r\n                    <div col-lg-12 *ngIf=\"lesson.Segments[this.currentSegmentIndex].TemplateId ==2\">\r\n                      <img [src]=\"'data:image/png;base64,'+lesson.Segments[this.currentSegmentIndex].SegmentImages[0].Image | safeHtml\"\r\n                        style=\"height: 155px;\" />\r\n                    </div>\r\n                    <div col-lg-12 style=\"padding:5%; font-size:8px\">\r\n                      <textarea class=\"tfq\" cols=\"21\" rows=\"7\" style=\"resize:none;border:none;overflow:auto; background: #FFF;\"\r\n                        disabled>  {{lesson.Segments[this.currentSegmentIndex].ScreenContent}}</textarea>\r\n                    </div>\r\n                    <div class=\"row col-lg-12\">\r\n\r\n\r\n                      <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n                      <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngSwitchCase=\"3\">\r\n                    <div col-lg-12 *ngIf=\"lesson.Segments[this.currentSegmentIndex].TemplateId ==3\">\r\n                      <textarea class=\"tfq\" cols=\"25\" rows=\"12\" style=\"resize:none;border:none;overflow:auto; background: #FFF;\"\r\n                        disabled> {{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question}}</textarea>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <button id=\"true-answer-button\" class=\"true-false-class\" [class.true-false-class2]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer==='True'\">True</button><button\r\n                        id=\"false-answer-button\" class=\"true-false-class\" [class.true-false-class2]=\"lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer==='False'\">False</button>\r\n\r\n                    </div>\r\n                    <div class=\"row col-lg-12\">\r\n\r\n\r\n                      <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n                      <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div *ngSwitchCase=\"4\">\r\n                    <div col-lg-12 *ngIf=\"lesson.Segments[this.currentSegmentIndex].TemplateId == 4\">\r\n                      <textarea class=\"tfq\" cols=\"25\" rows=\"7\" style=\"resize:none;border:none;overflow:auto; background: #FFF;\"\r\n                        disabled> {{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question}}</textarea>\r\n                    </div>\r\n                    <div class=\"row\" style=\"margin-top:30px;\">\r\n\r\n                      <button class=\"mc-selected\" [ngClass]=\"{\r\n                             'mc-selected2':McOpt1===true\r\n                           }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption1}}</button>\r\n                      <br />\r\n                      <button class=\"mc-selected\" [ngClass]=\"{\r\n                             'mc-selected2':McOpt2===true\r\n                            }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption2}}</button>\r\n                      <br />\r\n                      <button class=\"mc-selected\" [ngClass]=\"{\r\n                             'mc-selected2':McOpt3===true\r\n                            }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption3}}</button>\r\n                      <button class=\"mc-selected\" [ngClass]=\"{\r\n                              'mc-selected2':McOpt4===true\r\n                            }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mcOptions.McOption4}}</button>\r\n                    </div>\r\n                    <div class=\"row col-lg-12\">\r\n\r\n\r\n                      <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n                      <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngSwitchCase=\"5\">\r\n                    <div col-lg-12 *ngIf=\"lesson.Segments[this.currentSegmentIndex].TemplateId == 5\">\r\n                      <textarea class=\"tfq\" cols=\"25\" rows=\"5\" style=\"resize:none;border:none;overflow:auto; background: #FFF;\"\r\n                        disabled> {{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question}}</textarea>\r\n                    </div>\r\n                    <div class=\"row\" style=\"margin-top:30px;\">\r\n                      <button class=\"ms-selected\" [ngClass]=\"{\r\n                          'ms-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[0].value===true\r\n                         }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[0].mSelectOption}}</button>\r\n                      <button class=\"ms-selected\" [ngClass]=\"{\r\n                          'ms-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[1].value===true\r\n                         }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[1].mSelectOption}}</button>\r\n                      <button class=\"ms-selected\" [ngClass]=\"{\r\n                          'ms-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[2].value===true\r\n                         }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[2].mSelectOption}}</button>\r\n                      <button class=\"ms-selected\" [ngClass]=\"{\r\n                          'ms-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[3].value===true\r\n                         }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[3].mSelectOption}}</button>\r\n                      <button class=\"ms-selected\" [ngClass]=\"{\r\n                          'ms-selected2':lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[4].value===true\r\n                         }\">{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[4].mSelectOption}}</button>\r\n                    </div>\r\n                    <div class=\"row col-lg-12\">\r\n\r\n\r\n                      <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n                      <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngSwitchCase=\"6\">\r\n                    <div col-lg-12 *ngIf=\"lesson.Segments[this.currentSegmentIndex].TemplateId == 6\">\r\n                      <textarea class=\"tfq\" cols=\"25\" rows=\"15\" style=\"resize:none;border:none;overflow:auto; background: #FFF;\"\r\n                        disabled>{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question}}</textarea>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <textarea rows=\"1\" cols=\"17\" style=\"resize:none;border:none;overflow:auto; background: #FFF; border-bottom:1px solid grey; margin-left:30px;\"\r\n                        disabled>{{lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer}}</textarea>\r\n                    </div>\r\n                    <div class=\"row col-lg-12\">\r\n\r\n\r\n                      <div class=\"col-lg-3 float-left likebuttonmob\"><i class=\"fa fa-heart\"></i></div>\r\n                      <div class=\" col-lg-6 submitbuttonmob\">Submit <i class=\"fa fa-chevron-right\"></i></div>\r\n                    </div>\r\n                  </div>\r\n\r\n                      \r\n                </div><!-- 'pca-inner' -->\r\n                  </div><!-- 'pca-main' -->\r\n                <div class='pca-sub'>\r\n                    <div class='pca-top'></div>\r\n                    <div class='pca-mid'>\r\n                        <div class='pca-part'></div>\r\n                      </div><!-- 'pca-mid' -->\r\n                   \r\n                  </div><!-- 'pca-bot' -->\r\n            </div><!-- 'pca-hold' -->\r\n          </div>\r\n\r\n        </div><!-- modal-content -->\r\n      </div><!-- modal-dialog -->\r\n    </div><!-- modal -->\r\n\r\n\r\n  </div><!-- container -->"

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/template-new/template-new.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Preview {\n  font-family: AcuminPro;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: left;\n  color: #4a4a4a; }\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block; }\n\n.btnupload {\n  border: 2px solid gray;\n  color: gray;\n  background-color: white;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: bold; }\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0; }\n\n.Bitmap {\n  width: 108px;\n  height: 108px; }\n\n.previewContainer {\n  font-family: AcuminPro;\n  font-size: 18px;\n  line-height: 1.5;\n  text-align: left;\n  color: #7d7d7d; }\n\n.screens {\n  width: 100%;\n  border-radius: 4px;\n  background-color: rgba(136, 78, 249, 0.1);\n  font-family: AcuminPro;\n  font-size: 14px;\n  line-height: 1.43;\n  text-align: left;\n  color: #4a4a4a;\n  margin-bottom: 2%; }\n\n.screen:active {\n  border: solid 1px rgba(136, 78, 249, 0.54); }\n\nlabel {\n  width: 131px;\n  height: 24px;\n  font-family: AcuminPro;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: left;\n  color: #4a4a4a; }\n\n.bounds {\n  width: 320px;\n  height: 50px;\n  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.1); }\n\n.pca-hold {\n  width: 239px; }\n\n.pca-hold .pca-main {\n  display: block;\n  position: relative;\n  background-color: #030303;\n  border: 7.17px solid #1d2d2d;\n  border-top: 54.97px solid #1d2d2d;\n  border-bottom: 56.404px solid #1d2d2d;\n  border-radius: 27.007px;\n  height: 490.428px;\n  box-shadow: 0 0 0 2.39px #C6C7CA; }\n\n.pca-hold .pca-main:after {\n  content: '';\n  position: absolute;\n  top: -31.07px;\n  left: 55%;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  width: 7.17px;\n  height: 7.17px;\n  background-color: #959595;\n  border-radius: 100%;\n  -webkit-transform: translate(-43.02px, 0);\n  transform: translate(-43.02px, 0); }\n\n.pca-hold .pca-main:before {\n  content: \"\";\n  position: absolute;\n  top: -11.95px;\n  left: 55%;\n  opacity: 1;\n  width: 47.8px;\n  height: 2.39px;\n  -webkit-transform: translate(-21.51px, -17.925px);\n  transform: translate(-21.51px, -17.925px);\n  border-radius: 2.39px;\n  background-color: #959595; }\n\n.pca-hold .pca-inner {\n  display: block; }\n\n.pca-hold .pca-sub {\n  display: block;\n  text-align: center;\n  position: relative;\n  height: 0; }\n\n.pca-hold .pca-sub .pca-bot {\n  border-radius: 100%;\n  width: 33.46px;\n  height: 33.46px;\n  display: block;\n  margin: 0 auto;\n  background-color: transparent;\n  z-index: 2;\n  box-shadow: 0 0 0 2.629px #636670;\n  -webkit-transform: translate(0, -44.932px);\n  transform: translate(0, -44.932px); }\n\n.wrapper {\n  display: block; }\n\n/*******************************\r\n* MODAL AS LEFT/RIGHT SIDEBAR\r\n* Add \"left\" or \"right\" in modal parent div, after class=\"modal\".\r\n* Get free snippets on bootpen.com\r\n*******************************/\n.modal.left .modal-dialog,\n.modal.right .modal-dialog {\n  position: fixed;\n  margin: auto;\n  width: 320px;\n  height: 100%;\n  -webkit-transform: translate3d(0%, 0, 0);\n  transform: translate3d(0%, 0, 0); }\n\n.modal.left .modal-content,\n.modal.right .modal-content {\n  height: 100%;\n  overflow-y: auto; }\n\n.modal.left .modal-body,\n.modal.right .modal-body {\n  padding: 15px 15px 80px; }\n\n/*Left*/\n.modal.left.fade .modal-dialog {\n  left: -320px;\n  transition: opacity 0.3s linear, left 0.3s ease-out; }\n\n.modal.left.fade.in .modal-dialog {\n  left: 0; }\n\n/*Right*/\n.modal.right.fade .modal-dialog {\n  right: -320px;\n  transition: opacity 0.3s linear, right 0.3s ease-out; }\n\n.modal.right.fade.in .modal-dialog {\n  right: 0; }\n\n/* ----- MODAL STYLE ----- */\n.modal-content {\n  border-radius: 0;\n  border: none; }\n\n.modal-header {\n  border-bottom-color: #EEEEEE;\n  background-color: #FAFAFA; }\n\n/* ----- v CAN BE DELETED v ----- */\nbody {\n  background-color: #78909C; }\n\n.demo {\n  padding-top: 60px;\n  padding-bottom: 110px; }\n\n.btn-demo {\n  margin: 15px;\n  padding: 10px 15px;\n  border-radius: 0;\n  font-size: 16px;\n  background-color: #FFFFFF; }\n\n.btn-demo:focus {\n  outline: 0; }\n\n.demo-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  background-color: #212121;\n  text-align: center; }\n\n.demo-footer > a {\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #fff; }\n\n.pca-hold {\n  width: 220px; }\n\n.pca-hold .pca-main {\n  display: block;\n  position: relative;\n  background-color: white;\n  border: 6.6px solid #1d2d2d;\n  border-top: 50.6px solid #1d2d2d;\n  border-bottom: 51.92px solid #1d2d2d;\n  border-radius: 24.86px;\n  height: 451.44px;\n  box-shadow: 0 0 0 2.2px #C6C7CA; }\n\n.pca-hold .pca-main:after {\n  content: '';\n  position: absolute;\n  top: -28.6px;\n  left: 55%;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  width: 6.6px;\n  height: 6.6px;\n  background-color: white;\n  border-radius: 100%;\n  -webkit-transform: translate(-39.6px, 0);\n  transform: translate(-39.6px, 0); }\n\n.pca-hold .pca-main:before {\n  content: \"\";\n  position: absolute;\n  top: -11px;\n  left: 55%;\n  opacity: 1;\n  width: 44px;\n  height: 2.2px;\n  -webkit-transform: translate(-19.8px, -16.5px);\n  transform: translate(-19.8px, -16.5px);\n  border-radius: 2.2px;\n  background-color: white; }\n\n.pca-hold .pca-inner {\n  display: block; }\n\n.pca-hold .pca-sub {\n  display: block;\n  text-align: center;\n  position: relative;\n  height: 0; }\n\n.pca-hold .pca-sub .pca-bot {\n  border-radius: 100%;\n  width: 30.8px;\n  height: 30.8px;\n  display: block;\n  margin: 0 auto;\n  background-color: transparent;\n  z-index: 2;\n  box-shadow: 0 0 0 2.42px #636670;\n  -webkit-transform: translate(0, -41.36px);\n  transform: translate(0, -41.36px); }\n\n.radio-custom {\n  opacity: 0;\n  position: absolute; }\n\n.radio-custom, .radio-custom-label {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 5px;\n  cursor: pointer; }\n\n.radio-custom-label {\n  position: relative; }\n\n.radio-custom + .radio-custom-label:before {\n  content: '';\n  background: #fff;\n  border: 2px solid #ddd;\n  display: inline-block;\n  vertical-align: middle;\n  width: 25px;\n  height: 25px;\n  padding: 2px;\n  margin-right: 10px;\n  text-align: center; }\n\n.radio-custom + .radio-custom-label:before {\n  border-radius: 50%; }\n\n.radio-custom:checked + .radio-custom-label:before {\n  content: \"\\F00C\";\n  font-family: 'FontAwesome';\n  color: white;\n  margin-bottom: 10;\n  background-color: #5cb85c; }\n\n.radio-custom:focus + .radio-custom-label {\n  outline: 1px solid #ddd;\n  /* focus style */ }\n\n.tfq {\n  margin-left: 10px;\n  color: #4a4a4a;\n  font-size: 12px;\n  text-align: left; }\n\n#true-answer-button {\n  margin-left: 25px; }\n\n.true-false-class {\n  width: 90px;\n  height: 65px;\n  border-radius: 2.5px;\n  background-color: white;\n  color: #4a4a4a;\n  border: 1px solid lightgrey; }\n\n.true-false-class2 {\n  width: 90px;\n  height: 65px;\n  border-radius: 2.5px;\n  background-color: #9765f8;\n  color: white;\n  border: 1px solid #9765f8; }\n\n.questansgap2 {\n  margin-top: 50%; }\n\n.submitbuttonmob {\n  color: #9765f8;\n  font-size: 10px;\n  font-weight: bold;\n  float: right; }\n\n.likebuttonmob {\n  color: #b82b2b; }\n\n.option_1, .option_2, .option_3, .option_4, .option_5 {\n  border: 1px solid grey; }\n\n.mc-selected {\n  margin-left: 25px;\n  border-radius: 2.5px;\n  height: 30px;\n  background-color: white;\n  color: #4a4a4a;\n  border: 1px solid lightgrey;\n  width: 180px; }\n\n.mc-selected2 {\n  margin-left: 25px;\n  border: 1px solid grey;\n  border-radius: 2.5px;\n  height: 30px;\n  background-color: #9765f8;\n  color: white;\n  width: 180px; }\n\n.add-option-button {\n  margin-top: 20px;\n  margin-left: 20px;\n  background-color: white;\n  color: grey;\n  border: 1px solid grey;\n  width: 250px; }\n\n.ms-selected {\n  margin-left: 25px;\n  border: 1px solid lightgrey;\n  border-radius: 2.5px;\n  height: 30px;\n  background-color: white;\n  color: #4a4a4a;\n  width: 180px; }\n\n.ms-selected2 {\n  margin-left: 25px;\n  border: 1px solid grey;\n  border-radius: 2.5px;\n  height: 30px;\n  background-color: #9765f8;\n  width: 180px;\n  color: white; }\n\n.fill-up-answer {\n  margin-top: 40px;\n  border: 1px solid lightgrey; }\n\n.close {\n  position: absolute;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.3; }\n\n.close:hover {\n  opacity: 1; }\n\n.close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: ' ';\n  height: 33px;\n  width: 2px;\n  background-color: #333; }\n\n.close:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.close:after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.selected {\n  border: 1px solid red; }\n\na:hover {\n  color: #9765f8;\n  text-decoration: none; }\n\n.selectseg {\n  border: 0.5px solid #9765f8;\n  box-shadow: none;\n  color: #9765f8; }\n\n.unselectseg {\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lesson-new/add-lesson/template-new/template-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateNewComponent; });
/* unused harmony export Template */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__ = __webpack_require__("../../../../../src/app/Services/lesson/lesson-shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_lesson_template_template_service__ = __webpack_require__("../../../../../src/app/Services/lesson/template/template.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplateNewComponent = (function () {
    function TemplateNewComponent(lessonSharedService, templateService) {
        this.lessonSharedService = lessonSharedService;
        this.templateService = templateService;
        this.templateList1 = [];
        this.templateList2 = [];
        this.IsSegmentSelected = false;
        this.selectedTemplate = {};
        this.mcOptions = {
            McOption1: '',
            McOption2: '',
            McOption3: '',
            McOption4: '',
        };
        this.McOpt1 = false;
        this.McOpt2 = false;
        this.McOpt3 = false;
        this.McOpt4 = false;
        this.MsOpt1 = false;
        this.MsOpt2 = false;
        this.MsOpt3 = false;
        this.MsOpt4 = false;
        this.MsOpt5 = false;
        this.addoptbutton = false;
        this.mc4 = false;
        this.nosuggestedanswer = ' ';
        this.currentSegmentIndex = 0;
        this.currentSegment = {};
        this.lesson = {};
        this.mcoption1right = false;
        this.mcoption1radiobutton = true;
        this.mcoption2right = false;
        this.mcoption2radiobutton = true;
        this.mcoption3right = false;
        this.mcoption3radiobutton = true;
        this.mcoption4right = false;
        this.mcoption4radiobutton = true;
        this.msoption1right = false;
        this.msoption1checkbox = true;
        this.msoption2right = false;
        this.msoption2checkbox = true;
        this.msoption3right = false;
        this.msoption3checkbox = true;
        this.msoption4right = false;
        this.msoption4checkbox = true;
        this.msoption5right = false;
        this.msoption5checkbox = true;
    }
    TemplateNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.templateService.GetAllTemplates().subscribe(function (a) {
            _this.templateList1 = a.json().filter(function (a) { return a.TemplateTypeId == 1; });
            _this.templateList2 = a.json().filter(function (a) { return a.TemplateTypeId == 2; });
        });
        this.lessonSharedService.lesson$.subscribe(function (a) {
            _this.lesson = a;
        });
        $(document).ready(function () {
            var trigger = $('.hamburger'), overlay = $('.overlay'), isClosed = false;
            trigger.click(function () {
                hamburger_cross();
            });
            function hamburger_cross() {
                if (isClosed == true) {
                    overlay.hide();
                    trigger.removeClass('is-open');
                    trigger.addClass('is-closed');
                    isClosed = false;
                }
                else {
                    overlay.show();
                    trigger.removeClass('is-closed');
                    trigger.addClass('is-open');
                    isClosed = true;
                }
            }
            $('[data-toggle="offcanvas"]').click(function () {
                $('#wrapper').toggleClass('toggled');
            });
        });
    };
    TemplateNewComponent.prototype.selectSegment = function (segment) {
        this.IsSegmentSelected = true;
        this.currentSegmentIndex = this.lesson.Segments.indexOf(segment);
        this.currentSegment = this.lesson.Segments[this.currentSegmentIndex];
        // // console.log()this.currentSegment);
    };
    TemplateNewComponent.prototype.onLessonSaveClick = function () {
        if (this.lesson.LessonName == '' || this.lesson.LessonName == null) {
            alertify.alert('Incubator Says', 'Lesson Name is Required');
            return true;
        }
        // get options and set them as suggested answers and correct answers
        this.lessonSharedService.saveLesson();
    };
    TemplateNewComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.image = reader.result.split(',')[1];
                _this.lesson.Segments[_this.currentSegmentIndex].SegmentImages[0].Image = reader.result.split(',')[1];
            };
        }
    };
    TemplateNewComponent.prototype.selectTemplateId = function (template) {
        if (template.Id != 2)
            this.lesson.Segments[this.currentSegmentIndex].SegmentImages[0].Image = '';
        this.selectedTemplate = template;
        this.lesson.Segments[this.currentSegmentIndex].TemplateId = template.Id;
        // console.log()this.lesson.Segments[this.currentSegmentIndex]);
        if (template.Id == 3) {
            this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question = this.currentSegment.ScreenContent;
            return true;
        }
        else if (template.Id == 4) {
            this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question = this.currentSegment.ScreenContent;
            return true;
        }
        else if (template.Id == 5) {
            this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question = this.currentSegment.ScreenContent;
            return true;
        }
        else if (template.Id == 6) {
            this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question = this.currentSegment.ScreenContent;
            return true;
        }
    };
    TemplateNewComponent.prototype.true_false_answer = function (answer) {
        this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer = answer ? "True" : "False";
        // alert(this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer);
        // this.true_false_selection=answer;
    };
    TemplateNewComponent.prototype.multiple_choice_answer1 = function (option1) {
        this.McOpt1 = true;
        this.McOpt2 = false;
        this.McOpt3 = false;
        this.McOpt4 = false;
        this.multiple_choice_selection = option1;
        this.mcoption1right = true;
        this.mcoption1radiobutton = false;
        this.mcoption2right = false;
        this.mcoption2radiobutton = true;
        this.mcoption3right = false;
        this.mcoption3radiobutton = true;
        this.mcoption4right = false;
        this.mcoption4radiobutton = true;
    };
    TemplateNewComponent.prototype.multiple_choice_answer2 = function (option2) {
        this.McOpt1 = false;
        this.McOpt2 = true;
        this.McOpt3 = false;
        this.McOpt4 = false;
        this.multiple_choice_selection = option2;
        this.mcoption1right = false;
        this.mcoption1radiobutton = true;
        this.mcoption2right = true;
        this.mcoption2radiobutton = false;
        this.mcoption3right = false;
        this.mcoption3radiobutton = true;
        this.mcoption4right = false;
        this.mcoption4radiobutton = true;
    };
    TemplateNewComponent.prototype.multiple_choice_answer3 = function (option3) {
        this.McOpt1 = false;
        this.McOpt2 = false;
        this.McOpt3 = true;
        this.McOpt4 = false;
        this.multiple_choice_selection = option3;
        this.mcoption1right = false;
        this.mcoption1radiobutton = true;
        this.mcoption2right = false;
        this.mcoption2radiobutton = true;
        this.mcoption3right = true;
        this.mcoption3radiobutton = false;
        this.mcoption4right = false;
        this.mcoption4radiobutton = true;
    };
    TemplateNewComponent.prototype.multiple_choice_answer4 = function (option4) {
        this.McOpt1 = false;
        this.McOpt2 = false;
        this.McOpt3 = false;
        this.McOpt4 = true;
        this.multiple_choice_selection = option4;
        this.mcoption1right = false;
        this.mcoption1radiobutton = true;
        this.mcoption2right = false;
        this.mcoption2radiobutton = true;
        this.mcoption3right = false;
        this.mcoption3radiobutton = true;
        this.mcoption4right = true;
        this.mcoption4radiobutton = false;
    };
    // addnewoption()
    // {
    //   this.addoptbutton = false;
    //   this.mcoptionfour = true;
    //   this.mc4 = true;
    //   this.McOpt1 = false;
    //   this.McOpt2 = false;
    //   this.McOpt3 = false;
    //   this.McOpt4 = false;
    // }
    TemplateNewComponent.prototype.multiple_select_answer1 = function (option1) {
        this.MsOpt1 = true;
        this.multiple_select_selection1 = option1;
    };
    TemplateNewComponent.prototype.multiple_select_answer2 = function (option2) {
        this.MsOpt2 = true;
        this.multiple_select_selection2 = option2;
        alert(option2);
    };
    TemplateNewComponent.prototype.multiple_select_answer3 = function (option3) {
        this.MsOpt3 = true;
        this.multiple_select_selection3 = option3;
        alert(option3);
    };
    TemplateNewComponent.prototype.multiple_select_answer4 = function (option4) {
        this.MsOpt4 = true;
        this.multiple_select_selection4 = option4;
    };
    TemplateNewComponent.prototype.multiple_select_answer5 = function (option5) {
        this.MsOpt5 = true;
        this.multiple_select_selection5 = option5;
        alert(option5);
    };
    TemplateNewComponent.prototype.checkoption1 = function () {
        this.msoption1right = true;
        this.msoption1checkbox = false;
    };
    TemplateNewComponent.prototype.unselectoption1 = function () {
        this.msoption1right = false;
        this.msoption1checkbox = true;
        this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[0].value = !this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[0].value;
    };
    TemplateNewComponent.prototype.checkoption2 = function () {
        this.msoption2right = true;
        this.msoption2checkbox = false;
    };
    TemplateNewComponent.prototype.unselectoption2 = function () {
        this.msoption2right = false;
        this.msoption2checkbox = true;
        this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[1].value = !this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[1].value;
    };
    TemplateNewComponent.prototype.checkoption3 = function () {
        this.msoption3right = true;
        this.msoption3checkbox = false;
    };
    TemplateNewComponent.prototype.unselectoption3 = function () {
        this.msoption3right = false;
        this.msoption3checkbox = true;
        this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[2].value = !this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[2].value;
    };
    TemplateNewComponent.prototype.checkoption4 = function () {
        this.msoption4right = true;
        this.msoption4checkbox = false;
    };
    TemplateNewComponent.prototype.unselectoption4 = function () {
        this.msoption4right = false;
        this.msoption4checkbox = true;
        this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[3].value = !this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[3].value;
    };
    TemplateNewComponent.prototype.checkoption5 = function () {
        this.msoption5right = true;
        this.msoption5checkbox = false;
    };
    TemplateNewComponent.prototype.unselectoption5 = function () {
        this.msoption5right = false;
        this.msoption5checkbox = true;
        this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[4].value = !this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[4].value;
    };
    TemplateNewComponent.prototype.valuechange = function (newValue) {
        this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question = newValue;
        // console.log()newValue);
    };
    TemplateNewComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.lesson.Segments.forEach(function (element) {
            if (element.TemplateId == 4) {
                element.QuestionAnswers[0].CorrectAnswer = _this.multiple_choice_selection;
                element.QuestionAnswers[0].SuggestedAnswers = element.QuestionAnswers[0].mcOptions.McOption1 +
                    ',' + element.QuestionAnswers[0].mcOptions.McOption2 + ',' +
                    element.QuestionAnswers[0].mcOptions.McOption3 + ',' + element.QuestionAnswers[0].mcOptions.McOption4;
            }
            else if (element.TemplateId == 3) {
                element.QuestionAnswers[0].SuggestedAnswers = 'True , False';
            }
            else if (element.TemplateId == 5) {
                var correctAnswer_1 = '';
                var suggestedAnswer_1 = '';
                element.QuestionAnswers[0].mSelect.forEach(function (m) {
                    suggestedAnswer_1 = suggestedAnswer_1 == '' ? m.mSelectOption : suggestedAnswer_1 + ',' + m.mSelectOption;
                    if (m.value)
                        correctAnswer_1 = correctAnswer_1 == '' ? m.mSelectOption : correctAnswer_1 + ',' + m.mSelectOption;
                });
                element.QuestionAnswers[0].CorrectAnswer = correctAnswer_1;
                element.QuestionAnswers[0].SuggestedAnswers = suggestedAnswer_1;
            }
            else if (element.TemplateId == 6) {
                element.QuestionAnswers[0].SuggestedAnswers = '';
            }
        });
        this.lessonSharedService.saveCurrentLesson(this.lesson);
    };
    return TemplateNewComponent;
}());
TemplateNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-template-new',
        template: __webpack_require__("../../../../../src/app/lesson-new/add-lesson/template-new/template-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lesson-new/add-lesson/template-new/template-new.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_lesson_lesson_shared_service__["a" /* LessonSharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_lesson_template_template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_lesson_template_template_service__["a" /* TemplateService */]) === "function" && _b || Object])
], TemplateNewComponent);

var Template = (function () {
    function Template() {
    }
    return Template;
}());

var _a, _b;
//# sourceMappingURL=template-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/lessons/lessons.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n<script type=\"text/javascript\" src=\"/examples/js/typeahead/0.11.1/typeahead.bundle.js\"></script>\r\n<link href=\"/jquery.magicsearch.css\" rel=\"stylesheet\">\r\n<script src=\"/jquery.magicsearch.min.js\"></script>\r\n<link rel=\"stylesheet\" href=\"//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css\">\r\n<link rel=\"stylesheet\" href=\"/resources/demos/style.css\">\r\n<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css\">\r\n\r\n<style>\r\n  .heading {\r\n    font-size: 35px;\r\n    color: black;\r\n  }\r\n\r\n  .para1 {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .heading2 {\r\n    font-size: 30px;\r\n    color: black\r\n  }\r\n\r\n  .para2 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .para3 {\r\n    font-size: 17px;\r\n    color: black;\r\n  }\r\n\r\n  nav li a {\r\n    color: #884ef9;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n\r\n  .bs-example {\r\n    font-family: sans-serif;\r\n    position: relative;\r\n  }\r\n\r\n  .typeahead, .tt-query, .tt-hint {\r\n    border: 2px solid #CCCCCC;\r\n    border-radius: 8px;\r\n    font-size: 22px; /* Set input font size */\r\n    height: 30px;\r\n    line-height: 30px;\r\n    outline: medium none;\r\n    padding: 8px 12px;\r\n    width: 450px;\r\n  }\r\n\r\n  .typeahead {\r\n    background-color: #FFFFFF;\r\n  }\r\n\r\n    .typeahead:focus {\r\n      border: 2px solid #0097CF;\r\n    }\r\n\r\n  .tt-query {\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\r\n  }\r\n\r\n  .tt-hint {\r\n    color: #999999;\r\n  }\r\n\r\n  .tt-menu {\r\n    background-color: #FFFFFF;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n    margin-top: 12px;\r\n    padding: 8px 0;\r\n    width: 422px;\r\n  }\r\n\r\n  .tt-suggestion {\r\n    font-size: 22px; /* Set suggestion dropdown font size */\r\n    padding: 3px 20px;\r\n  }\r\n\r\n    .tt-suggestion:hover {\r\n      cursor: pointer;\r\n      background-color: #0097CF;\r\n      color: #FFFFFF;\r\n    }\r\n\r\n    .tt-suggestion p {\r\n      margin: 0;\r\n    }\r\n</style>\r\n\r\n<div class=\"content\">\r\n  <!-- <div class=\"row\">\r\n           <div class=\"col-xs-1\">\r\n\r\n               <img src=\"{{NavImage}}\" width=\"30\" height=\"30\">\r\n           </div>\r\n           <div class=\"col-xs-2\">\r\n               <h2>The BirdHouse</h2>\r\n           </div>\r\n           <div class=\"col-xs-2\">\r\n               <h3>Draft</h3>\r\n           </div>\r\n           <div class=\"col-xs-2\">\r\n               <h3> Help</h3>\r\n           </div>\r\n           <div class=\"col-xs-1\">\r\n               <button> Next Section</button>\r\n           </div>\r\n           <div class=\"col-xs-1\">\r\n           </div>\r\n           <div class=\"col-xs-1\">\r\n               <img src=\"{{NotiImage}}\" width=\"30\" height=\"30\" align=\"right\">\r\n           </div>\r\n           <div class=\"col-xs-1\">\r\n               <img src=\"{{ProfileImage}}\" width=\"30\" height=\"30\" align=\"right\">\r\n           </div>\r\n       </div>\r\n  -->\r\n\r\n  <div class=\"col-lg-12\" style=\"z-index:200;\">\r\n    <button class=\"prev pull-left\" (click)=\"prevbutton()\">Previous</button>\r\n\r\n\r\n    <button class=\"next pull-right\" (click)=\"nextbutton()\">Next</button>\r\n  </div>\r\n\r\n  <nav class=\"nav navbar\" style=\"width:100%\">\r\n\r\n    <ul class=\"nav navbar-nav megaMenu\" role=\"tablist\" style=\"width:100%\">\r\n      <li style=\"width:20%;\" class=\"active {{IsDescription}}\" role=\"presentation\"><a (click)=\"changeTab('IsDescription')\" aria-controls=\"description1\" role=\"tab\" data-toggle=\"tab\">Description</a></li>\r\n      <li style=\"width:20%;\" class=\"{{IsFreeform}}\" role=\"presentation\"><a (click)=\"changeTab('IsFreeform')\" aria-controls=\"freeform2\" role=\"tab\" data-toggle=\"tab\">Free Form</a></li>\r\n      <li style=\"width:20%;\" class=\"{{IsSegmentation}}\" role=\"presentation\"><a (click)=\"changeTab('IsSegmentation')\" aria-controls=\"segmentation3\" role=\"tab\" data-toggle=\"tab\">Segmentation</a></li>\r\n      <li style=\"width:20%;\" class=\"{{IsTemplates}}\" role=\"presentation\"><a (click)=\"changeTab('IsTemplates')\" aria-controls=\"templates4\" role=\"tab\" data-toggle=\"tab\">Templates</a></li>\r\n      <li style=\"width:20%;\" class=\"{{IsPreview}}\" role=\"presentation\"><a (click)=\"changeTab('IsPreview')\" aria-controls=\"preview5\" role=\"tab\" data-toggle=\"tab\">Preview</a></li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <div class=\"tab-content\">\r\n    <div role=\"tabpanel\" class=\"tab-pane {{IsDescription}} \" id=\"description1\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"col-lg-4\">\r\n\r\n          <h3><label for=\"lessontitle\"> Title</label></h3>\r\n          <br />\r\n          <h3><label for=\"des\"> Description</label></h3>\r\n          <br />\r\n          <h3> <label for=\"tags\">Tags</label></h3>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"form\">\r\n            <div class=\"form-group\">\r\n              <br />\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newLesson.lessontitle\" placeholder=\"Enter title over here\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <br />\r\n              <textarea class=\"form-control\" id=\"des\" placeholder=\"Try to keep to 3 or 4 sentences\" [(ngModel)]=\"newLesson.lessoncontent\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\r\n\r\n\r\n              <div class=\"bs-example\">\r\n                <br />\r\n                <input type=\"text\" class=\"typeahead tt-query\" autocomplete=\"off\" spellcheck=\"false\" placeholder=\"Add a tag\">\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div role=\"tabpanel\" class=\"tab-pane {{IsFreeform}}\" id=\"freeform2\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"col-lg-7 col-lg-offset-3\">\r\n          <dl>\r\n            <dt class=\"heading text-center text-capitalize\" style=\"margin-bottom:10px;\">\r\n              {{newLesson.lessontitle}}\r\n            </dt>\r\n            <dd>{{newLesson.lessoncontent}}</dd>\r\n          </dl>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div role=\"tabpanel\" class=\"tab-pane {{IsSegmentation}}\" id=\"segmentation3\">\r\n\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"col-lg-5 well well-lg pull-left\">\r\n          <dl>\r\n            <dt style=\"font-size:28px; margin-bottom:10px;\">{{newLesson.lessontitle}}</dt>\r\n            <dd>{{newLesson.lessoncontent}}</dd>\r\n          </dl>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-lg-6 pull-right\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <p class=\"pull-left\" style=\"font-size:20px\"><span class=\"glyphicon glyphicon-eye-open\" style=\"color:mediumpurple\"></span> Preview </p>\r\n              <p class=\"pull-right\">{{20-screenCount}} screens needed</p>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"row col-lg-12\" *ngFor=\"let i of newLesson.Segments\">\r\n            <br />\r\n            <!--<segment [screenId]=\"i.screenId\" (segmentData)=\"emitscreenContent($event)\"></segment>-->\r\n            <br />\r\n            <br />\r\n          </div>\r\n          <div class=\"row\">\r\n\r\n            <br />\r\n            <button (click)=\"addscreen()\" id=\"addscreenbutton\">Add Screen</button>\r\n            <button (click)=\"removescreen()\" id=\"removescreenbutton\">Remove Screen</button>\r\n          </div>\r\n          <div class=\"row\">\r\n            <br />\r\n            <br />\r\n            <p class=\"pull-left\">Want to automatically segment your free form copy into a screened content?</p>\r\n\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <button type=\"button\" data-target=\"#autoseg\" data-toggle=\"modal\">Yes, Please</button>\r\n            <div id=\"autoseg\" class=\"modal fade\" role=\"dialog\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n\r\n                    <h4 class=\"modal-title\">Auto Segment</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>Segment the content into separate screens every</p>\r\n                    <input type=\"text\" id=\"segnum\" [(ngModel)]=\"SegmentSize\" />\r\n                    <p>characters.</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\">Not Now</button>\r\n                    <button type=\"button\" class=\"btn btn-default\" >Segment</button>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div role=\"tabpanel\" class=\"tab-pane row col-lg-12 {{IsTemplates}}\" id=\"templates4\">\r\n\r\n\r\n      <div class=\"col-lg-4\">\r\n\r\n        <div class=\"col-lg-12\" *ngFor=\"let i of newLesson.Segments;let segmentIndex = index\">\r\n\r\n\r\n          <span class=\"col-lg-1 \">{{segmentIndex+1}}</span>\r\n\r\n\r\n          <p class=\"col-lg-9 well\" [innerText]=\"i.screenId\"\r\n             style=\"overflow-y:scroll;height:100px\" (click)=\"currentSegmentIndex = segmentIndex;\">{{i.screenContent}}</p>\r\n          <br />\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"row\">\r\n            <div data-toggle=\"collapse\" data-target=\"#contenttemplates\">\r\n              <h3>\r\n                Content Templates(2)\r\n              </h3>\r\n            </div>\r\n            <div id=\"contenttemplates\" class=\"collapse col-lg-12\">\r\n\r\n              <div class=\"w3-card-4 w3-padding-16 col-lg-5\" *ngFor=\"let template of templateList\" style=\"margin:5px;\">\r\n                <img src=\"{{template.TemplateImg}}\" (click)=\"setTemplateId(template.TemplateId);\" height=\"100\" width=\"100\">\r\n                <div class=\"w3-container w3-center\">\r\n                  <p style=\"font-size: 15px; color: black; font-weight: bold\">{{template.TemplateName}} </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div data-toggle=\"collapse\" data-target=\"#studenttemplates\">\r\n              <h3>\r\n                Question Templates(4)\r\n              </h3>\r\n            </div>\r\n            <div id=\"studenttemplates\" class=\"collapse col-lg-12\">\r\n\r\n              <div class=\"w3-card-4 w3-padding-16 col-lg-5\" *ngFor=\"let template2 of templateList2\" style=\"margin:5px;\">\r\n                <img src=\"{{template2.TemplateImg}}\" (click)=\"setTemplateId(template2.TemplateId);\" height=\"100\" width=\"100\">\r\n                <div class=\"w3-container w3-center\">\r\n                  <p style=\"font-size: 15px; color:black; font-weight: bold\">{{template2.TemplateName}} </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <button class=\"btn btn-success\" type=\"button\" (click)=\"onLessonSaveClick()\">Save</button>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"pull-left row\">\r\n            <p style=\"font-size:20px;\"> <span class=\"glyphicon glyphicon-eye-open\" style=\"color:mediumpurple\"></span> Preview</p>\r\n            <br />\r\n            <br />\r\n          </div>\r\n      <div class=\"row\">\r\n            <!--<app-template-text-and-images *ngIf=\"newLesson.Segments[this.currentSegmentIndex].selectedTemplateId == 2\"></app-template-text-and-images>\r\n             <app-template-true-and-false *ngIf=\"newLesson.Segments[this.currentSegmentIndex].selectedTemplateId==3\"> </app-template-true-and-false>\r\n            <app-template-multiple-choice *ngIf=\"newLesson.Segments[this.currentSegmentIndex].selectedTemplateId==4\"> </app-template-multiple-choice>\r\n            <app-template-multiple-select *ngIf=\"newLesson.Segments[this.currentSegmentIndex].selectedTemplateId==5\"> </app-template-multiple-select>\r\n            <app-template-fill-in-the-blanks *ngIf=\"newLesson.Segments[this.currentSegmentIndex].selectedTemplateId==6\"> </app-template-fill-in-the-blanks>-->-->\r\n           \r\n           \r\n          </div>\r\n          <div class=\"row\">\r\n            <br />\r\n            <br/>\r\n            <p class=\"pull-left\">\r\n              Make sure you select a template\r\n            </p>\r\n            <br/>\r\n            <button id=\"addquestionbutton\" >Add Question</button> <button id=\"nextscreenbutton\">Next Screen</button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div role=\"tabpanel\" id=\"preview5\" class=\"tab-pane row col-lg-12 {{IsPreview}}\">\r\n\r\n      <div class=\"col-lg-4\">\r\n        <img src=\"{{MobileImage}}\" width=\"500\" height=\"500\">\r\n      </div>\r\n      <div class=\"col-lg-2\">\r\n\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-1\">\r\n            <img src=\"{{ShareImage}}\" width=\"20\" height=\"20\">\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n            <h4>Share</h4>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-1\">\r\n            <img src=\"{{HideImage}}\" width=\"25\" height=\"25\">\r\n          </div>\r\n          <div class=\"col-lg-1\">\r\n            <h4>Hide Comments</h4>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-1\">\r\n            <input type=\"radio\" id=\"f5\" name=\"group40\">\r\n          </div>\r\n          <div class=\"col-lg-1\">\r\n            <h5>Alphonso J</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\">\r\n            <textarea id=\"TextArea2\" rows=\"2\" cols=\"20\" placeholder=\"type your comment here\">\r\n                            </textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\">\r\n            9/20 screens\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\">\r\n            Previous Screen\r\n          </div>\r\n          <div class=\"col-lg-2\">\r\n            Next Screen\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\">\r\n            <h6>Want to jump to a screen?</h6>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lessons/lessons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsComponent; });
/* unused harmony export Template */
/* unused harmony export Lesson */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_common_CustomeServerCallService__ = __webpack_require__("../../../../../src/app/Services/common/CustomeServerCallService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_Common_FormEncode__ = __webpack_require__("../../../../../src/app/Services/Common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_Common_lessons_service__ = __webpack_require__("../../../../../src/app/Services/Common/lessons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RootObjects_application_Configuration__ = __webpack_require__("../../../../../src/app/RootObjects/application.Configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__ = __webpack_require__("../../../../../src/app/services/common/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LessonsComponent = (function () {
    function LessonsComponent(lessonsService, customeServerCallService, notificationService) {
        this.notificationService = notificationService;
        this.applicationConfiguration = new __WEBPACK_IMPORTED_MODULE_4__RootObjects_application_Configuration__["a" /* ApplicationConfiguration */]();
        this.NavImage = '/assets/images/nav.jpg';
        this.NotiImage = '/assets/images/noti.png';
        this.ProfileImage = '/assets/images/user2.jpg';
        this.EyeImage = '/assets/images/eye.png';
        this.DotsImage2 = '/assets/images/dots2.png';
        this.ScrollUpImage = '/assets/images/scrollup.png';
        this.TextOnlyImage = '/assets/images/textonly.png';
        this.TextAndImage = '/assets/images/textimage.png';
        this.DropDownImage = '/assets/images/dropdown.png';
        this.MobileImage = '/assets/images/mobile.jpg';
        this.HideImage = '/assets/images/hide.png';
        this.ShareImage = '/assets/images/share.jpg';
        this.currentId = 0;
        this.screenCount = 0;
        this.currentScreenId = 0;
        this.newLesson = {};
        this.SegmentSize = 0;
        this.currentSegment = {};
        this.currentSegmentIndex = 0;
        this.currentQuestionIndex = 0;
        this.templateList = [];
        this.templateList2 = [];
        this.ScreenList = new Array();
        this.currentCourse = {};
        this.BackToCources = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.IsDescription = 'active';
        this.IsFreeform = '';
        this.IsSegmentation = '';
        this.IsTemplates = '';
        this.IsPreview = '';
        this.lessonsService = lessonsService;
        this.customeServerCallService = customeServerCallService;
    }
    LessonsComponent.prototype.onLessonSaveClick = function () {
        var _this = this;
        var observable = this.lessonsService.saveLessons(this.newLesson, this.customeServerCallService);
        observable.subscribe(function (res) { return _this.successLessonSave(res); }, function (err) { return _this.errorLessonSave(err); });
    };
    LessonsComponent.prototype.successLessonSave = function (res) {
        var resdata = res.json();
        if (resdata.success == '1') {
            alert(resdata.message);
        }
    };
    LessonsComponent.prototype.errorLessonSave = function (res) {
        var resdata = res.json();
        if (resdata) {
            alert(resdata.message);
        }
    };
    LessonsComponent.prototype.ngOnInit = function () {
        this.newLesson.Segments = this.ScreenList;
        // console.log()'Lessons Component');
        $.getScript('../../Scripts/typeHead.js');
        this.fillTemplate();
        this.fillTemplate2();
        this.newLesson.courseId = this.ActiveCourseId;
        this.SegmentSize = this.applicationConfiguration.LessonAutoSegmentSize;
        $(function () {
            $('#nav li a').click(function () {
                $('#nav li').removeClass();
                $($(this).attr('href')).addClass('active');
            });
        });
        $.getScript('http://cloud.tinymce.com/stable/tinymce.min.js?apiKey=mewrstxy1qafkxzgwrof3s2apj0mnccleag1rsj527bs02fd');
    };
    LessonsComponent.prototype.fillTemplate = function () {
        var template = new Template();
        template.TemplateId = 1;
        template.TemplateName = 'Text Only';
        template.TemplateImg = '/assets/images/textonly2.png';
        this.templateList.push(template);
        template = new Template();
        template.TemplateId = 2;
        template.TemplateName = 'Text & Images';
        template.TemplateImg = '/assets/images/textandimages2.png';
        this.templateList.push(template);
    };
    LessonsComponent.prototype.fillTemplate2 = function () {
        var template2 = new Template();
        template2.TemplateId = 3;
        template2.TemplateName = 'True And False';
        template2.TemplateImg = '/assets/images/trueandfalse2.png';
        this.templateList2.push(template2);
        template2 = new Template();
        template2.TemplateId = 4;
        template2.TemplateName = 'Multiple Choice';
        template2.TemplateImg = '/assets/images/multiplechoice2.png';
        this.templateList2.push(template2);
        template2 = new Template();
        template2.TemplateId = 5;
        template2.TemplateName = 'Multiple Select';
        template2.TemplateImg = '/assets/images/multipleselect2.png';
        this.templateList2.push(template2);
        template2 = new Template();
        template2.TemplateId = 6;
        template2.TemplateName = 'Fill In The Blanks';
        template2.TemplateImg = '/assets/images/fillintheblanks2.png';
        this.templateList2.push(template2);
    };
    LessonsComponent.prototype.setTemplateId = function (Id) {
        alert(this.newLesson.Segments[this.currentSegmentIndex].selectedTemplateId);
        this.newLesson.Segments[this.currentSegmentIndex].selectedTemplateId = Id;
        alert(this.newLesson.Segments[this.currentSegmentIndex].selectedTemplateId);
    };
    LessonsComponent.prototype.addscreen = function () {
        try {
            if (this.screenCount >= 0 && this.screenCount < 21) {
                $('#removescreenbutton').attr('disabled', false);
                $('#addscreenbutton').attr('disabled', false);
                this.screenCount++;
                var newscreenModal = {};
                newscreenModal.screenId = this.screenCount;
                newscreenModal.screenContent = '';
                // console.log()this.newLesson.Segments);
                this.newLesson.Segments.push(newscreenModal);
                // console.log()this.newLesson.Segments);
                //$('#addscreenbutton').prop('disabled', 'disabled');
            }
            if (this.screenCount == 20) {
                $('#addscreenbutton').prop('disabled', 'disabled');
            }
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    LessonsComponent.prototype.removescreen = function () {
        try {
            if (this.screenCount > 0 && this.screenCount < 21) {
                $('#removescreenbutton').attr('disabled', false);
                $('#addscreenbutton').attr('disabled', false);
                this.screenCount--;
                this.ScreenList.splice(this.screenCount, 1);
                //newscreenModal.screenId = this.screenCount;
            }
            else if (this.screenCount == 0) {
                $('#removescreenbutton').prop('disabled', 'disabled');
            }
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    LessonsComponent.prototype.backtoCourse = function () {
        this.BackToCources.emit(false);
    };
    LessonsComponent.prototype.prevbutton = function () {
        try {
            var list1 = new Array('IsDescription', 'IsFreeform', 'IsSegmentation', 'IsTemplates', 'IsPreview');
            this.currentId--;
            if (this.currentId <= -1) {
                this.currentId = list1.length - 1;
            }
            this.changeTab(list1[this.currentId].toString());
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    LessonsComponent.prototype.nextbutton = function () {
        var list1 = new Array('IsDescription', 'IsFreeform', 'IsSegmentation', 'IsTemplates', 'IsPreview');
        this.currentId++;
        if (this.currentId == list1.length) {
            this.currentId = 0;
        }
        this.changeTab(list1[this.currentId].toString());
    };
    LessonsComponent.prototype.HideDialog = function () {
        $('#autoseg').modal('hide');
        this.SegmentSize = this.applicationConfiguration.LessonAutoSegmentSize;
        return;
    };
    LessonsComponent.prototype.addsegment = function (segmenttext) {
        try {
            this.screenCount++;
            this.screenCount;
            var newscreenModal = {};
            //newscreenModal.screenId = this.screenCount;
            //newscreenModal.screenContent = segmenttext;
            this.ScreenList.push(newscreenModal);
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    LessonsComponent.prototype.emitscreenContent = function (data) {
        // console.log()this.newLesson.Segments);
        // console.log()data);
        this.newLesson.Segments.filter(function (a) {
            if (a.screenId == data.screenId) {
                a.screenContent = data.screenContent;
            }
        });
    };
    LessonsComponent.prototype.changeTab = function (tabId) {
        if (tabId == 'IsDescription' && this.IsDescription != 'active') {
            this.IsDescription = 'active';
            this.IsFreeform = '';
            this.IsSegmentation = '';
            this.IsTemplates = '';
            this.IsPreview = '';
            this.currentId = 0;
        }
        else if (tabId == 'IsFreeform' && this.IsFreeform != 'active') {
            this.IsDescription = '';
            this.IsFreeform = 'active';
            this.IsSegmentation = '';
            this.IsTemplates = '';
            this.IsPreview = '';
            this.currentId = 1;
        }
        else if (tabId == 'IsSegmentation' && this.IsSegmentation != 'active') {
            this.IsDescription = '';
            this.IsFreeform = '';
            this.IsSegmentation = 'active';
            this.IsTemplates = '';
            this.IsPreview = '';
            this.currentId = 2;
        }
        else if (tabId == 'IsTemplates' && this.IsTemplates != 'active') {
            this.IsDescription = '';
            this.IsFreeform = '';
            this.IsSegmentation = '';
            this.IsTemplates = 'active';
            this.IsPreview = '';
            this.currentId = 3;
        }
        else if (tabId == 'IsPreview' && this.IsPreview != 'active') {
            this.IsDescription = '';
            this.IsFreeform = '';
            this.IsSegmentation = '';
            this.IsTemplates = '';
            this.IsPreview = 'active';
            this.currentId = 4;
        }
    };
    return LessonsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ActiveCourseId'),
    __metadata("design:type", Object)
], LessonsComponent.prototype, "ActiveCourseId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], LessonsComponent.prototype, "BackToCources", void 0);
LessonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-Lesson',
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_Common_FormEncode__["a" /* FormEncode */], __WEBPACK_IMPORTED_MODULE_1__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */], __WEBPACK_IMPORTED_MODULE_3__Services_Common_lessons_service__["a" /* LessonsService */], __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__["a" /* NotificationService */]],
        template: __webpack_require__("../../../../../src/app/lessons/lessons.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Services_Common_lessons_service__["a" /* LessonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_Common_lessons_service__["a" /* LessonsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
], LessonsComponent);

var Template = (function () {
    function Template() {
    }
    return Template;
}());

var Lesson = (function () {
    function Lesson() {
    }
    return Lesson;
}());

var _a, _b, _c, _d;
//# sourceMappingURL=lessons.component.js.map

/***/ }),

/***/ "../../../../../src/app/library/library.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".para1 {\r\n  font-size: 20px;\r\n  color: black;\r\n}\r\n\r\n.div1 {\r\n  background-color: rgba(128, 128, 128, 0.5);\r\n  color: black;\r\n  width: 150px;\r\n  height: 200px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  padding: 40% 0% 40% 0%;\r\n}\r\n\r\n  .div1:hover {\r\n    background-color: rgba(128, 128, 128, 1);\r\n    color: white;\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\r\n  }\r\n\r\n.div2 {\r\n  background: rgba(128, 128, 128, 0.1);\r\n  width: 150px;\r\n  height: 200px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n  .div2:hover {\r\n    background-color: rgba(128, 128, 128, 0.2);\r\n    color: black;\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  \r\n\r\n\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"col-lg-12\" *ngIf=\"ShowCoursesList\">\r\n\r\n  <div class=\"col-lg-12\" *ngFor=\"let item of curriculumList\">\r\n    <h3 class=\"text-left\">{{item.Name}}</h3>\r\n    <div class=\"row\">\r\n      <br />\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-12 \" *ngFor=\"let cou of item.Cources\">\r\n          <div class=\"div1 text-center\" style=\"position:initial;width:100%;margin-top:15px;\" \r\n               [routerLink]=\"['/Course-new', cou.Id]\">{{cou.CourseName}}</div>\r\n        </div>\r\n    \r\n        <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-12 \">\r\n          <a [routerLink]=\"['/Addnewcourse', item.Id]\" class=\"div2 text-center\" style=\"text-decoration:none;\"> <div class=\"div2 text-center\" style=\"width:100%;margin-top:15px;\" ><br /><br />\r\n            \r\n            Add a new course<br /><span class=\"glyphicon glyphicon-plus-sign \"></span></div>\r\n          </a>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    <br />\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<course-Detail ActiveCourseId={{ActiveCourseId}} (BackToCources)=\"changeComponents($event)\" *ngIf=\"ShowCurrentCourse\">\r\n\r\n</course-Detail>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/library/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* unused harmony export Curriculum */
/* unused harmony export Cource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_Common_ActiveUser__ = __webpack_require__("../../../../../src/app/Services/Common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_Common_CustomeServerCallService__ = __webpack_require__("../../../../../src/app/Services/Common/CustomeServerCallService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_Common_course_service__ = __webpack_require__("../../../../../src/app/Services/Common/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_Common_FormEncode__ = __webpack_require__("../../../../../src/app/Services/Common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__ = __webpack_require__("../../../../../src/app/services/common/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../assets/css/file1.ts" />






var LibraryComponent = (function () {
    function LibraryComponent(activeUser, customeServerCallService, courseService, notificationService) {
        this.activeUser = activeUser;
        this.customeServerCallService = customeServerCallService;
        this.courseService = courseService;
        this.notificationService = notificationService;
        this.ShowCoursesList = true;
        this.ShowCurrentCourse = false;
        this.ShowaddCourse = false;
        this.LessonList = [];
        this.DraftList = [];
        this.StatsImage = null;
        this.DollarImage = null;
        this.NotiImage = null;
        this.DotsImage = null;
        this.IsTable7 = '';
        this.IsTable8 = '';
        this.UserId = '';
        this.IsAddCourse = false;
        this.newCourse = {};
        this.FinancePositionNumber = 2;
        this.InsuranceNumber = 1;
        this.UserId = this.activeUser.profile.UserID;
    }
    LibraryComponent.prototype.ngOnInit = function () {
        this.lessonList = [];
        this.StatsImage = this.courseService.getStats();
        this.DollarImage = this.courseService.getDollar();
        this.NotiImage = this.courseService.getNoti();
        this.DotsImage = this.courseService.getDots();
        this.IsTable7 = 'active';
        // console.log()this.IsTable7);
        this.Initialize();
    };
    LibraryComponent.prototype.changeTab = function (tabId) {
        if (tabId == 'IsTable7' && this.IsTable7 != 'active') {
            this.IsTable7 = 'active';
            this.IsTable8 = '';
        }
        else if (tabId == 'IsTable8' && this.IsTable8 != 'active') {
            this.IsTable8 = 'active';
            this.IsTable7 = '';
        }
    };
    LibraryComponent.prototype.credit = function () {
        location.href = '/CreditCard';
        // console.log()'mouseclick called');
    };
    LibraryComponent.prototype.changeComponents = function (data) {
        try {
            if (data == 'ShowCurrentCourse') {
                this.ShowCoursesList = false;
                this.ShowaddCourse = false;
                this.ShowCurrentCourse = true;
            }
            else if (data == 'ShowaddCourse') {
                this.ShowCoursesList = false;
                this.ShowaddCourse = true;
                this.ShowCurrentCourse = false;
            }
            else {
                this.Initialize();
                this.ShowCoursesList = true;
                this.ShowaddCourse = false;
                this.ShowCurrentCourse = false;
            }
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    LibraryComponent.prototype.ChangeShowCoursesList = function (courseId) {
        try {
            this.ActiveCourseId = courseId;
            this.changeComponents('ShowCurrentCourse');
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    LibraryComponent.prototype.addcourse = function (id) {
        try {
            this.ActiveCarriculamId = id;
            this.changeComponents('ShowaddCourse');
            // console.log()'mouseclick called');
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    LibraryComponent.prototype.BackToCarriculam = function () {
        try {
            this.IsAddCourse = false;
            // console.log()'mouseclick called');
        }
        catch (e) {
            this.notificationService.error('There is some error in processing your request !');
        }
    };
    LibraryComponent.prototype.Initialize = function () {
        var _this = this;
        var observable = this.courseService.getAllCariculam(this.UserId, this.customeServerCallService);
        observable.subscribe(function (res) { return _this.successInitialize(res); }, function (err) { return _this.errorInitialize(err); });
    };
    LibraryComponent.prototype.successInitialize = function (responsea) {
        var response = JSON.parse(responsea._body);
        this.curriculumList = response;
        //  this.ShowCoursesList = false;
        //   this.DraftList = response.DraftList;
    };
    LibraryComponent.prototype.errorInitialize = function (error) {
        //alert(error);
    };
    return LibraryComponent;
}());
LibraryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'library-Component',
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_Common_ActiveUser__["a" /* ActiveUser */], __WEBPACK_IMPORTED_MODULE_4__Services_Common_FormEncode__["a" /* FormEncode */], __WEBPACK_IMPORTED_MODULE_3__Services_Common_course_service__["a" /* CarriculamCourseService */], __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_2__Services_Common_CustomeServerCallService__["a" /* CustomeServerCallService */]],
        template: __webpack_require__("../../../../../src/app/library/library.component.html"),
        styles: [__webpack_require__("../../../../../src/app/library/library.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_Common_ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_Common_ActiveUser__["a" /* ActiveUser */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_Common_CustomeServerCallService__["a" /* CustomeServerCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_Common_CustomeServerCallService__["a" /* CustomeServerCallService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_Common_course_service__["a" /* CarriculamCourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_Common_course_service__["a" /* CarriculamCourseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_common_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
], LibraryComponent);

var Curriculum = (function () {
    function Curriculum() {
    }
    return Curriculum;
}());

var Cource = (function () {
    function Cource() {
    }
    return Cource;
}());

var _a, _b, _c, _d;
//# sourceMappingURL=library.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loginHeader {\r\n  font-size: 16px;\r\n}\r\n#mce-FNAME {\r\n  width: 300px;\r\n  height: 40px;\r\n}\r\n#loginPassword {\r\n  width: 300px;\r\n  height: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n<form id=\"loginform\">\r\n\r\n<div >\r\n  <div class=\"modal-dialog\" id=\"LoginModal\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"modal-title\">\r\n          <p id=\"loginHeader\">\r\n            Sign into your Yellowbird Birdhouse\r\n            <br />\r\n            account. Don't have an account, Sign up.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <input type=\"email\" name=\"EmailId\" placeholder=\"Email\" [(ngModel)]=\"currentUser.EmailId\" class=\"required email\" id=\"mce-FNAME\" email>\r\n        <br />\r\n        \r\n        <input type=\"password\" name=\"Password\" placeholder=\"Password\" (keyup.enter)=\"submit()\" [(ngModel)]=\"currentUser.Password\" id=\"loginPassword\">\r\n        <br />\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" (click)=\"closeModalFunction()\"  class=\"button\">Cancel</button>\r\n        <button type=\"button\" (click)=\"submit()\" class=\"button\">Sign in</button>\r\n        <a>Forgot Password?</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppModels_User__ = __webpack_require__("../../../../../src/app/AppModels/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_common_FormEncode__ = __webpack_require__("../../../../../src/app/Services/common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_common_ActiveUser__ = __webpack_require__("../../../../../src/app/Services/common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RootObjects_application_Configuration__ = __webpack_require__("../../../../../src/app/RootObjects/application.Configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_common_CustomeServerCallService__ = __webpack_require__("../../../../../src/app/Services/common/CustomeServerCallService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_profile_profileshared_service__ = __webpack_require__("../../../../../src/app/Services/profile/profileshared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_Common_loading_service__ = __webpack_require__("../../../../../src/app/Services/Common/loading.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = (function () {
    function LoginComponent(customeServerCallService, profilesharedservice, formEncodeService, loadingservice, activeUser, http) {
        this.profilesharedservice = profilesharedservice;
        this.loadingservice = loadingservice;
        this.currentUser = null;
        this.http = null;
        this.formEncodeService = null;
        this.customeServerCallService = null;
        this.message = null;
        this.showotpConfiemationBox = false;
        this.les = false;
        this.stag = false;
        this.closemodal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadingStatusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectcitation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.that = this;
        this.applicationConfiguration = new __WEBPACK_IMPORTED_MODULE_4__RootObjects_application_Configuration__["a" /* ApplicationConfiguration */]();
        this.activeUser = activeUser;
        this.http = http;
        this.customeServerCallService = customeServerCallService;
        this.formEncodeService = formEncodeService;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1__AppModels_User__["a" /* User */]();
        // console.log()'LoginComponent');
    }
    LoginComponent.prototype.externalLogin = function (p) {
        var _this = this;
        var data = {
            provider: p,
            error: ''
        };
        var observable = this.customeServerCallService
            .createGeneralGetRequest(data, 'api/Account/ExternalLogin/');
        observable.subscribe(function (res) { return _this.getLoginProvidersSuccesss(res); }, function (res) { return _this.getLoginProviderserror(res); });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.loadingservice.toggleLoader(true);
        // console.log()'login called');
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (this.currentUser.EmailId == '' && this.currentUser.Password == '')
            alertify.alert('Incubator Says', 'Email Address and Password Is Required');
        else if (this.currentUser.EmailId == '')
            alertify.alert('Incubator Says', ' Email Address Is Required');
        else if (this.currentUser.Password == '')
            alertify.alert('Incubator Says', ' Password Is Required');
        else if (!EMAIL_REGEXP.test(this.currentUser.EmailId))
            alertify.alert('Incubator Says', 'Email Address is not in Correct Format');
        else {
            var observable = this.customeServerCallService.login(this.currentUser.EmailId, this.currentUser.Password);
            observable.subscribe(function (res) { return _this.successLogin(res); }, function (err) { return _this.error(err); });
        }
        this.loadingservice.toggleLoader(false);
        //this.successLoginTest();
        //setTimeout(location.assign(this.applicationConfiguration.APPLICATIONURL),3000);
    };
    LoginComponent.prototype.error = function (err) {
        this.loadingservice.toggleLoader(false);
        alertify.alert('Incubator Says', 'Incorrect Email Address or Password!');
    };
    LoginComponent.prototype.closeModalFunction = function () {
        this.closemodal.emit();
    };
    LoginComponent.prototype.successLogin = function (response1) {
        var _this = this;
        this.loadingservice.toggleLoader(false);
        var response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = response.UserName;
        this.activeUser.profile.UserID = response.UserID;
        this.activeUser.profile.token = response.Token;
        this.activeUser.saveUser();
        this.profilesharedservice.getProfile(this.activeUser.profile.UserID = response.UserID).subscribe(function (a) {
            _this.selected.emit();
            location.assign(_this.applicationConfiguration.APPLICATIONURL);
        });
        //location.assign(this.applicationConfiguration.APPLICATIONURL);
    };
    LoginComponent.prototype.successLoginTest = function () {
        // var response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = 'Test';
        this.activeUser.profile.token = 'TestToken';
        this.activeUser.saveUser();
        this.selected.emit();
    };
    LoginComponent.prototype.showRegisterForm = function () {
        this.selected.emit(true);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.clear = function () {
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1__AppModels_User__["a" /* User */]();
    };
    LoginComponent.prototype.getLoginProvidersSuccesss = function (res) {
        this.loginProviders = JSON.parse(res._body);
    };
    LoginComponent.prototype.getLoginProviderserror = function (error) {
    };
    LoginComponent.prototype.getLoginProviders = function () {
        var _this = this;
        var observable = this.customeServerCallService.createGeneralRequest(null, 'api/Utility/GetLoginProviders');
        observable.subscribe(function (res) { return _this.getLoginProvidersSuccesss(res); }, function (res) { return _this.getLoginProviderserror(res); });
    };
    LoginComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            alert(profile.getId());
            // console.log()'Token || ' + googleUser.getAuthResponse().id_token);
            // console.log()'ID: ' + profile.getId());
            // console.log()'Name: ' + profile.getName());
            // console.log()'Image URL: ' + profile.getImageUrl());
            // console.log()'Email: ' + profile.getEmail());
            //YOUR CODE HERE
            _this.externalLogin(profile.getEmail());
        }, function (error) {
            alert(error);
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    LoginComponent.prototype.showUnregCitationForm = function () {
        this.selectcitation.emit(true);
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('close-Modal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], LoginComponent.prototype, "closemodal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('loadingStatusChange'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], LoginComponent.prototype, "loadingStatusChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('register-In'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], LoginComponent.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('unreg-citation'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], LoginComponent.prototype, "selectcitation", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */], __WEBPACK_IMPORTED_MODULE_2__Services_common_FormEncode__["a" /* FormEncode */], __WEBPACK_IMPORTED_MODULE_3__Services_common_ActiveUser__["a" /* ActiveUser */], __WEBPACK_IMPORTED_MODULE_7__Services_profile_profileshared_service__["a" /* ProfilesharedService */]]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__Services_profile_profileshared_service__["a" /* ProfilesharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__Services_profile_profileshared_service__["a" /* ProfilesharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__Services_common_FormEncode__["a" /* FormEncode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_common_FormEncode__["a" /* FormEncode */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__Services_Common_loading_service__["a" /* LoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__Services_Common_loading_service__["a" /* LoadingService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__Services_common_ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_common_ActiveUser__["a" /* ActiveUser */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _k || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/personal-cabinet/personal-cabinet.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>About</h2>\r\nHello!\r\n<p>\r\n  Yellowbird is a mobile-first app that teaches you everything you want to know about your personal money. Yellowbird's content is structured to be learned in small, bite-sized pieces with multiple, interactive formats. We want to take advantage of those small windows of time during a meal, while commuting,\r\n  walking the dog, etc. to teach you things that can help you understand your finances.\r\n</p>\r\n<p>\r\n\r\n</p>\r\n\r\n\r\n<ul>\r\n  <li *ngFor=\"let link of LinkList\">\r\n    <a [href]=\"link.href\">{{link.name}}</a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/personal-cabinet/personal-cabinet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalCabinetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_usefulllink_service__ = __webpack_require__("../../../../../src/app/Services/usefulllink.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalCabinetComponent = (function () {
    function PersonalCabinetComponent(linkService) {
        this.linkService = linkService;
        this._usefullLinkService = linkService;
    }
    Object.defineProperty(PersonalCabinetComponent.prototype, "LinkList", {
        get: function () { return this._linkList; },
        enumerable: true,
        configurable: true
    });
    PersonalCabinetComponent.prototype.ngOnInit = function () {
        this._linkList = this._usefullLinkService.GetLinks();
    };
    return PersonalCabinetComponent;
}());
PersonalCabinetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'personal-cabinet',
        template: __webpack_require__("../../../../../src/app/personal-cabinet/personal-cabinet.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_usefulllink_service__["a" /* UsefullLinkService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_usefulllink_service__["a" /* UsefullLinkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_usefulllink_service__["a" /* UsefullLinkService */]) === "function" && _a || Object])
], PersonalCabinetComponent);

var _a;
//# sourceMappingURL=personal-cabinet.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustUrl(html);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=safe-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n\r\n<style>\r\n  \r\n</style>\r\n\r\n\r\n\r\n<div class=\"content\">\r\n\r\n\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"col-lg-4 pull-left\" style=\"margin-bottom:40px;\">\r\n      <div class=\"row\" *ngIf=\"editableprofile\" >\r\n        <div style=\"margin-bottom: 5px;\">\r\n          \r\n          <button style=\"background-color: white !important;\" >\r\n            <img id=\"profileimage\" class=\"img img-responsive img-circle\" [src]=\"photoURL()\" style=\"width: 80px; height: 80px; opacity: 0.5\"\r\n                 data-target=\"#imagedialog\" data-toggle=\"modal\" title=\"Change Profile Image\"/>\r\n          </button>\r\n          \r\n        </div>\r\n\r\n        <form id=\"imageform\">\r\n          <div class=\"form-group\">\r\n           \r\n            <div id=\"imagedialog\" class=\"modal fade\" role=\"dialog\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Upload Image</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <div style=\"height:250px\">\r\n                      <img id=\"imgpreview\" [src]=\"\" style='border:none; height: 100%; width: 100%; object-fit: contain' alt=\"No Image Selected\" />\r\n                    </div>\r\n                    <input type=\"file\" id=\"fileInput\" value=\"\" name=\"fileName\" [(ngModel)]=\"fileName\" />\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"submit\" class=\"btn btn-default\" (click)=\"changeProfileImage($event)\">Save</button>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <br />\r\n            <input class=\"form-control\" type=\"textbox\"  placeholder=\"First Name\" name=\"FirstName\" [(ngModel)]=\"profile.FirstName\"/>\r\n            <br/>\r\n            <input type=\"textbox\" class=\"form-control\" placeholder=\"Last Name\" name=\"LastName\" [(ngModel)]=\"profile.LastName\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n\r\n            <textarea class=\"form-control\" id=\"bio\" placeholder=\"A Quick Bio of Yourself\" name=\"bio\" [(ngModel)]=\"profile.Bio\" style=\"resize:none\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" id=\"weblog\" placeholder=\"Web/Blog\" name=\"weblog\" [(ngModel)]=\"profile.WebBlog\">\r\n\r\n          </div>\r\n\r\n          <div>\r\n            <p style=\"font-size: 12px; line-height: 1.33; text-align: left; color: #4a4a4a; margin-left: 45px;\" id=\"emailidlabel\">Email Address</p>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter Email\" name=\"email\" [(ngModel)]=\"profile.EmailId\" />\r\n\r\n          </div>\r\n          <div>\r\n            <p style=\"font-size: 12px; line-height: 1.33; text-align: left; color: #4a4a4a; margin-left: 45px;\"id=\"passwordlabel\">Password</p>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Password\" name=\"password\" [(ngModel)]=\"profile.Password\">\r\n\r\n          </div>\r\n\r\n          <button type=\"button\" class=\"btn btn-success\" id=\"savethisprofile\" (click)=\"saveprofile();\" style=\"margin-top: 20px; margin-left:30px; width: 132px; height: 40px; border-radius: 3px; background-color: #86d190;color:white; font-family:arial; font-size:16px; text-align:center;\">Save Profile</button>\r\n        </form>\r\n\r\n      </div>\r\n      <div class=\"row pull-left\" *ngIf=\"savedprofile\">\r\n        <button style=\"background-color: white !important\" id=\"profileimage2\">\r\n          <img class=\"img-circle img-responsive\" [src]=\"photoURL()\" style=\"height: 80px;width: 80px;\"/>\r\n        </button>\r\n        <br />\r\n        <br />\r\n        <br />\r\n        <div class=\"row\">\r\n          <textarea style=\"font-size: 25px; color: #4a4a4a; font-weight: bold; line-height: 1.13; margin-left: 30px; margin-bottom: 20px; resize:none; overflow:hidden; background:#fff; border:1px solid white;\" class=\"pull-left fullname\" cols=\"20\" rows=\"1\"  placeholder=\"Your full name\" disabled *ngIf=\"(profile.FirstName.length==0 && profile.LastName.length==0) || (profile.FirstName==null && profile.LastName==null)\"></textarea>\r\n          <a style=\"font-size: 25px; color: #4a4a4a; font-weight: bold; line-height: 1.13; margin-bottom: 20px; text-decoration:none; margin-bottom:5px;margin-left:30px;\">{{profile.FirstName}} {{profile.LastName}}</a>\r\n          </div>\r\n          <br/>\r\n          \r\n          <div class=\"row\">\r\n          <textarea style=\"font-size: 16px; color:grey; line-height: 1.5; margin-left: 30px;  margin-bottom: 20px; resize:none; background:#fff; border:1px solid white\" class=\"pull-left\" cols=\"32\" rows=\"3\" placeholder=\"Quick bio of yourself\" disabled >{{profile.Bio}}</textarea>\r\n          </div>\r\n          <div class=\"row\">\r\n          <textarea style=\"color:#884ef9; margin-left: 30px; margin-bottom: 20px; resize:none; background:#fff;font-size:20px; border:1px solid white\" class=\"pull-left\" cols=\"26\" rows=\"1\" placeholder=\"Website/Blog\" disabled *ngIf=\"profile.WebBlog.length==0\"></textarea>\r\n          </div>\r\n          <br />\r\n         \r\n          <div class=\"row\">\r\n          <a style=\"color:#884ef9; margin-left: 30px; margin-bottom: 20px; resize:none; background:#fff;font-size:20px; border:1px solid white;text-decoration:none;\" href=\"http://{{profile.WebBlog}}\" target=\"_blank\" *ngIf=\"profile.WebBlog.length>0\">{{profile.WebBlog}}</a>\r\n          </div>\r\n          <br />\r\n        \r\n          <div class=\"row\">\r\n          <p style=\"font-size: 12px; line-height: 1.33; text-align: left; color: #4a4a4a; margin-left: 45px;\" id=\"emailidlabel2\" >Email Address</p>\r\n          <input type=\"email\" class=\"form-control\" id=\"email1\" placeholder=\"Enter Email\" value= {{profile.EmailId}}  disabled=\"disabled\" style=\"background-color: lightyellow; margin-left: 30px;\" />\r\n          </div>\r\n          <br/>\r\n          <div class=\"row\">\r\n          <p style=\"font-size: 12px; line-height: 1.33; text-align: left; color: #4a4a4a; margin-left: 45px;\" id=\"passwordlabel2\">Password</p>\r\n          <input type=\"password\" class=\"form-control\" id=\"password1\" placeholder=\"Enter Password\" value= {{profile.Password}} disabled=\"disabled\" style=\"background-color: lightyellow; margin-left: 30px;\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n           \r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"editprofile()\" id=\"editthisprofile\" style=\"margin-top: 20px; margin-left:30px; font-size:16px; width: 132px; height: 40px;border-radius: 3px;background-color: #e9e9e9; color: #7d7d7d; text-align: center; font-family:arial;\">Edit Profile</button>\r\n          </div>\r\n       \r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n          <br />\r\n          <br />\r\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n            <li role=\"presentation\" class=\"{{IsTable5}}\">\r\n              <a (click)=\"changeTab('IsTable5')\" aria-controls=\"table5\" role=\"tab\" data-toggle=\"tab\">My Lessons</a>\r\n            </li>\r\n            <li role=\"presentation\" class=\"{{IsTable6}}\">\r\n              <a (click)=\"changeTab('IsTable6')\" aria-controls=\"table6\" role=\"tab\" data-toggle=\"tab\">Drafts</a>\r\n            </li>\r\n            <li role=\"presentation\" class=\"{{IsTable4}}\">\r\n              <a (click)=\"changeTab('IsTable4')\" aria-controls=\"table4\" role=\"tab\" data-toggle=\"tab\">Stats</a>\r\n            </li>\r\n\r\n\r\n\r\n\r\n\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <br />\r\n      <br />\r\n\r\n\r\n      <div class=\"tab-content\" *ngIf=\"havelessons\">\r\n\r\n        <div class=\"tab-pane {{IsTable4}}\">\r\n          <table role=\"tabpanel\" cellpadding=\"5\" cellspacing=\"5\" class=\"table table-bordered\">\r\n            <tr>\r\n              <th colspan=\"10\" width=\"40%\"><p style=\"font-size: 16px; color:#4a4a4a;\">Lesson</p></th>\r\n              <th colspan=\"3\" width=\"20%\"><p style=\"font-size: 16px; color:#4a4a4a;\">Opens</p></th>\r\n              <th colspan=\"3\" width=\"20%\"><p style=\"font-size: 16px; color:#4a4a4a;\">Completed</p></th>\r\n              <th colspan=\"3\" width=\"20%\"><p style=\"font-size: 16px; color:#4a4a4a;\">Ratio</p></th>\r\n              <th colspan=\"3\" width=\"20%\"><p style=\"font-size: 16px; color:#4a4a4a;\">Earned</p></th>\r\n            </tr>\r\n            <tr *ngFor=\"let Stat of StatsList\">\r\n              <td colspan=\"10\" width=\"40%\">\r\n                <p style=\"font-size: 16px; color:#4a4a4a;\">{{Stat.LessonName}}</p>\r\n                <br>\r\n                <p style=\"font-size: 12px;color: #b0b0b0;\">  {{Stat.CourcePublish}} </p>\r\n              </td>\r\n              <td colspan=\"3\" width=\"20%\">\r\n                <p style=\"font-size: 16px; color:#4a4a4a;\">{{Stat.Opens}}</p>\r\n              </td>\r\n              <td colspan=\"3\" width=\"20%\">\r\n                <p style=\"font-size: 16px; color:#4a4a4a;\"> {{Stat.Completed}}</p>\r\n              </td>\r\n              <td colspan=\"3\" width=\"20%\">\r\n                <p style=\"font-size: 16px; color:#4a4a4a;\">{{Stat.Ratio}}%</p>\r\n              </td>\r\n              <td colspan=\"3\" width=\"20%\">\r\n                <p style=\"font-size: 16px; color:#4a4a4a;\">${{Stat.Earned}}</p>\r\n              </td>\r\n            </tr>\r\n\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"tab-pane {{IsTable5}}\" >\r\n          <table role=\"tabpanel\" class=\"table table-bordered\" >\r\n            <tr *ngFor=\"let lesson of LessonList\">\r\n              <td  width=\"50%\">{{lesson.LessonName}}</td>\r\n              <td  width=\"10%\"><i class=\"fa fa-bar-chart\" style=\"color:#884ef9;\" aria-hidden=\"true\"></i></td>\r\n              <td width=\"10%\"><i class=\"fa fa-usd\" style=\"color:#884ef9;\" aria-hidden=\"true\"></i></td>\r\n              <td width=\"10%\">{{profile.FirstName}} {{profile.LastName}}</td>\r\n              <td width=\"10%\">\r\n                <img [src]=\"photoURL() \" class=\"img-circle\" height=\"30\" width=\"30\"/>\r\n                \r\n              </td>\r\n\r\n              <td colspan=\"1\" width=\"10%\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></td>\r\n            </tr>\r\n\r\n          </table>\r\n          <div *ngIf=\"LessonList.length==0\">\r\n            <img src='/assets/images/nolessons.png' style=\"margin-bottom: 60px; width: 153px; height: 138px;\">\r\n             <p style=\"font-size: 32px; color: #4a4a4a; font-weight: bold; line-height: 1.13;\">Nothing to See Here!</p>\r\n             <br/>\r\n             <p>You haven't staged any lesson yet.<br/>\r\n             </p>\r\n             <!-- <br/>\r\n             <p align=\"center\"><button id=\"startlessonbutton\" class=\"btn btn-success\">Start A Lesson</button>\r\n             </p> -->\r\n           </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"tab-pane {{IsTable6}}\">\r\n          <table role=\"tabpanel\" class=\"table table-bordered\">\r\n            <tr *ngFor=\"let Draft of DraftList\">\r\n              <td colspan=\"9\" width=\"50%\">{{Draft.LessonName}}</td>\r\n              <td width=\"10%\"><i class=\"fa fa-bar-chart\" style=\"color:#884ef9;\" aria-hidden=\"true\"></i></td>\r\n              <td width=\"10%\"><i class=\"fa fa-usd\" style=\"color:#884ef9;\" aria-hidden=\"true\"></i></td>\r\n              <td colspan=\"4\" width=\"10%\">{{Draft.AuthorName}}</td>\r\n              <td width=\"10%\"><img [src]=\"photoURL()\" class=\"img-circle\" width=\"30\" height=\"30\" /></td>\r\n              <td width=\"10%\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></td>\r\n            </tr>\r\n          </table>\r\n          <div *ngIf=\"DraftList.length==0\">\r\n            <img src='/assets/images/nolessons.png' style=\"margin-bottom: 60px; width: 153px; height: 138px;\">\r\n             <p style=\"font-size: 32px; color: #4a4a4a; font-weight: bold; line-height: 1.13;\">Nothing to See Here!</p>\r\n             <br/>\r\n             <p>You dont have any lesson in draft.<br/>\r\n             </p>\r\n             <!-- <br/>\r\n             <p align=\"center\"><button id=\"startlessonbutton\" class=\"btn btn-success\">Start A Lesson</button>\r\n             </p> -->\r\n           </div>\r\n        </div>\r\n\r\n      </div>\r\n      \r\n      <div class=\"tab-content\" *ngIf=\"havenolessons\">\r\n       <img src='/assets/images/nolessons.png' style=\"margin-bottom: 60px; width: 153px; height: 138px;\">\r\n        <p style=\"font-size: 32px; color: #4a4a4a; font-weight: bold; line-height: 1.13;\">Nothing to See Here!</p>\r\n        <br/>\r\n        <p>You haven't started any lessons yet.<br/>\r\n          Want to start one?\r\n        </p>\r\n        <br/>\r\n        <p align=\"center\"><button id=\"startlessonbutton\" class=\"btn btn-success\">Start A Lesson</button>\r\n        </p>\r\n      </div>\r\n\r\n      </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_profile_service__ = __webpack_require__("../../../../../src/app/Services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_common_ActiveUser__ = __webpack_require__("../../../../../src/app/Services/common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_common_FormEncode__ = __webpack_require__("../../../../../src/app/Services/common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_shared_service_app_component_service__ = __webpack_require__("../../../../../src/app/Services/shared-service/app-component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_Common_custome_http_service__ = __webpack_require__("../../../../../src/app/Services/Common/custome-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = (function () {
    function ProfileComponent(activeUser, profileService, sanitizer, customeServerCallService, sharedService) {
        this.profileService = profileService;
        this.sanitizer = sanitizer;
        this.customeServerCallService = customeServerCallService;
        this.sharedService = sharedService;
        this.profile = {};
        this.LessonModelList = [];
        this.LessonList = [];
        this.DraftList = [];
        this.StatsList = [];
        this.UserId = '';
        this.editableprofile = false;
        this.savedprofile = true;
        this.havelessons = true;
        this.havenolessons = false;
        this.IsTable4 = '';
        this.IsTable5 = 'active';
        this.IsTable6 = '';
        this.activeUser = activeUser;
        this.customeServerCallService = customeServerCallService;
        this.UserId = this.activeUser.profile.UserID;
        this.message1 = sharedService.message1;
    }
    ProfileComponent.prototype.photoURL = function () {
        return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.profile.ProfileImage);
    };
    ProfileComponent.prototype.Initialize = function () {
        var _this = this;
        this.customeServerCallService.createGeneralGetRequestArgForAttributeRoute(this.UserId, 'api/LessonsNew/GetByUserId')
            .subscribe(function (res) { return _this.InitializeSuccess(res); }, function (err) { return _this.error(err); });
        this.profileService.getProfileByUserId(this.UserId)
            .subscribe(function (res) {
            res = res.json();
            // console.log()res);
            _this.profile = res;
            if (_this.profile.FirstName == null ||
                _this.profile.FirstName == '' ||
                _this.profile.LastName == null ||
                _this.profile.LastName == '' ||
                _this.profile.Bio == null ||
                _this.profile.Bio == '' ||
                _this.profile.WebBlog == null ||
                _this.profile.WebBlog == '' ||
                _this.profile.EmailId == null ||
                _this.profile.EmailId == '' ||
                _this.profile.Password == null ||
                _this.profile.Password == '') {
                _this.editableprofile = false;
                _this.savedprofile = true;
            }
            if (_this.profile.ProfileImage == null || _this.profile.ProfileImage == '') {
                _this.profile.ProfileImage = '/assets/images/nopic.png';
            }
        }, function (err) { return _this.errorGetIncubator(err); });
    };
    ProfileComponent.prototype.InitializeSuccess = function (response1) {
        var response = JSON.parse(response1._body);
        this.LessonList = response.LessonList.filter(function (a) { return !a.InDraft; });
        this.DraftList = response.LessonList.filter(function (a) { return a.InDraft; });
        this.StatsList = response.statistice;
    };
    ProfileComponent.prototype.error = function (err) {
        //alert(JSON.stringify(err));
    };
    ProfileComponent.prototype.SuccessGetIncubator = function (res) {
    };
    ProfileComponent.prototype.errorGetIncubator = function (err) {
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.Initialize();
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        var id = this.UserId;
        $(document).on('change', '#fileInput', function () {
            var input = document.getElementById('fileInput');
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imgpreview').attr('src', e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
        });
        if (this.DraftList) {
            this.havelessons = false;
            this.havenolessons = true;
        }
        else if (this.DraftList) {
            this.havelessons = true;
            this.havenolessons = false;
        }
    };
    ProfileComponent.prototype.editprofile = function () {
        this.editableprofile = true;
        this.savedprofile = false;
    };
    ProfileComponent.prototype.saveprofile = function () {
        var _this = this;
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        var FIRSTNAME_REGEXP = /^[^-\s][a-zA-Z_\s-]*$/g;
        var LASTNAME_REGEXP = /^[^-\s][a-zA-Z-]*$/g;
        var PASSWORD_REGEXP = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$/g;
        if (this.profile.FirstName == null ||
            this.profile.FirstName == '') {
            alertify.alert('Incubator Says', 'First Name Is Required');
            return true;
        }
        else if (this.profile.LastName == null ||
            this.profile.LastName == '') {
            alertify.alert('Incubator Says', 'Last Name Is Required');
            return true;
        }
        else if (this.profile.EmailId == null ||
            this.profile.EmailId == '') {
            alertify.alert('Incubator Says', 'Email Id Is Required');
            return true;
        }
        else if (this.profile.Password == null ||
            this.profile.Password == '') {
            alertify.alert('Incubator Says', 'Password Is Required');
            return true;
        }
        else if (!FIRSTNAME_REGEXP.test(this.profile.FirstName)) {
            alertify.alert('Incubator Says', 'First Name must be alphabetic');
            return true;
        }
        else if (!LASTNAME_REGEXP.test(this.profile.LastName)) {
            alertify.alert('Incubator Says', 'Last Name must be alphabetic');
            return true;
        }
        else if (!EMAIL_REGEXP.test(this.profile.EmailId)) {
            alertify.alert('Incubator Says', 'Email Id is not in correct format');
            return true;
        }
        else if (!PASSWORD_REGEXP.test(this.profile.Password)) {
            alertify.alert('Incubator Says', 'A Password must have 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Numeric Character, 1 Special Character And the length of the Password must be greater than or equal to 8');
            return true;
        }
        var data = {
            Id: this.incubatorId,
            FirstName: this.firstname,
            Bio: this.bio,
            WebBlog: this.weblog,
            EmailId: this.email,
            Password: this.password,
            LastName: this.LastName
        };
        var observable = this.customeServerCallService.createSecuredRequest('api/Incubators/Update/' + this.profile.Id, this.profile);
        observable.subscribe(function (res) { return _this.SaveProfileSuccess(res); }, function (err) { return _this.SaveProfileError(err); });
    };
    ProfileComponent.prototype.SaveProfileSuccess = function (res) {
        this.editableprofile = false;
        this.savedprofile = true;
        alertify.alert('Incubator Says', 'Profile Updated Successfully', function () { window.location.reload(); });
    };
    ProfileComponent.prototype.SaveProfileError = function (err) {
        alertify.alert('Incubator Says', 'Profile Failed To Update');
    };
    ProfileComponent.prototype.changeProfileImage = function (filename) {
        var _this = this;
        var fd = new FormData();
        var id = this.UserId;
        fd.append('pic', $('#fileInput')[0].files[0]);
        this.customeServerCallService
            .createPostRequestforContent(fd, 'api/Incubators/GetImageData')
            .subscribe(function (a) {
            _this.profile.ProfileImage = a.json();
        });
        $('#imagedialog').modal('hide');
    };
    ProfileComponent.prototype.changeTab = function (tabId) {
        if (tabId == 'IsTable4' && this.IsTable4 != 'active') {
            this.IsTable4 = 'active';
            this.IsTable5 = '';
            this.IsTable6 = '';
        }
        else if (tabId == 'IsTable5' && this.IsTable5 != 'active') {
            this.IsTable4 = '';
            this.IsTable5 = 'active';
            this.IsTable6 = '';
        }
        else if (tabId == 'IsTable6' && this.IsTable6 != 'active') {
            this.IsTable4 = '';
            this.IsTable5 = '';
            this.IsTable6 = 'active';
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'profile-Edit',
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_common_ActiveUser__["a" /* ActiveUser */], __WEBPACK_IMPORTED_MODULE_3__Services_common_FormEncode__["a" /* FormEncode */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__Services_shared_service_app_component_service__["a" /* AppComponentService */]],
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_common_ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_common_ActiveUser__["a" /* ActiveUser */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_profile_service__["a" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__Services_Common_custome_http_service__["a" /* CustomeHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Services_Common_custome_http_service__["a" /* CustomeHttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__Services_shared_service_app_component_service__["a" /* AppComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_shared_service_app_component_service__["a" /* AppComponentService */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"full-page register-page\" filter-color=\"black\" data-image=\"../../assets/img/register.jpeg\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10 col-md-offset-1\">\r\n          <div class=\"card card-signup \">\r\n            <h3 class=\"card-title card-header text-center\">Register</h3>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-12\">\r\n                <div class=\"social text-center\">\r\n                  <a routerLink=\"/Login\" class=\"btn btn-xs btn-rose\">\r\n                    Switch To Login\r\n                  </a>\r\n\r\n                </div>\r\n                <form class=\"form\" method=\"\" action=\"\">\r\n                  <div class=\"card-content\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">EmailId Id</label>\r\n                            <input type=\"text\" name=\"UserName\" [(ngModel)]=\"user.Email\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">User Id</label>\r\n                            <input type=\"text\" name=\"UserName\" [(ngModel)]=\"user.UserId\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">First Name</label>\r\n                            <input type=\"text\" name=\"FirstName\" [(ngModel)]=\"user.FirstName\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">LastName</label>\r\n                            <input type=\"text\" name=\"LastName\" [(ngModel)]=\"user.LastName\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">street 1</label>\r\n                            <input type=\"text\" name=\"Address1\" [(ngModel)]=\"user.Address1\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">street 2</label>\r\n                            <input type=\"text\" name=\"Address2\" [(ngModel)]=\"user.Address2\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">City</label>\r\n                            <input type=\"text\" name=\"City\" [(ngModel)]=\"user.City\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">State</label>\r\n                            <input type=\"text\" name=\"State\" [(ngModel)]=\"user.State\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Zip Code</label>\r\n                            <input type=\"text\" name=\"zip\" [(ngModel)]=\"user.zip\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Phone Number</label>\r\n                            <input type=\"text\" name=\"PhoneNumber\" [(ngModel)]=\"user.PhoneNumber\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Password</label>\r\n                            <input type=\"password\" name=\"Password\" [(ngModel)]=\"user.Password\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n\r\n                          </span>\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Confirm Password</label>\r\n                            <input type=\"password\" name=\"Password\" [(ngModel)]=\"user.ConfirmPassword\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"footer text-center\">\r\n                    <a (click)=\"submit()\" class=\"btn btn-rose btn-round\">Get Started</a>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppModels_registerModal__ = __webpack_require__("../../../../../src/app/AppModels/registerModal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_common_FormEncode__ = __webpack_require__("../../../../../src/app/Services/common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_common_ActiveUser__ = __webpack_require__("../../../../../src/app/Services/common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_common_LocalStorage__ = __webpack_require__("../../../../../src/app/Services/common/LocalStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_common_CustomeServerCallService__ = __webpack_require__("../../../../../src/app/Services/common/CustomeServerCallService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(customeServerCallService, formEncodeService, http) {
        this.user = null;
        this.http = null;
        this.formEncodeService = null;
        this.customeServerCallService = null;
        this.message = null;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectcitation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.http = http;
        this.customeServerCallService = customeServerCallService;
        this.formEncodeService = formEncodeService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__AppModels_registerModal__["a" /* RegisterModal */]();
        // console.log()'RegisterComponent');
    }
    RegisterComponent.prototype.submit = function () {
        this.message = this.customeServerCallService.register(this.user);
    };
    RegisterComponent.prototype.showLoginForm = function () {
        showNotificationsuccess('top', 'right', 'we are redirecting You Just a Moment..');
        this.selected.emit(false);
    };
    RegisterComponent.prototype.showUnregCitationForm = function () {
        showNotificationsuccess('top', 'right', 'we are redirecting You Just a Moment..');
        this.selectcitation.emit(true);
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        //$.getScript('../CoreAssets/js/material-dashboard.js');
        //$.getScript('../CoreAssets/js/demo.js');
        //$.getScript('../CoreAssets/js/Homejs.js');
    };
    RegisterComponent.prototype.error = function (err) {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__AppModels_registerModal__["a" /* RegisterModal */]();
        alert(JSON.stringify(err));
    };
    RegisterComponent.prototype.success = function (res) {
    };
    RegisterComponent.prototype.clear = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__AppModels_registerModal__["a" /* RegisterModal */]();
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('register-In'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], RegisterComponent.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('unreg-citation'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], RegisterComponent.prototype, "selectcitation", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_5__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */], __WEBPACK_IMPORTED_MODULE_3__Services_common_ActiveUser__["a" /* ActiveUser */],
            __WEBPACK_IMPORTED_MODULE_2__Services_common_FormEncode__["a" /* FormEncode */],
            __WEBPACK_IMPORTED_MODULE_4__Services_common_LocalStorage__["a" /* LocalStorage */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Services_common_CustomeServerCallService__["a" /* CustomeServerCallService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__Services_common_FormEncode__["a" /* FormEncode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_common_FormEncode__["a" /* FormEncode */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/request-access/request-access.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/request-access/request-access.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n<form id=\"requestform\">\r\n      <div class=\"modal-dialog\" id=\"RequestModal\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"modal-title\">\r\n            <p>\r\n          Send us your name and email to receive \r\n            <br/>\r\n          access to the Yellowbird Incubator System\r\n          </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n            <input type=\"textbox\" style=\"margin-left:20px;\" placeholder=\"Full Name\" id=\"fullname\" class=\"required email\">\r\n            </div>\r\n            <div class=\"row\">\r\n                <input type=\"textbox\" style=\"margin-left:20px;\" placeholder=\"Email\" id=\"email\">\r\n            </div>\r\n            \r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button id=\"cancelbutton\" data-dismiss=\"modal\">Cancel</button>\r\n             <button id=\"submitbutton\" >Submit</button>\r\n            </div>\r\n        </div>\r\n        </div>\r\n      </form>\r\n"

/***/ }),

/***/ "../../../../../src/app/request-access/request-access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestAccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestAccessComponent = (function () {
    function RequestAccessComponent() {
    }
    RequestAccessComponent.prototype.ngOnInit = function () {
    };
    return RequestAccessComponent;
}());
RequestAccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-request-access',
        template: __webpack_require__("../../../../../src/app/request-access/request-access.component.html"),
        styles: [__webpack_require__("../../../../../src/app/request-access/request-access.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RequestAccessComponent);

//# sourceMappingURL=request-access.component.js.map

/***/ }),

/***/ "../../../../../src/app/resolver/cources-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourcesResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_courses_course_service__ = __webpack_require__("../../../../../src/app/Services/courses/course.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourcesResolver = (function () {
    function CourcesResolver(courseService) {
        this.courseService = courseService;
    }
    CourcesResolver.prototype.resolve = function (route, state) {
        return this.courseService.getCourseById(route.params['id']);
    };
    return CourcesResolver;
}());
CourcesResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_courses_course_service__["a" /* CourseServiceNew */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_courses_course_service__["a" /* CourseServiceNew */]) === "function" && _a || Object])
], CourcesResolver);

var _a;
//# sourceMappingURL=cources-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/rootobjects/application.Configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationConfiguration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationConfiguration = (function () {
    function ApplicationConfiguration() {
        this.APPLICATIONURL = '';
        this.WEBAPIURL = '';
        this.LessonAutoSegmentSize = 0;
        this.APPLICATIONURL = 'http://www.yellowbird.tk';
        this.WEBAPIURL = 'https://yellowbirdapi.azurewebsites.net/';
        this.LessonAutoSegmentSize = 500;
    }
    return ApplicationConfiguration;
}());
ApplicationConfiguration = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ApplicationConfiguration);

//# sourceMappingURL=application.Configuration.js.map

/***/ }),

/***/ "../../../../../src/app/services/common/ActiveUser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LocalStorage__ = __webpack_require__("../../../../../src/app/services/common/LocalStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ActiveUser = (function () {
    function ActiveUser() {
        this.USERKEY = 'utoken';
        this.localStorage = new __WEBPACK_IMPORTED_MODULE_0__LocalStorage__["a" /* LocalStorage */]();
        this.profile = this.initialize();
        this.localUser = null;
    }
    ActiveUser.prototype.saveUser = function () {
        // console.log()'saveUserCalled');
        this.localStorage.add(this.USERKEY, this.profile);
    };
    ActiveUser.prototype.saveOTP = function () {
        // console.log()'saveUserCalled');
        this.localStorage.add(this.USERKEY, this.profile);
    };
    ActiveUser.prototype.removeUser = function () {
        localStorage.removeItem(this.USERKEY);
    };
    ActiveUser.prototype.initialize = function () {
        // console.log()'Profile Initialization Called');
        var user = {
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
    };
    return ActiveUser;
}());
ActiveUser = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], ActiveUser);

//# sourceMappingURL=ActiveUser.js.map

/***/ }),

/***/ "../../../../../src/app/services/common/CustomeServerCallService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomeServerCallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ActiveUser__ = __webpack_require__("../../../../../src/app/services/common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormEncode__ = __webpack_require__("../../../../../src/app/services/common/FormEncode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rootobjects_application_Configuration__ = __webpack_require__("../../../../../src/app/rootobjects/application.Configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomeServerCallService = (function () {
    function CustomeServerCallService(formEncodeService, activeUser, http) {
        this.applicationConfiguration = new __WEBPACK_IMPORTED_MODULE_4__rootobjects_application_Configuration__["a" /* ApplicationConfiguration */]();
        this.http = null;
        // console.log()'CustomeServerCallService');
        this.http = http;
        this.activeUser = activeUser;
        this.formEncodeService = formEncodeService;
        // console.log()'CustomeServerCallService');
        //$.getScript('../CoreAssets/js/material-dashboard.js');
        //$.getScript('../CoreAssets/js/demo.js');
        //$.getScript('../CoreAssets/js/Homejs.js');
    }
    CustomeServerCallService.prototype.processToken = function (username) {
        var _this = this;
        // console.log()this.activeUser.profile.token);
        return function (response) {
            _this.activeUser.profile.username = username;
            _this.activeUser.profile.token = response.data.access_token;
            _this.activeUser.saveUser();
            // console.log()this.activeUser.profile.token);
            return username;
        };
    };
    CustomeServerCallService.prototype.createGeneralRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // with async data streams
        if (user == null) {
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        }
        else {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, JSON.stringify(user), options);
        }
    };
    CustomeServerCallService.prototype.createPostRequestforContent = function (obj, apiPath) {
        // with async data streams
        if (obj != null) {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, obj);
        }
    };
    CustomeServerCallService.prototype.createGeneralGetRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = this.formEncodeService.EncodeData(user);
        // with async data streams
        return this.http.
            get(this.applicationConfiguration.WEBAPIURL + apiPath + data, options);
    };
    CustomeServerCallService.prototype.createGeneralGetRequestArg = function (arg, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        Object.getOwnPropertyNames(arg).map(function (key) { return params.set(key, arg[key]); });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params // <-----
        });
        // with async data streams
        // console.log()params);
        return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeServerCallService.prototype.createGeneralGetRequestArgForAttributeRoute = function (arg, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath + '/' + arg);
    };
    CustomeServerCallService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' +
            this.activeUser.profile.token);
        headers.append('Content-Type', 'application/json');
    };
    CustomeServerCallService.prototype.createSecuredRequest = function (apiPath, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.activeUser.profile.token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (data != null)
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, data, { headers: headers });
        else
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, null, { headers: headers });
    };
    CustomeServerCallService.prototype.createSecuredGetRequest = function (apiPath, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (data == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeServerCallService.prototype.createSecuredGetRequestArg = function (apiPath, arg) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        //let options = new RequestOptions({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        Object.getOwnPropertyNames(arg).map(function (key) { return params.set(key, arg[key]); });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params // <-----
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeServerCallService.prototype.login = function (username, password) {
        var data = {
            EmailId: username,
            Password: password
        };
        return this.createGeneralRequest(data, 'api/Account/Login');
        // filter , copy , subscribe
        //return observable.subscribe(res => this.successLogin(res),
        //    err => this.error(err));
    };
    CustomeServerCallService.prototype.register = function (user) {
        var _this = this;
        try {
            var observable = this.createGeneralRequest(user, 'api/Account/Register');
            observable.subscribe(function (res) { return _this.successRegister(res); }, function (res) { return _this.error(res); });
            return 'Welcome';
        }
        catch (e) {
            return e.message;
        }
    };
    CustomeServerCallService.prototype.error = function (err) {
        showNotificationerror('top', 'right', err);
        // console.log()'ErrorCalled');
    };
    CustomeServerCallService.prototype.successLogin = function (response1) {
        showNotificationsuccess('top', 'right', 'we are redirecting You Just a Moment..');
        var response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = response.UserName;
        this.activeUser.profile.token = response.Token;
        this.activeUser.profile.activeParker = response.parker;
        this.activeUser.profile.activeParkerAdd = response.parkerAdd;
        this.activeUser.saveUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL + '/Dashboard');
    };
    CustomeServerCallService.prototype.successRegister = function (response1) {
        var response = JSON.parse(response1._body);
        // console.log()'processTokenCalled');
        this.activeUser.profile.username = response.UserName;
        this.activeUser.profile.token = response.Token;
        this.activeUser.saveUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);
        // console.log()'processTokenended');
    };
    CustomeServerCallService.prototype.logout = function () {
        this.activeUser.profile.username = '';
        this.activeUser.profile.token = '';
        this.activeUser.removeUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);
    };
    return CustomeServerCallService;
}());
CustomeServerCallService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__FormEncode__["a" /* FormEncode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__FormEncode__["a" /* FormEncode */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ActiveUser__["a" /* ActiveUser */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], CustomeServerCallService);

var _a, _b, _c;
//# sourceMappingURL=CustomeServerCallService.js.map

/***/ }),

/***/ "../../../../../src/app/services/common/FormEncode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormEncode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormEncode = (function () {
    function FormEncode() {
        console.log('FormEncode');
    }
    FormEncode.prototype.EncodeData = function (data) {
        var pairs = [];
        for (var name in data) {
            if (data.hasOwnProperty(name)) {
                pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
        }
        return pairs.join('&').replace(/%20/g, '+');
    };
    return FormEncode;
}());
FormEncode = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], FormEncode);

//# sourceMappingURL=FormEncode.js.map

/***/ }),

/***/ "../../../../../src/app/services/common/LocalStorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorage = (function () {
    function LocalStorage() {
        this.store = localStorage;
        // console.log()'LocalStorage');
    }
    LocalStorage.prototype.toJson = function (obj, pretty) {
        if (typeof obj === 'undefined')
            return undefined;
        return JSON.stringify(obj, this.toJsonReplacer, pretty);
    };
    LocalStorage.prototype.isWindow = function (obj) {
        return obj && obj.window === obj;
    };
    LocalStorage.prototype.toJsonReplacer = function (key, value) {
        var val = value;
        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
            val = undefined;
        }
        else if (value && value.window === value) {
            val = '$WINDOW';
        }
        else if (value && document === value) {
            val = '$DOCUMENT';
        }
        return val;
    };
    LocalStorage.prototype.add = function (key, value) {
        value = (this.toJson(value, ''));
        this.store.setItem(key, value);
    };
    LocalStorage.prototype.isString = function (value) {
        return typeof value === 'string';
    };
    LocalStorage.prototype.fromJson = function (json) {
        return this.isString(json)
            ? JSON.parse(json)
            : json;
    };
    LocalStorage.prototype.get = function (key) {
        var value = this.store.getItem(key);
        if (value) {
            value = this.fromJson(value);
        }
        return value;
    };
    LocalStorage.prototype.remove = function (key) {
        this.store.removeItem(key);
    };
    return LocalStorage;
}());
LocalStorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalStorage);

//# sourceMappingURL=LocalStorage.js.map

/***/ }),

/***/ "../../../../../src/app/services/common/course.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarriculamCourseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custome_http_service__ = __webpack_require__("../../../../../src/app/services/common/custome-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../appmodels/CourseComponent.Model/CourseSingleModel.ts" />


var CarriculamCourseService = (function () {
    function CarriculamCourseService(customeHttpService) {
        this.customeHttpService = customeHttpService;
        //private customeServerCallService: CustomeServerCallService = null;
        //constructor(customeServerCallService: CustomeServerCallService) {
        //    this.customeServerCallService = customeServerCallService;
        //}
        this.activeLessonList = [];
    }
    CarriculamCourseService.prototype.getStats = function () {
        return '/assets/images/statistics.png';
    };
    CarriculamCourseService.prototype.getDollar = function () {
        return '/assets/images/dollar.png';
    };
    CarriculamCourseService.prototype.getNoti = function () {
        return '/assets/images/noti.png';
    };
    CarriculamCourseService.prototype.getDots = function () {
        return 'assets/images/dots.png';
    };
    CarriculamCourseService.prototype.getactiveLessonList = function (userId, customeServerCallService) {
        return customeServerCallService.createGeneralGetRequestArgForAttributeRoute(userId, 'api/Lessons/GetByUserId');
    };
    CarriculamCourseService.prototype.getAllCariculam = function (userId, customeServerCallService) {
        return customeServerCallService.createGeneralGetRequestArgForAttributeRoute(userId, 'api/Cariculams/GetAllcarriculamByUserId');
    };
    CarriculamCourseService.prototype.getCourseById = function (courseId) {
        return this.customeHttpService.createGeneralGetRequestArgForAttributeRoute(courseId, 'api/Courses/GetCourseById');
    };
    CarriculamCourseService.prototype.saveCourse = function (obj, customeServerCallService) {
        return customeServerCallService.createGeneralRequest(obj, 'api/Courses');
    };
    CarriculamCourseService.prototype.updateCourse = function (obj, customeServerCallService) {
        return customeServerCallService.createGeneralRequest(obj, 'api/Courses/update');
    };
    return CarriculamCourseService;
}());
CarriculamCourseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custome_http_service__["a" /* CustomeHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custome_http_service__["a" /* CustomeHttpService */]) === "function" && _a || Object])
], CarriculamCourseService);

var _a;
//# sourceMappingURL=course.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/common/custome-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomeHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActiveUser__ = __webpack_require__("../../../../../src/app/services/common/ActiveUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rootobjects_application_Configuration__ = __webpack_require__("../../../../../src/app/rootobjects/application.Configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomeHttpService = (function () {
    function CustomeHttpService(activeUser, http) {
        this.activeUser = activeUser;
        this.http = http;
        this.applicationConfiguration = new __WEBPACK_IMPORTED_MODULE_3__rootobjects_application_Configuration__["a" /* ApplicationConfiguration */]();
    }
    CustomeHttpService.prototype.createGeneralRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // with async data streams
        if (user == null) {
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        }
        else {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, JSON.stringify(user), options);
        }
    };
    CustomeHttpService.prototype.createGeneralPutRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // with async data streams
        if (user == null) {
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        }
        else {
            return this.http.
                put(this.applicationConfiguration.WEBAPIURL + apiPath, JSON.stringify(user), options);
        }
    };
    CustomeHttpService.prototype.createPostRequestforContent = function (obj, apiPath) {
        // console.log()"request" + JSON.stringify(obj));
        // with async data streams
        if (obj != null) {
            return this.http.
                post(this.applicationConfiguration.WEBAPIURL + apiPath, obj);
        }
    };
    CustomeHttpService.prototype.createGeneralGetRequest = function (user, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //  const data = this.formEncodeService.EncodeData(user);
        // with async data streams
        return this.http.
            get(this.applicationConfiguration.WEBAPIURL + apiPath + user, options);
    };
    CustomeHttpService.prototype.createGeneralGetRequestArg = function (arg, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        Object.getOwnPropertyNames(arg).map(function (key) { return params.set(key, arg[key]); });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params // <-----
        });
        // with async data streams
        // console.log()params);
        return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeHttpService.prototype.createGeneralGetRequestArgForAttributeRoute = function (arg, apiPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath + '/' + arg);
    };
    CustomeHttpService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' +
            this.activeUser.profile.token);
        headers.append('Content-Type', 'application/json');
    };
    CustomeHttpService.prototype.createSecuredRequest = function (apiPath, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.activeUser.profile.token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (data != null)
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, data, { headers: headers });
        else
            return this.http.post(this.applicationConfiguration.WEBAPIURL + apiPath, null, { headers: headers });
    };
    CustomeHttpService.prototype.createSecuredGetRequest = function (apiPath, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (data == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeHttpService.prototype.createSecuredGetRequestArg = function (apiPath, arg) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        //let options = new RequestOptions({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        Object.getOwnPropertyNames(arg).map(function (key) { return params.set(key, arg[key]); });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: params // <-----
        });
        if (arg == null)
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
        else
            return this.http.get(this.applicationConfiguration.WEBAPIURL + apiPath, options);
    };
    CustomeHttpService.prototype.login = function (username, password) {
        var data = {
            UserName: username,
            Password: password
        };
        return this.createGeneralRequest(data, 'api/Account/Login');
    };
    CustomeHttpService.prototype.logout = function () {
        this.activeUser.profile.username = '';
        this.activeUser.profile.token = '';
        this.activeUser.removeUser();
        location.assign(this.applicationConfiguration.APPLICATIONURL);
    };
    return CustomeHttpService;
}());
CustomeHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ActiveUser__["a" /* ActiveUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ActiveUser__["a" /* ActiveUser */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], CustomeHttpService);

var _a, _b;
//# sourceMappingURL=custome-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/common/localStorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorage = (function () {
    function LocalStorage() {
        this.store = localStorage;
        // console.log()'LocalStorage');
    }
    LocalStorage.prototype.toJson = function (obj, pretty) {
        if (typeof obj === 'undefined')
            return undefined;
        return JSON.stringify(obj, this.toJsonReplacer, pretty);
    };
    LocalStorage.prototype.isWindow = function (obj) {
        return obj && obj.window === obj;
    };
    LocalStorage.prototype.toJsonReplacer = function (key, value) {
        var val = value;
        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
            val = undefined;
        }
        else if (value && value.window === value) {
            val = '$WINDOW';
        }
        else if (value && document === value) {
            val = '$DOCUMENT';
        }
        return val;
    };
    LocalStorage.prototype.add = function (key, value) {
        value = (this.toJson(value, ''));
        this.store.setItem(key, value);
    };
    LocalStorage.prototype.isString = function (value) {
        return typeof value === 'string';
    };
    LocalStorage.prototype.fromJson = function (json) {
        return this.isString(json)
            ? JSON.parse(json)
            : json;
    };
    LocalStorage.prototype.get = function (key) {
        var value = this.store.getItem(key);
        if (value) {
            value = this.fromJson(value);
        }
        return value;
    };
    LocalStorage.prototype.remove = function (key) {
        this.store.removeItem(key);
    };
    return LocalStorage;
}());
LocalStorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalStorage);

//# sourceMappingURL=localStorage.js.map

/***/ }),

/***/ "../../../../../src/app/services/common/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.success = function (message) {
        alert(message);
    };
    NotificationService.prototype.error = function (message) {
        alert(message);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  margin-top: -20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<style>\r\n    .para1{\r\n        font-size:25px;\r\n    }\r\n    </style>\r\n\r\n\r\n<ul>\r\n    <li><a routerLink=\"/Dashboard\"><p class=\"para1\">Dashboard</p><br /></a></li>\r\n    <li><a routerLink=\"/Profile1\"><p class=\"para1\">Profile</p><br /></a></li>\r\n    <li><a routerLink=\"/FinanceTravelers\"><p class=\"para1\">Description</p><br /></a></li>\r\n    <li><a routerLink=\"/Library\"><p class=\"para1\">Library</p><br /></a></li>\r\n    <li><a routerLink=\"/PersonalCabinet\"><p class=\"para1\">Personal Cabinet</p><br /></a></li>\r\n    <li><a routerLink=\"/Fellow\"><p class=\"para1\">FellowShip</p><br /></a></li>\r\n    <li><a routerLink=\"/Register\"><p class=\"para1\">Register</p><br /></a></li>\r\n    <li><a routerLink=\"/Service\"><p class=\"para1\">Service</p></a></li>\r\n</ul>\r\n-->\r\n\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/Dashboard\">Dashboard</a>\r\n      <a  class=\"navbar-brand\" routerLink=\"/Profile1\">Profile</a>\r\n      <a class=\"navbar-brand\" routerLink=\"/Library\">Library</a>\r\n      <a class=\"navbar-brand\" routerLink=\"/PersonalCabinet\">Personal Cabinet</a>\r\n      <a class=\"navbar-brand\" routerLink=\"/Fellow\">Fellowship</a>\r\n      <!-- <a class=\"navbar-brand\" routerLink=\"/Register\">Register</a> -->\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    \r\n      \r\n\r\n        \r\n\r\n      \r\n        \r\n        \r\n        \r\n        <!--<li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\">Action</a></li>\r\n                <li><a href=\"#\">Another action</a></li>\r\n                <li><a href=\"#\">Something else here</a></li>\r\n                <li role=\"separator\" class=\"divider\"></li>\r\n                <li><a href=\"#\">Separated link</a></li>\r\n                <li role=\"separator\" class=\"divider\"></li>\r\n                <li><a href=\"#\">One more separated link</a></li>\r\n            </ul>\r\n        </li>-->\r\n      \r\n\r\n\r\n\r\n    <!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <!--<div class=\"modal-dialog\">-->\r\n  <!--<div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <div class=\"modal-title\">\r\n                  <p>\r\n                      Send us your name and email to receive\r\n                      <br />\r\n                      access to the Yellowbird Incubator system.\r\n                  </p>\r\n              </div>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <input type=\"text\" placeholder=\"Email\" id=\"email1\">\r\n              <br />\r\n              <input type=\"password\" placeholder=\"Password\" id=\"pass1\">\r\n              <br />\r\n\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button (click)=\"submit()\">Sign In</button> Forgot Password?\r\n\r\n          </div>\r\n      </div>\r\n  </div>-->\r\n  <!--<app-login *ngIf=\"!isLogged\" (register-In)=\"changeLogin()\"></app-login>-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-bar',
        template: __webpack_require__("../../../../../src/app/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/side-bar/side-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SideBarComponent);

//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map