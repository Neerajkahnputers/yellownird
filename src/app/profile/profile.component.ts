import { Component, OnInit, OnChanges } from '@angular/core';
import { LessonModel } from '../AppModels/ProfileComponent.Model/LessonModel';
import { Table4Model } from '../AppModels/CreditCardComponent.Model/SingleModel';
import { ProfileService } from '../Services/profile.service';
import { ActiveUser } from '../Services/common/ActiveUser';
import { CustomeServerCallService } from '../Services/common/CustomeServerCallService';
import { FormEncode } from '../Services/common/FormEncode';
import { AppComponentService } from '../Services/shared-service/app-component.service';
import { CustomeHttpService } from '../Services/Common/custome-http.service';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;
declare var alertify: any;
@Component
  ({
    selector: 'profile-Edit',
    providers: [ActiveUser, FormEncode, Http,
      AppComponentService],
    templateUrl: './profile.component.html'
  })
export class ProfileComponent implements OnInit {
  public profile: any = {};
  public ProfileImage;
  public LessonModelList: any[] = [];
  private activeUser: ActiveUser;
  public LessonList: any[] = [];
  public DraftList: any[] = [];
  public StatsList: any[] = [];
  private UserId: any = '';
  private incubatorId: number;
  private firstname: string;
  private bio: string;
  private weblog: string;
  private email: string;
  private password: string;
  private LastName: string;
  public editableprofile = false;
  public savedprofile = true;
  public fileName: any;
  public changeImage;
  public havelessons = true;
  public havenolessons = false;
  public message1;
 
  constructor(activeUser: ActiveUser, private profileService: ProfileService,
    private sanitizer: DomSanitizer,
    private customeServerCallService: CustomeHttpService, private sharedService: AppComponentService) {
    this.activeUser = activeUser;
    this.customeServerCallService = customeServerCallService;
    this.UserId = this.activeUser.profile.UserID;
    this.message1 = sharedService.message1;
  }

  photoURL() {
    return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.profile.ProfileImage);
  }
  Initialize() {
    this.customeServerCallService.createGeneralGetRequestArgForAttributeRoute(this.UserId, 'api/LessonsNew/GetByUserId')
      .subscribe(res => this.InitializeSuccess(res),
      err => this.error(err));
    this.profileService.getProfileByUserId(this.UserId)
      .subscribe(res => {

        res = res.json();
        // console.log()res);
        this.profile = res;
       if (this.profile.FirstName == null ||
           this.profile.FirstName == '' ||
         this.profile.LastName == null ||
         this.profile.LastName == '' ||
          this.profile.Bio == null ||
          this.profile.Bio == '' ||
           this.profile.WebBlog == null ||
          this.profile.WebBlog == '' ||
          this.profile.EmailId == null ||
           this.profile.EmailId == '' ||
          this.profile.Password == null ||
         this.profile.Password == ''
         ) {
          this.editableprofile = false;
          this.savedprofile = true;
       }

        if (this.profile.ProfileImage == null || this.profile.ProfileImage == '') {
          this.profile.ProfileImage = '/assets/images/nopic.png';
        }
      },
      err => this.errorGetIncubator(err));

  }
  InitializeSuccess(response1) {
    const response = JSON.parse(response1._body);
    this.LessonList = response.LessonList.filter(a => !a.InDraft);
    this.DraftList = response.LessonList.filter(a => a.InDraft);
    this.StatsList = response.statistice;
  }
  error(err) {
    //alert(JSON.stringify(err));
  }

  SuccessGetIncubator(res) {
  }
  errorGetIncubator(err) {
  }
  ngOnInit(): void {
    this.Initialize();
  
  }
  ngAfterViewInit() {
    const id = this.UserId;
    $(document).on('change', '#fileInput', function () {
      const input: any = document.getElementById('fileInput');
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e: any) {
          $('#imgpreview').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
      }
    });
      if (this.DraftList) {
      this.havelessons = false;
       this.havenolessons = true;
      } else if (this.DraftList) {
       this.havelessons = true;
       this.havenolessons = false;
       }
      

  }

  public IsTable4 = '';
  public IsTable5 = 'active';
  public IsTable6 = '';
  editprofile() {
    this.editableprofile = true;
    this.savedprofile = false;
  }
  saveprofile() {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    const FIRSTNAME_REGEXP = /^[^-\s][a-zA-Z_\s-]*$/g;
    const LASTNAME_REGEXP = /^[^-\s][a-zA-Z-]*$/g;
    const PASSWORD_REGEXP = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$/g;
    if (this.profile.FirstName == null ||
      this.profile.FirstName == ''
    )
    {
      alertify.alert('Incubator Says', 'First Name Is Required');
      return true;
    }
    else if (this.profile.LastName == null ||
      this.profile.LastName == ''
    )
    {
      alertify.alert('Incubator Says', 'Last Name Is Required');
      return true;
    }
    else if (this.profile.EmailId == null ||
      this.profile.EmailId == ''
    )
    {
      alertify.alert('Incubator Says', 'Email Id Is Required');
      return true;
    }
    else if (this.profile.Password == null ||
      this.profile.Password == ''
    )
    {
      alertify.alert('Incubator Says', 'Password Is Required');
      return true;
    }
    else if (!FIRSTNAME_REGEXP.test(this.profile.FirstName))
    {
      alertify.alert('Incubator Says', 'First Name must be alphabetic');
      return true;
    }
    else if (!LASTNAME_REGEXP.test(this.profile.LastName))
    {
      alertify.alert('Incubator Says', 'Last Name must be alphabetic');
      return true;
    }
    else if (!EMAIL_REGEXP.test(this.profile.EmailId))
    {
      alertify.alert('Incubator Says', 'Email Id is not in correct format');
      return true;
    }
    else if (!PASSWORD_REGEXP.test(this.profile.Password))
    {
      alertify.alert('Incubator Says', 'A Password must have 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Numeric Character, 1 Special Character And the length of the Password must be greater than or equal to 8');
      return true;
    }

    const data = {
      Id: this.incubatorId,
      FirstName: this.firstname,
      Bio: this.bio,
      WebBlog: this.weblog,
      EmailId: this.email,
      Password: this.password,
      LastName: this.LastName
    };
    const observable = this.customeServerCallService.createSecuredRequest('api/Incubators/Update/' + this.profile.Id, this.profile);
    observable.subscribe(res => this.SaveProfileSuccess(res), err => this.SaveProfileError(err));


  }
  SaveProfileSuccess(res: any) {
      this.editableprofile = false;
      this.savedprofile = true;
      alertify.alert('Incubator Says', 'Profile Updated Successfully', function(){ window.location.reload(); });
  }
  SaveProfileError(err: any) {
    alertify.alert('Incubator Says', 'Profile Failed To Update');
  }
  changeProfileImage(filename) {
    const fd = new FormData();
    const id = this.UserId;
    fd.append('pic', $('#fileInput')[0].files[0]);
    this.customeServerCallService
      .createPostRequestforContent(fd, 'api/Incubators/GetImageData')
      .subscribe(a => {
        this.profile.ProfileImage = a.json();
      });
    $('#imagedialog').modal('hide');
  }
  changeTab(tabId) {
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
  }
}

