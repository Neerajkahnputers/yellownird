import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomeServerCallService } from '../Services/common/CustomeServerCallService';
import { FormEncode } from '../Services/Common/FormEncode';
import { LessonsService } from '../Services/Common/lessons.service';
import { ApplicationConfiguration } from '../RootObjects/application.Configuration';
import { NotificationService } from '../services/common/notification.service';
declare var tinymce: any;
declare var $: any;
declare var args: any;
@Component
  ({
    selector: 'add-Lesson',
    providers: [FormEncode, CustomeServerCallService, LessonsService, NotificationService],
    templateUrl: './lessons.component.html'
  })
export class LessonsComponent {


  private applicationConfiguration: ApplicationConfiguration = new ApplicationConfiguration();

  private lessonsService: LessonsService;
  private customeServerCallService: CustomeServerCallService;
  public NavImage = '/assets/images/nav.jpg';
  public NotiImage = '/assets/images/noti.png';
  public ProfileImage = '/assets/images/user2.jpg';
  public EyeImage = '/assets/images/eye.png';
  public DotsImage2 = '/assets/images/dots2.png';
  public ScrollUpImage = '/assets/images/scrollup.png';
  public TextOnlyImage = '/assets/images/textonly.png';
  public TextAndImage = '/assets/images/textimage.png';
  public DropDownImage = '/assets/images/dropdown.png';
  public MobileImage = '/assets/images/mobile.jpg';
  public HideImage = '/assets/images/hide.png';
  public ShareImage = '/assets/images/share.jpg';
  public currentId = 0;
  public screenCount = 0;
  public currentScreenId = 0;

  public newLesson: any = {};

  public currentTemplate: any;
  public screenContent: any;
  public SegmentSize = 0;

  public currentSegment: any = {};
  public currentSegmentIndex = 0;
  public currentQuestionIndex = 0;
  public templateList: any[] = [];
  public templateList2: any[] = [];

  constructor(lessonsService: LessonsService, customeServerCallService: CustomeServerCallService, private notificationService: NotificationService) {
    this.lessonsService = lessonsService;
    this.customeServerCallService = customeServerCallService;


  }

  onLessonSaveClick() {
    const observable = this.lessonsService.saveLessons(this.newLesson, this.customeServerCallService);
    observable.subscribe(res => this.successLessonSave(res),
      err => this.errorLessonSave(err));

  }
  successLessonSave(res) {
    const resdata = res.json();
    if (resdata.success == '1')
    { alert(resdata.message); }
  }
  errorLessonSave(res) {
    const resdata = res.json();
    if (resdata)
    { alert(resdata.message); }
  }

  ngOnInit(): void {
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
  }




  fillTemplate() {

    let template = new Template();
    template.TemplateId = 1;
    template.TemplateName = 'Text Only';

    template.TemplateImg = '/assets/images/textonly2.png';
    this.templateList.push(template);


    template = new Template();
    template.TemplateId = 2;
    template.TemplateName = 'Text & Images';
    template.TemplateImg = '/assets/images/textandimages2.png';
    this.templateList.push(template);
  }


  fillTemplate2() {

    let template2 = new Template();
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
  }


  setTemplateId(Id) {
    alert(this.newLesson.Segments[this.currentSegmentIndex].selectedTemplateId);
    this.newLesson.Segments[this.currentSegmentIndex].selectedTemplateId = Id;
    alert(this.newLesson.Segments[this.currentSegmentIndex].selectedTemplateId);
  }
  addscreen() {
    try {
      if (this.screenCount >= 0 && this.screenCount < 21) {
        $('#removescreenbutton').attr('disabled', false);
        $('#addscreenbutton').attr('disabled', false);
        this.screenCount++;
        const newscreenModal: any = {};
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

  }

  removescreen() {
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

  }


  private ScreenList: Array<any> = new Array<any>();

  @Input('ActiveCourseId') ActiveCourseId: any;
  public currentCourse: any = {};

  @Output() BackToCources: EventEmitter<any> = new EventEmitter<any>();

  public IsDescription = 'active';
  public IsFreeform = '';
  public IsSegmentation = '';
  public IsTemplates = '';
  public IsPreview = '';

  backtoCourse() {
    this.BackToCources.emit(false);
  }


  prevbutton() {
    try {
      const list1 = new Array('IsDescription', 'IsFreeform', 'IsSegmentation', 'IsTemplates', 'IsPreview');
      this.currentId--;
      if (this.currentId <= -1) { this.currentId = list1.length - 1; }
      this.changeTab(list1[this.currentId].toString());
    }
    catch (e) {
      this.notificationService.error('There is some error in processing your request !');
    }
  }

  nextbutton() {
    const list1 = new Array('IsDescription', 'IsFreeform', 'IsSegmentation', 'IsTemplates', 'IsPreview');
    this.currentId++;
    if (this.currentId == list1.length) { this.currentId = 0; }
    this.changeTab(list1[this.currentId].toString());

  }

  private HideDialog() {
    $('#autoseg').modal('hide');
    this.SegmentSize = this.applicationConfiguration.LessonAutoSegmentSize;
    return;
  }
  private addsegment(segmenttext) {
    try {
      this.screenCount++;
      this.screenCount;
      const newscreenModal = {};
      //newscreenModal.screenId = this.screenCount;
      //newscreenModal.screenContent = segmenttext;
      this.ScreenList.push(newscreenModal);
    }
    catch (e) {
      this.notificationService.error('There is some error in processing your request !');
    }


  }



  emitscreenContent(data) {
    // console.log()this.newLesson.Segments);
    // console.log()data);
    this.newLesson.Segments.filter(a => {
      if (a.screenId == data.screenId) {
        a.screenContent = data.screenContent;
      }
    });

  }
  changeTab(tabId) {
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

  }
}



export class Template {
  TemplateId: number;
  TemplateName: string;
  TemplateImg: string;
}

export class Lesson {
  lessonId: number;
  lessonTitle: string;
  lessonContent: string;
  courseId: number;
  segments: any[];

}

