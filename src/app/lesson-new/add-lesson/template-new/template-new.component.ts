import { Component, OnInit, DoCheck, OnChanges, AfterViewInit, Input } from '@angular/core';
import { LessonSharedService } from '../../../Services/lesson/lesson-shared.service';
import { TemplateService } from '../../../Services/lesson/template/template.service';
import {ExtraQuestionInfoComponent} from './extra-question-info/extra-question-info.component';
import { debug } from 'util';
import { forEach } from '@angular/router/src/utils/collection';
declare var $: any;
declare var alertify: any;
@Component({
  selector: 'app-template-new',
  templateUrl: './template-new.component.html',
  styleUrls: ['./template-new.component.scss']
})
export class TemplateNewComponent implements OnInit, DoCheck {
  public ScreenContent;
  public templateList1: any[] = [];
  public templateList2: any[] = [];
  IsSegmentSelected = false;
  private selectedTemplate: any= {};
  private true_false_selection: boolean;
  private multiple_choice_selection: any;
  private multiple_select_selection1: any;
  private multiple_select_selection2: any;
  private multiple_select_selection3: any;
  private multiple_select_selection4: any;
  private multiple_select_selection5: any;
  private mcOptions = {
    McOption1: '',
    McOption2: '',
    McOption3: '',
    McOption4: '',
  };
  private McOpt1= false;
 private McOpt2= false;
 private McOpt3= false;
 private McOpt4= false;
private MsOpt1= false;
private MsOpt2= false;
private MsOpt3= false;
private MsOpt4= false;
private MsOpt5= false;
 private addoptbutton= false;
 
 private mc4= false;
 private nosuggestedanswer: any= ' ';
  currentSegmentIndex= 0;
  image: any;
  currentSegment: any = {};
  message: string;
  constructor(private lessonSharedService: LessonSharedService,
    private templateService: TemplateService) { }
  public lesson: any = {};
  public mcoption1right:boolean=false;
  public mcoption1radiobutton: boolean =true;
  public mcoption2right:boolean=false;
  public mcoption2radiobutton: boolean =true;
  public mcoption3right:boolean=false;
  public mcoption3radiobutton: boolean =true;
  public mcoption4right:boolean=false;
  public mcoption4radiobutton: boolean =true;
  public msoption1right:boolean = false;
  public msoption1checkbox:boolean = true;
  public msoption2right:boolean = false;
  public msoption2checkbox:boolean = true;
  public msoption3right:boolean = false;
  public msoption3checkbox:boolean = true;
  public msoption4right:boolean = false;
  public msoption4checkbox:boolean = true;
  public msoption5right:boolean = false;
  public msoption5checkbox:boolean = true;
 
  ngOnInit() {
    this.templateService.GetAllTemplates().subscribe(a => {
      this.templateList1 = a.json().filter(a => a.TemplateTypeId == 1);
      this.templateList2 = a.json().filter(a => a.TemplateTypeId == 2);
    });
    this.lessonSharedService.lesson$.subscribe(
      a => {
        this.lesson = a;
      });
      $(document).ready(function (
      ) {
        let trigger = $('.hamburger'),
            overlay = $('.overlay'),
           isClosed = false;
          trigger.click(function () {
            hamburger_cross();
          });
          function hamburger_cross() {
            if (isClosed == true) {
              overlay.hide();
              trigger.removeClass('is-open');
              trigger.addClass('is-closed');
              isClosed = false;
            } else {
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
      }
    
  selectSegment(segment){
    this.IsSegmentSelected = true;
    this.currentSegmentIndex = this.lesson.Segments.indexOf(segment);
    this.currentSegment = this.lesson.Segments[this.currentSegmentIndex];
    
   // // console.log()this.currentSegment);
  }
 
  onLessonSaveClick()
    {
      if (this.lesson.LessonName == '' || this.lesson.LessonName == null)
      {
        alertify.alert('Incubator Says', 'Lesson Name is Required');
        return true;
      }
      
      // get options and set them as suggested answers and correct answers
      this.lessonSharedService.saveLesson();
    }
    onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
       this.image = reader.result.split(',')[1];
       this.lesson.Segments[this.currentSegmentIndex].SegmentImages[0].Image =  reader.result.split(',')[1];
      };
    }
  }
  selectTemplateId(template){
    if (template.Id != 2)
     this.lesson.Segments[this.currentSegmentIndex].SegmentImages[0].Image = '';
     this.selectedTemplate = template;
     this.lesson.Segments[this.currentSegmentIndex].TemplateId = template.Id ;
     // console.log()this.lesson.Segments[this.currentSegmentIndex]);
     if(template.Id == 3)
     {
       this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question=this.currentSegment.ScreenContent;
       return true;
     }
     else if(template.Id == 4)
     {
      this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question=this.currentSegment.ScreenContent;
      return true;
     }
     else if(template.Id == 5)
     {
      this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question=this.currentSegment.ScreenContent;
      return true;
     }
     else if(template.Id == 6)
     {
      this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question=this.currentSegment.ScreenContent;
      return true;
     }
   
  }
 
  true_false_answer(answer)
  {
    this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer=answer?"True":"False";
    // alert(this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].CorrectAnswer);
   // this.true_false_selection=answer;
  }
  multiple_choice_answer1(option1)
  {
    this.McOpt1 = true;
    this.McOpt2 = false;
    this.McOpt3 = false;
    this.McOpt4 = false;
   this.multiple_choice_selection = option1;
   this.mcoption1right=true;
   this.mcoption1radiobutton=false;
   this.mcoption2right=false;
   this.mcoption2radiobutton=true;
   this.mcoption3right=false;
    this.mcoption3radiobutton=true;
    this.mcoption4right=false;
    this.mcoption4radiobutton=true;
  }
  multiple_choice_answer2(option2)
  {
    this.McOpt1 = false;
    this.McOpt2 = true;
    this.McOpt3 = false;
    this.McOpt4 = false;
   this.multiple_choice_selection = option2;
   this.mcoption1right=false;
   this.mcoption1radiobutton=true;
   this.mcoption2right=true;
   this.mcoption2radiobutton=false;
   this.mcoption3right=false;
   this.mcoption3radiobutton=true;
   this.mcoption4right=false;
   this.mcoption4radiobutton=true;
  }
  multiple_choice_answer3(option3)
  {
    this.McOpt1 = false;
    this.McOpt2 = false;
    this.McOpt3 = true;
    this.McOpt4 = false;
   this.multiple_choice_selection = option3;
   this.mcoption1right=false;
   this.mcoption1radiobutton=true;
   this.mcoption2right=false;
   this.mcoption2radiobutton=true;
   this.mcoption3right=true;
   this.mcoption3radiobutton=false;
   this.mcoption4right=false;
   this.mcoption4radiobutton=true;
  }
  multiple_choice_answer4(option4)
  {
    this.McOpt1 = false;
    this.McOpt2 = false;
    this.McOpt3 = false;
    this.McOpt4 = true;
   this.multiple_choice_selection = option4;
   this.mcoption1right=false;
   this.mcoption1radiobutton=true;
   this.mcoption2right=false;
   this.mcoption2radiobutton=true;
   this.mcoption3right=false;
   this.mcoption3radiobutton=true;
   this.mcoption4right=true;
   this.mcoption4radiobutton=false;
  }
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
  multiple_select_answer1(option1)
  {
    this.MsOpt1 = true;
    this.multiple_select_selection1 = option1;
  }
  multiple_select_answer2(option2)
  {
  this.MsOpt2 = true;
  this.multiple_select_selection2 = option2;
  alert(option2);
  }
  multiple_select_answer3(option3)
  {
  this.MsOpt3 = true;
  this.multiple_select_selection3 = option3;
  alert(option3);
  }
  multiple_select_answer4(option4)
  {
  this.MsOpt4 = true;
  this.multiple_select_selection4 = option4;

  }
  multiple_select_answer5(option5)
  {
  this.MsOpt5 = true;
  this.multiple_select_selection5 = option5;
  alert(option5);
  }
  checkoption1()
  {
    this.msoption1right=true;
    this.msoption1checkbox=false;
  }
  unselectoption1()
  {
    this.msoption1right=false;
    this.msoption1checkbox=true;
    this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[0].value=!this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[0].value;
  }
  checkoption2()
  {
    this.msoption2right=true;
    this.msoption2checkbox=false;
  }
  unselectoption2()
  {
    this.msoption2right=false;
    this.msoption2checkbox=true;
    this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[1].value=!this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[1].value;
  }
  checkoption3()
  {
    this.msoption3right=true;
    this.msoption3checkbox=false;
  }
  unselectoption3()
  {
    this.msoption3right=false;
    this.msoption3checkbox=true;
    this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[2].value=!this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[2].value;
  }
  checkoption4()
  {
    this.msoption4right=true;
    this.msoption4checkbox=false;
  }
  unselectoption4()
  {
    this.msoption4right=false;
    this.msoption4checkbox=true;
    this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[3].value=!this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[3].value;
  }
  checkoption5()
  {
    this.msoption5right=true;
    this.msoption5checkbox=false;
  }
  unselectoption5()
  {
    this.msoption5right=false;
    this.msoption5checkbox=true;
    this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[4].value=!this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].mSelect[4].value;
  }
  
  valuechange(newValue) {
    this.lesson.Segments[this.currentSegmentIndex].QuestionAnswers[0].Question = newValue;
    // console.log()newValue);
  }
  ngDoCheck(): void {
    this.lesson.Segments.forEach(element => {
      if (element.TemplateId == 4){
        element.QuestionAnswers[0].CorrectAnswer = this.multiple_choice_selection;
        element.QuestionAnswers[0].SuggestedAnswers =  element.QuestionAnswers[0].mcOptions.McOption1 +
       ',' + element.QuestionAnswers[0].mcOptions.McOption2 + ',' +
       element.QuestionAnswers[0].mcOptions.McOption3 + ',' + element.QuestionAnswers[0].mcOptions.McOption4;
      }
      else  if (element.TemplateId == 3){
    
        element.QuestionAnswers[0].SuggestedAnswers =  'True , False';
      }
      else if (element.TemplateId == 5){
        let correctAnswer = '';
        let suggestedAnswer = '';
        element.QuestionAnswers[0].mSelect.forEach(m => {
          suggestedAnswer = suggestedAnswer == '' ? m.mSelectOption : suggestedAnswer + ',' + m.mSelectOption;
          if (m.value)
            correctAnswer = correctAnswer == '' ? m.mSelectOption : correctAnswer + ',' + m.mSelectOption;
        });
        element.QuestionAnswers[0].CorrectAnswer = correctAnswer;
        element.QuestionAnswers[0].SuggestedAnswers = suggestedAnswer;
      }
      else if (element.TemplateId == 6)
      {    
       element.QuestionAnswers[0].SuggestedAnswers = '';
      }
    });
    this.lessonSharedService.saveCurrentLesson(this.lesson);
  }
}
export class Template
{
  TemplateId: number;
  TemplateName: string;
  TemplateImage: string;
}


